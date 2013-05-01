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

;(function(exports){

/* PRIVATE */

//embed object json
//no accessible directly, you must use isValid, getTermId, getTermUri, isDeprecated, getAllTermId, getTermInfo, getUri or getVersionDate

var voc = {"terms":{"8.0":["Proprietary"],"8.1":["Alternative"],"8.2":["Analytical"],"8.3":["Astonishing"],"8.4":["Ambitious"],"8.5":["Black"],"8.6":["Breathtaking"],"8.7":["Chilling"],"8.8":["Coarse"],"8.9":["Compelling"],"8.10":["Confrontational"],"8.11":["Contemporary"],"8.12":["Crazy"],"8.13":["Cutting edge"],"8.14":["Eclectic"],"8.15":["Edifying"],"8.16":["Exciting"],"8.17":["Fast-moving"],"8.18":["Frantic"],"8.19":["Fun"],"8.20":["Gripping"],"8.21":["Gritty"],"8.22":["Gutsy"],"8.23":["Happy"],"8.24":["Heart-rending"],"8.25":["Heart-warming"],"8.26":["Hot"],"8.27":["Humorous"],"8.28":["Innovative"],"8.29":["Insightful"],"8.30":["Inspirational"],"8.31":["Intriguing"],"8.32":["Irreverent"],"8.33":["Laid back"],"8.34":["Outrageous"],"8.35":["Peaceful"],"8.36":["Powerful"],"8.37":["Practical"],"8.38":["Rollercoaster"],"8.39":["Romantic"],"8.40":["Rousing"],"8.41":["Sad"],"8.42":["Satirical"],"8.43":["Serious"],"8.44":["Sexy"],"8.45":["Shocking"],"8.46":["Silly"],"8.47":["Spooky"],"8.48":["Stunning"],"8.49":["Stylish"],"8.50":["Terrifying"],"8.51":["Thriller"],"8.52":["Violent"],"8.53":["Wacky"]},"names":{"Proprietary":["8.0"],"Alternative":["8.1"],"Analytical":["8.2"],"Astonishing":["8.3"],"Ambitious":["8.4"],"Black":["8.5"],"Breathtaking":["8.6"],"Chilling":["8.7"],"Coarse":["8.8"],"Compelling":["8.9"],"Confrontational":["8.10"],"Contemporary":["8.11"],"Crazy":["8.12"],"Cutting edge":["8.13"],"Eclectic":["8.14"],"Edifying":["8.15"],"Exciting":["8.16"],"Fast-moving":["8.17"],"Frantic":["8.18"],"Fun":["8.19"],"Gripping":["8.20"],"Gritty":["8.21"],"Gutsy":["8.22"],"Happy":["8.23"],"Heart-rending":["8.24"],"Heart-warming":["8.25"],"Hot":["8.26"],"Humorous":["8.27"],"Innovative":["8.28"],"Insightful":["8.29"],"Inspirational":["8.30"],"Intriguing":["8.31"],"Irreverent":["8.32"],"Laid back":["8.33"],"Outrageous":["8.34"],"Peaceful":["8.35"],"Powerful":["8.36"],"Practical":["8.37"],"Rollercoaster":["8.38"],"Romantic":["8.39"],"Rousing":["8.40"],"Sad":["8.41"],"Satirical":["8.42"],"Serious":["8.43"],"Sexy":["8.44"],"Shocking":["8.45"],"Silly":["8.46"],"Spooky":["8.47"],"Stunning":["8.48"],"Stylish":["8.49"],"Terrifying":["8.50"],"Thriller":["8.51"],"Violent":["8.52"],"Wacky":["8.53"]},"uri":"urn:tva:metadata-cs:AtmosphereCS_2008","versionDate":"2013-01-07"}
// Return true if term is the fully qualified term URI, false otherwise
var isTermUri = function (term) {
  return (term.indexOf (voc.uri) == 0) ? true : false;
};

// Return a string containing the vocabulary namespace URI.
var getUri = function () {
  return voc.uri;
};

// Return a string containing the vocabulary namespace version date.
var getVersionDate = function () {
  return voc.versionDate;
};

/* PUBLIC */

// Return boolean value, true if term (termId or termUri) is supported
exports.isValid = function (term) {
  var t;
  if (isTermUri (term) == true) {
    t = term.replace (voc.uri, '');
  } else {
    t = term;
  }
  return voc.terms.hasOwnProperty(t);
};

// Return a string containing the termId given the fully qualified term URI. If term isn't matching return null.
exports.getTermId = function (termUri) {
  if (isTermUri (termUri) == true) {
    return termUri.replace (voc.uri, '');
  } else {
    return null;
  }
};

// Return a string containing the fully qualified term URI.
exports.getTermUri = function (termId) {
  return voc.uri + ((voc.uri.match (/^urn:/)) ? ':' : '#') + termId;
};

// Return boolean value, true if termId is deprecated
exports.isDeprecated = function (termId) {
  if (voc.deprecated) {
    for (var i=0; i < voc.deprecated; i++) {
      if (voc.deprecated[i] == termId) return true;
    }
  }
  return false;
};

// Return an array with all the termId codes supported.
exports.getAllTermId = function() {
  var result = [];
  for (termId in voc.terms) {
    result.push (termId);
  }
  return result;
};

// Return an array with all the termId matching string.
exports.getAllTermIdMatching = function (string) {
  var result = [];
  if (voc.names[string]) {
    result.push.apply (result, voc.names[string]);
  } else {
    for (var n in voc.names) {
      if (voc.names[n].indexOf (string) !== -1)
        result.push.apply (result, voc.names[n]);
    }
  }
  return result;
};

// Return object {"Name"}. If termId isn't supported return {}.
exports.getTermInfo = function (termId) {
  var result = {};
  if (exports.isValid (termId)) {
    result["Name"] = voc.terms[termId];
  }
  return result;
};

//allow executing by nodejs in the server or by javascript in the browser
})(typeof exports === 'undefined'? this['terms']={}: exports);