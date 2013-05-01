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

var voc = {"terms":{"1":["Core 3D Compression Profile"],"2":["Basic 2D Scene Graph Profile"],"3":["Simple 2D Scene Graph Profile"],"4":["Core 2D Scene Graph Profile"],"5":["Main 2D Scene Graph Profile"],"6":["Advanced 2D Scene Graph Profile"],"7":["Complete 2D Scene Graph Profile"],"8":["Audio Scene Graph Profile"],"9":["3D Audio Scene Graph Profile"],"10":["Complete Scene Graph Profile"],"11":["X3D Interactive Scene Graph Profile"],"12":["Simple 2D Graphics Profile @ Level 1"],"13":["Simple 2D + Text Graphics Profile"],"14":["Core 2D Graphics Profile"],"15":["Advanced 2D Graphics Profile"],"16":["3D Audio Graphics Profile"],"17":["Complete Graphics Profile"],"18":["X3D Interactive Graphics Profile"],"2.1":["Basic 2D Scene Graph Profile @ Level 1"],"3.1":["Simple 2D Scene Graph Profile @ Level 1"],"3.2":["Simple 2D Scene Graph Profile @ Level 2"],"4.1":["Core 2D Scene Graph Profile @ Level 1"],"4.2":["Core 2D Scene Graph Profile @ Level 2"],"5.1":["Main 2D Scene Graph Profile @ Level 1"],"5.2":["Main 2D Scene Graph Profile @ Level 2"],"5.3":["Main 2D Scene Graph Profile @ Level 3"],"6.1":["Advanced 2D Scene Graph Profile @ Level 1"],"6.2":["Advanced 2D Scene Graph Profile @ Level 2"],"6.3":["Advanced 2D Scene Graph Profile @ Level 3"],"8.1":["Audio Scene Graph Profile @ Level 1"],"8.2":["Audio Scene Graph Profile @ Level 2"],"8.3":["Audio Scene Graph Profile @ Level 3"],"8.4":["Audio Scene Graph Profile @ Level 4"],"9.1":["3D Audio Scene Graph Profile @ Level 1"],"9.2":["3D Audio Scene Graph Profile @ Level 2"],"9.3":["3D Audio Scene Graph Profile @ Level 3"],"9.4":["3D Audio Scene Graph Profile @ Level 4"],"13.1":["Simple 2D + Text Graphics Profile @ Level 1"],"13.2":["Simple 2D + Text Graphics Profile @ Level 2"],"14.1":["Core 2D Graphics Profile @ Level 1"],"14.2":["Core 2D Graphics Profile @ Level 2"],"15.1":["Advanced 2D Graphics Profile @ Level 1"],"15.2":["Advanced 2D Graphics Profile @ Level 2"]},"names":{"Core 3D Compression Profile":["1"],"Basic 2D Scene Graph Profile":["2"],"Basic 2D Scene Graph Profile @ Level 1":["2.1"],"Simple 2D Scene Graph Profile":["3"],"Simple 2D Scene Graph Profile @ Level 1":["3.1"],"Simple 2D Scene Graph Profile @ Level 2":["3.2"],"Core 2D Scene Graph Profile":["4"],"Core 2D Scene Graph Profile @ Level 1":["4.1"],"Core 2D Scene Graph Profile @ Level 2":["4.2"],"Main 2D Scene Graph Profile":["5"],"Main 2D Scene Graph Profile @ Level 1":["5.1"],"Main 2D Scene Graph Profile @ Level 2":["5.2"],"Main 2D Scene Graph Profile @ Level 3":["5.3"],"Advanced 2D Scene Graph Profile":["6"],"Advanced 2D Scene Graph Profile @ Level 1":["6.1"],"Advanced 2D Scene Graph Profile @ Level 2":["6.2"],"Advanced 2D Scene Graph Profile @ Level 3":["6.3"],"Complete 2D Scene Graph Profile":["7"],"Audio Scene Graph Profile":["8"],"Audio Scene Graph Profile @ Level 1":["8.1"],"Audio Scene Graph Profile @ Level 2":["8.2"],"Audio Scene Graph Profile @ Level 3":["8.3"],"Audio Scene Graph Profile @ Level 4":["8.4"],"3D Audio Scene Graph Profile":["9"],"3D Audio Scene Graph Profile @ Level 1":["9.1"],"3D Audio Scene Graph Profile @ Level 2":["9.2"],"3D Audio Scene Graph Profile @ Level 3":["9.3"],"3D Audio Scene Graph Profile @ Level 4":["9.4"],"Complete Scene Graph Profile":["10"],"X3D Interactive Scene Graph Profile":["11"],"Simple 2D Graphics Profile @ Level 1":["12"],"Simple 2D + Text Graphics Profile":["13"],"Simple 2D + Text Graphics Profile @ Level 1":["13.1"],"Simple 2D + Text Graphics Profile @ Level 2":["13.2"],"Core 2D Graphics Profile":["14"],"Core 2D Graphics Profile @ Level 1":["14.1"],"Core 2D Graphics Profile @ Level 2":["14.2"],"Advanced 2D Graphics Profile":["15"],"Advanced 2D Graphics Profile @ Level 1":["15.1"],"Advanced 2D Graphics Profile @ Level 2":["15.2"],"3D Audio Graphics Profile":["16"],"Complete Graphics Profile":["17"],"X3D Interactive Graphics Profile":["18"]},"uri":"urn:ebu:metadata-cs:mpeg7GraphicsAndSceneGraphProfilesCS_2009"}
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