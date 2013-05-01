/*
 * Extract all terms from input vocabulary
 * Usage: node terms2js.js vocabulary.xml output-dir [default_lang]
 * Output: One file for each language like vocabulary.en.json.
 *	   If the vocabulary does not use xml:lang output vocabulary.json.
 */

/*
 * Copyright 2013
 * Alberto Attilio Reggiori <alberto@derrickmedia.com>
 * https://github.com/dplatform/MetadataReferenceData
 *
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

var fs = require('fs'),
    path = require('path'),
    util = require('util'),
    sax = require('sax'),
    exec = require('child_process').exec,
    strict = true;

if (!process.argv[2]) {
  console.log ("\tMissing vocabulary file.");
  process.exit (1);
}

if (!process.argv[3] || (!(fs.existsSync(process.argv[3])))) {
  console.log ("\tMissing or invalid output directory.");
  process.exit (1);
}

var vocabulary_file = process.argv[2];
var output_dir = process.argv[3];

var default_lang = 'en';

if (process.argv[4]) {
  default_lang = process.argv[4];
}

var parser = sax.parser(strict, {trim:true});

var uri;
var versionDate;
var termID;

var json = {};
var tags = [];
var langs = [];

parser.onopentag = function (node) {
  tags.push (node.name);

  if (node.name === "ClassificationScheme") {
    if (node.attributes) {
      if (node.attributes.uri) {
        uri = node.attributes.uri;
      }
      if (node.attributes.versionDate) {
        versionDate = node.attributes.versionDate;
      }
    }
  }

  if (node.name === "Term" && node.attributes && node.attributes.termID) {
    termID = node.attributes.termID;
  }

  if (node.name === "Name" || node.name === "Definition") {
    if (node.attributes && node.attributes["xml:lang"]) {
      langs.push (node.attributes["xml:lang"]);
    } else {
      langs.push (default_lang);
    }
    if (!json[langs[langs.length-1]]) {
      json[langs[langs.length-1]] = {
	"terms": {},
	"names": {},
	/*"definitions": {},*/
	"deprecated": []
      };
    }

    if (!json[langs[langs.length-1]].terms[termID]) {
      json[langs[langs.length-1]].terms[termID] = [];
    }
  }
};

parser.onclosetag = function (tag) {
  tags.pop ();

  if (tag === "Name" || tag === "Definition") {
    langs.pop ();
  }
}

parser.ontext = function (text) {

  if (tags[tags.length-1] === "ValidityFlag" && text && !text.match(/(1|yes|on)/)) {
    for (var l in json) {
      json[l].deprecated.push (termID);
    }
  }

  if (tags[tags.length-1] === "Name") {
    var values = text.replace (/[\n\r\t\f]/gi, "").split (" / ");
    json[langs[langs.length-1]].terms[termID].push.apply (json[langs[langs.length-1]].terms[termID], values);
    for (var i=0 ; i < values.length ; i++) {
      if (!json[langs[langs.length-1]].names[values[i]]) {
        json[langs[langs.length-1]].names[values[i]] = []
      }
      json[langs[langs.length-1]].names[values[i]].push (termID);
    }
  }

  if (tags[tags.length-1] === "Definition") {
    // NOTE - try to be clever and use a Definition in a given language definition if no Name defined
    //	      For example see the defintions in ebu_ParentalGuidanceCodeCS.xml
    if (json[langs[langs.length-1]].terms[termID].length == 0) {
      var val = text.replace (/[\n\r\t\f]/gi, "");
      json[langs[langs.length-1]].terms[termID].push (val);
      if (!json[langs[langs.length-1]].names[val]) {
        json[langs[langs.length-1]].names[val] = [];
      }
      json[langs[langs.length-1]].names[val].push (termID);
    }

    // NOTE - the following is not used yet
    //json[langs[langs.length-1]].definitions[termID] = text;
  }
}

var data = fs.readFileSync(path.resolve(__dirname, vocabulary_file), 'utf8');

parser.write(data).close();

//console.log (JSON.stringify(json, null, '\t'));

for (var lang in json) {
  json[lang].uri = uri;
  json[lang].versionDate = versionDate;

  if (json[lang].deprecated.length == 0)
    delete json[lang].deprecated;

  var langdir = path.resolve(output_dir, lang);

  if (!fs.existsSync (langdir))
    fs.mkdirSync (langdir);

  var voc_file = vocabulary_file.replace (".xml", "").split (path.sep).pop ();

  var out_file = path.resolve (langdir, voc_file + ".json");

  var data = JSON.stringify(json[lang]);

  fs.writeFileSync (out_file, data);
  console.log("\tGenerated "+out_file);

  exec ('gzip -9 -c ' + out_file + ' > ' + out_file + '.gz', function (err, stdout, stderr) {
    if (!err) {
      console.log("\tCompressed "+out_file+".gz");
    } 

    var header = fs.readFileSync (path.resolve(__dirname, 'header.js'));
    var footer = fs.readFileSync (path.resolve(__dirname, 'footer.js'));

    out_file = path.resolve (langdir, voc_file + ".js");

    data = header + "\nvar voc = " + JSON.stringify(json[lang]) + "\n" + footer;

    fs.writeFileSync (out_file, data);
    console.log("\tGenerated "+out_file);

    exec ('uglifyjs ' + out_file, function (err, stdout, stderr) {
      if (!err) {
        var minijs = stdout;

        out_file = path.resolve (langdir, voc_file + ".min.js");

        data = "/* From: https://github.com/dplatform/MetadataReferenceData */\n" + minijs;

        fs.writeFileSync (out_file, data);
        console.log("\tUglifyed to "+out_file);

        exec ('gzip -9 -c ' + out_file + ' > ' + out_file + '.gz', function (err, stdout, stderr) {
          if (!err) {
            console.log("\tCompressed "+out_file+".gz");
          } 
        });
      } 
    });
  });

/*
touch languages.min.js languages.min.js.gz
touch languages.json languages.json.gz
*/
}
