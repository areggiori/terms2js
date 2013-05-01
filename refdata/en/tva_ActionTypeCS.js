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

var voc = {"terms":{"1":["Audio-Video"],"2":["Video"],"3":["Data"],"4":["Commerce"],"1.1":["PlayRecording"],"1.2":["PlayStream"],"1.3":["Record"],"1.4":["Preview"],"1.5":["Pause"],"1.6":["FastForward"],"1.7":["Rewind"],"1.8":["SkipForward"],"1.9":["SkipBackward"],"1.10":["Mute"],"1.11":["VolumeUp"],"1.12":["VolumeDown"],"1.13":["Loop/Repeat"],"1.14":["Shuffle"],"1.15":["SkipToStart"],"1.16":["SkipToEnd"],"1.17":["CopyCD"],"1.18":["RatingAction"],"2.1":["Zoom"],"2.2":["SlowMotion"],"2.3":["CCOn"],"2.4":["StepForward"],"2.5":["StepBackward"],"3.1":["ClickThrough"],"3.2":["ScrollUp"],"3.3":["ScrollDown"],"3.4":["ViewGuide"],"3.5":["SavePage"],"3.6":["PrintPage"],"3.7":["Search"],"3.8":["SubmitForm"],"3.9":["SubmitQuery"],"3.10":["Archive"],"4.1":["Buy"],"4.2":["AddToWishList"],"4.3":["AddToCart"]},"names":{"Audio-Video":["1"],"PlayRecording":["1.1"],"PlayStream":["1.2"],"Record":["1.3"],"Preview":["1.4"],"Pause":["1.5"],"FastForward":["1.6"],"Rewind":["1.7"],"SkipForward":["1.8"],"SkipBackward":["1.9"],"Mute":["1.10"],"VolumeUp":["1.11"],"VolumeDown":["1.12"],"Loop/Repeat":["1.13"],"Shuffle":["1.14"],"SkipToStart":["1.15"],"SkipToEnd":["1.16"],"CopyCD":["1.17"],"RatingAction":["1.18"],"Video":["2"],"Zoom":["2.1"],"SlowMotion":["2.2"],"CCOn":["2.3"],"StepForward":["2.4"],"StepBackward":["2.5"],"Data":["3"],"ClickThrough":["3.1"],"ScrollUp":["3.2"],"ScrollDown":["3.3"],"ViewGuide":["3.4"],"SavePage":["3.5"],"PrintPage":["3.6"],"Search":["3.7"],"SubmitForm":["3.8"],"SubmitQuery":["3.9"],"Archive":["3.10"],"Commerce":["4"],"Buy":["4.1"],"AddToWishList":["4.2"],"AddToCart":["4.3"]},"uri":"urn:tva:metadata:cs:ActionTypeCS:2010","versionDate":"2013-01-07"}
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
