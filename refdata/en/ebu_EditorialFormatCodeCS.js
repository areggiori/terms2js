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

var voc = {"terms":{"2.0":["Proprietary"],"2.1":["STRUCTURED","NON-FICTION","STRUCTURED","NON-FICTION"],"2.1.1":["Bulletin"],"2.1.2":["Magazine"],"2.1.2.1":["Presenter led magazine"],"2.1.2.2":["Clip led magazine"],"2.1.3":["Event"],"2.1.3.1":["Commented event"],"2.1.3.2":["Uncommented event"],"2.1.4":["Documentary"],"2.1.5":["Discussion","Interview","Debate","Talkshow","Standup","Discussion","Interview","Debate","Talkshow","Standup"],"2.1.5.1":["Religious Talk"],"2.1.6":["Lecture/Speech/Presentation","Lecture","Speech","Presentation"],"2.1.7":["Textual (incl. relayed teletext)","incl. relayed teletext"],"2.1.8":["Phone-in"],"2.1.9":["DJ with discs"],"2.1.10":["Docusoap"],"2.1.11":["Reality"],"2.1.12":["Religious worship service"],"2.2":["REPRESENTATION/PLAY/FICTION","REPRESENTATION","PLAY","FICTION"],"2.2.1":["Fictional portrayal of life"],"2.2.2":["Readings"],"2.2.3":["Dramatic documentary"],"2.3":["CARTOON/ANIMATION/PUPPETRY","CARTOON","ANIMATION","PUPPETRY"],"2.3.1":["Anime"],"2.3.2":["Computer"],"2.3.3":["Cartoon"],"2.3.4":["Puppetry"],"2.3.4.1":["Real time puppetry"],"2.3.4.2":["Physical model animation"],"2.3.5":["3D"],"2.4":["SHOW","ENTERTAINMENT","SHOW","ENTERTAINMENT"],"2.4.1":["Hosted show"],"2.4.1.1":["Simple game show"],"2.4.1.2":["Big game show"],"2.4.2":["Panel-show"],"2.4.2.1":["Simple game show"],"2.4.2.2":["Big game show"],"2.4.3":["Non-hosted show"],"2.4.4":["Standup comedian(s)","standup","comedian"],"2.4.5":["Reality Show"],"2.4.5.1":["Observational show"],"2.4.5.2":["Controlled show","Real-life soap"],"2.4.6":["Contest","Competition","Contest","Competition"],"2.5":["ARTISTIC PERFORMANCE","MUSIC","BALLET","DANCE","THEATRE","ARTISTIC","PERFORMANCE","MUSIC","BALLET","DANCE","THEATER"],"2.5.1":["Solo performance"],"2.5.1.1":["Solo"],"2.5.1.2":["DJ/VJ with Discs"],"2.5.2":["Small ensemble performance"],"2.5.2.1":["Instrumental"],"2.5.3":["Large ensemble performance"],"2.5.3.1":["Orchestral"],"2.5.3.2":["Chorus"],"2.5.4":["Mixed"],"2.5.5":["Music video"],"2.5.99":["Other"],"2.6":["void"],"2.7":["INTERACTIVE"],"2.7.1":["LOCAL INTERACTIVITY"],"2.7.1.1":["Static informational"],"2.7.1.2":["Dynamic informational"],"2.7.1.3":["Viewing chats"],"2.7.1.4":["Quiz - Basic multiple choice"],"2.7.1.5":["Quiz - Text or number entry answers"],"2.7.1.6":["Re-ordering"],"2.7.1.7":["Positional"],"2.7.1.8":["Sync quiz"],"2.7.1.9":["Timer quiz"],"2.7.1.10":["Elimination and timer"],"2.7.1.11":["Categories"],"2.7.1.12":["Level based quiz/game","Level based quiz","game"],"2.7.1.13":["Following a sequence"],"2.7.1.14":["Local multi player"],"2.7.1.15":["Multi stream audio-video"],"2.7.1.16":["Enhanced advertisement"],"2.7.1.17":["Logic based games"],"2.7.1.18":["Word games"],"2.7.1.19":["Positional games"],"2.7.1.20":["Board games"],"2.7.1.21":["Text based gaming"],"2.7.1.22":["Dynamic 2D/3D graphics","Dynamic 2D","3D graphics"],"2.7.2":["INTERMITTENT RESPONSE"],"2.7.2.1":["Single impulse vote"],"2.7.2.2":["Impulse vote from choices"],"2.7.2.3":["Impulse Yes/No vote","Impulse Yes","No vote"],"2.7.2.4":["Impulse vote with a value"],"2.7.2.5":["Submit answers/form","Submit answers","form"],"2.7.2.6":["SMS using mobile"],"2.7.2.7":["SMS using TV remote"],"2.7.2.8":["Impulse gambling"],"2.7.2.9":["Impulse transaction"],"2.7.2.10":["Multi player TS networked services/games","Multi player TS networked services","games"],"2.7.2.11":["Interactive advertisement"],"2.7.3":["ALWAYS ON CONNECTION"],"2.7.3.1":["Chat Forum"],"2.7.3.2":["Chat Forum via web"],"2.7.3.3":["Threaded mail discussions"],"2.7.3.4":["Point to point"],"2.7.3.5":["3rd party point to point"],"2.7.3.6":["Voice chat using mic capability"],"2.7.3.7":["Dual player networked services/games","Dual player networked services","games"],"2.7.3.8":["Multi player RT networked services/games","Multi player RT networked services","games"],"2.7.3.9":["Gambling services"],"2.7.3.10":["Impulse transaction"],"2.7.3.11":["Non-linear audio-video"],"2.8":["Unknown"],"2.9":["Other"]},"names":{"Proprietary":["2.0"],"STRUCTURED":["2.1","2.1"],"NON-FICTION":["2.1","2.1"],"Bulletin":["2.1.1"],"Magazine":["2.1.2"],"Presenter led magazine":["2.1.2.1"],"Clip led magazine":["2.1.2.2"],"Event":["2.1.3"],"Commented event":["2.1.3.1"],"Uncommented event":["2.1.3.2"],"Documentary":["2.1.4"],"Discussion":["2.1.5","2.1.5"],"Interview":["2.1.5","2.1.5"],"Debate":["2.1.5","2.1.5"],"Talkshow":["2.1.5","2.1.5"],"Standup":["2.1.5","2.1.5"],"Religious Talk":["2.1.5.1"],"Lecture/Speech/Presentation":["2.1.6"],"Lecture":["2.1.6"],"Speech":["2.1.6"],"Presentation":["2.1.6"],"Textual (incl. relayed teletext)":["2.1.7"],"incl. relayed teletext":["2.1.7"],"Phone-in":["2.1.8"],"DJ with discs":["2.1.9"],"Docusoap":["2.1.10"],"Reality":["2.1.11"],"Religious worship service":["2.1.12"],"REPRESENTATION/PLAY/FICTION":["2.2"],"REPRESENTATION":["2.2"],"PLAY":["2.2"],"FICTION":["2.2"],"Fictional portrayal of life":["2.2.1"],"Readings":["2.2.2"],"Dramatic documentary":["2.2.3"],"CARTOON/ANIMATION/PUPPETRY":["2.3"],"CARTOON":["2.3"],"ANIMATION":["2.3"],"PUPPETRY":["2.3"],"Anime":["2.3.1"],"Computer":["2.3.2"],"Cartoon":["2.3.3"],"Puppetry":["2.3.4"],"Real time puppetry":["2.3.4.1"],"Physical model animation":["2.3.4.2"],"3D":["2.3.5"],"SHOW":["2.4","2.4"],"ENTERTAINMENT":["2.4","2.4"],"Hosted show":["2.4.1"],"Simple game show":["2.4.1.1","2.4.2.1"],"Big game show":["2.4.1.2","2.4.2.2"],"Panel-show":["2.4.2"],"Non-hosted show":["2.4.3"],"Standup comedian(s)":["2.4.4"],"standup":["2.4.4"],"comedian":["2.4.4"],"Reality Show":["2.4.5"],"Observational show":["2.4.5.1"],"Controlled show":["2.4.5.2"],"Real-life soap":["2.4.5.2"],"Contest":["2.4.6","2.4.6"],"Competition":["2.4.6","2.4.6"],"ARTISTIC PERFORMANCE":["2.5"],"MUSIC":["2.5","2.5"],"BALLET":["2.5","2.5"],"DANCE":["2.5","2.5"],"THEATRE":["2.5"],"ARTISTIC":["2.5"],"PERFORMANCE":["2.5"],"THEATER":["2.5"],"Solo performance":["2.5.1"],"Solo":["2.5.1.1"],"DJ/VJ with Discs":["2.5.1.2"],"Small ensemble performance":["2.5.2"],"Instrumental":["2.5.2.1"],"Large ensemble performance":["2.5.3"],"Orchestral":["2.5.3.1"],"Chorus":["2.5.3.2"],"Mixed":["2.5.4"],"Music video":["2.5.5"],"Other":["2.5.99","2.9"],"void":["2.6"],"INTERACTIVE":["2.7"],"LOCAL INTERACTIVITY":["2.7.1"],"Static informational":["2.7.1.1"],"Dynamic informational":["2.7.1.2"],"Viewing chats":["2.7.1.3"],"Quiz - Basic multiple choice":["2.7.1.4"],"Quiz - Text or number entry answers":["2.7.1.5"],"Re-ordering":["2.7.1.6"],"Positional":["2.7.1.7"],"Sync quiz":["2.7.1.8"],"Timer quiz":["2.7.1.9"],"Elimination and timer":["2.7.1.10"],"Categories":["2.7.1.11"],"Level based quiz/game":["2.7.1.12"],"Level based quiz":["2.7.1.12"],"game":["2.7.1.12"],"Following a sequence":["2.7.1.13"],"Local multi player":["2.7.1.14"],"Multi stream audio-video":["2.7.1.15"],"Enhanced advertisement":["2.7.1.16"],"Logic based games":["2.7.1.17"],"Word games":["2.7.1.18"],"Positional games":["2.7.1.19"],"Board games":["2.7.1.20"],"Text based gaming":["2.7.1.21"],"Dynamic 2D/3D graphics":["2.7.1.22"],"Dynamic 2D":["2.7.1.22"],"3D graphics":["2.7.1.22"],"INTERMITTENT RESPONSE":["2.7.2"],"Single impulse vote":["2.7.2.1"],"Impulse vote from choices":["2.7.2.2"],"Impulse Yes/No vote":["2.7.2.3"],"Impulse Yes":["2.7.2.3"],"No vote":["2.7.2.3"],"Impulse vote with a value":["2.7.2.4"],"Submit answers/form":["2.7.2.5"],"Submit answers":["2.7.2.5"],"form":["2.7.2.5"],"SMS using mobile":["2.7.2.6"],"SMS using TV remote":["2.7.2.7"],"Impulse gambling":["2.7.2.8"],"Impulse transaction":["2.7.2.9","2.7.3.10"],"Multi player TS networked services/games":["2.7.2.10"],"Multi player TS networked services":["2.7.2.10"],"games":["2.7.2.10","2.7.3.7","2.7.3.8"],"Interactive advertisement":["2.7.2.11"],"ALWAYS ON CONNECTION":["2.7.3"],"Chat Forum":["2.7.3.1"],"Chat Forum via web":["2.7.3.2"],"Threaded mail discussions":["2.7.3.3"],"Point to point":["2.7.3.4"],"3rd party point to point":["2.7.3.5"],"Voice chat using mic capability":["2.7.3.6"],"Dual player networked services/games":["2.7.3.7"],"Dual player networked services":["2.7.3.7"],"Multi player RT networked services/games":["2.7.3.8"],"Multi player RT networked services":["2.7.3.8"],"Gambling services":["2.7.3.9"],"Non-linear audio-video":["2.7.3.11"],"Unknown":["2.8"]},"deprecated":["2.6"],"uri":"urn:ebu:metadata-cs:EditorialFormatCodeCS_2011","versionDate":"2013-01-07"}
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