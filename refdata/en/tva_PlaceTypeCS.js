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

var voc = {"terms":{"1":["My Home"],"2":["Transportation Facilities"],"3":["Traffic Facilities"],"4":["Work Place"],"5":["School"],"6":["Hall"],"7":["Public Facilities"],"8":["Historic Site"],"9":["Natural Outdoor Spot"],"10":["Hotel"],"11":["Restaurant"],"12":["Shopping Spot"],"13":["Leisure Spot"],"14":["Sports Spot"],"15":["Mobility"],"2.1":["Station"],"2.2":["Stop"],"2.3":["Airport"],"2.4":["Harbor"],"3.1":["Entrance"],"3.2":["Parking"],"3.3":["Crossing"],"3.4":["Street"],"3.5":["Gas Station"],"3.6":["Highway"],"3.7":["Interchange"],"3.8":["Service Area"],"4.1":["Office"],"4.2":["Factory"],"4.3":["Studio"],"4.4":["Outdoor"],"5.1":["University"],"5.2":["High School"],"5.3":["Kindergarten"],"6.1":["Museum"],"6.2":["Library"],"6.3":["Theater"],"7.1":["Bank"],"7.2":["Post Office"],"7.3":["Hospital"],"7.4":["Police"],"7.5":["Public Office"],"7.6":["Fire-Brigade Station"],"8.1":["Palace"],"8.2":["Castle"],"8.3":["Church"],"8.4":["Temple"],"8.5":["Shrine"],"8.6":["Graveyard"],"9.1":["Mountain"],"9.2":["Sea"],"9.3":["Lake"],"9.4":["Pond"],"9.5":["River"],"9.6":["Valley"],"9.7":["Field"],"9.8":["Island"],"9.9":["Sky"],"12.1":["Department Store"],"12.2":["Supermarket"],"12.3":["Shop"],"13.1":["Park"],"13.2":["Garden"],"13.3":["Amusement Park"],"13.4":["Resort"],"13.5":["Hot Spring"],"14.1":["Stadium"],"14.2":["Sports Gym"],"14.3":["Tennis Court"],"14.4":["Golf Course"],"14.5":["Swimming Pool"],"14.6":["Skiing Ground"],"14.7":["Skating Rink"],"15.1":["In Transportation"],"15.1.1":["In Car"],"15.1.2":["In Train"],"15.1.3":["In Airplane"],"15.2":["On Foot"],"15.2.1":["Walking"],"15.2.2":["Running"]},"names":{"My Home":["1"],"Transportation Facilities":["2"],"Station":["2.1"],"Stop":["2.2"],"Airport":["2.3"],"Harbor":["2.4"],"Traffic Facilities":["3"],"Entrance":["3.1"],"Parking":["3.2"],"Crossing":["3.3"],"Street":["3.4"],"Gas Station":["3.5"],"Highway":["3.6"],"Interchange":["3.7"],"Service Area":["3.8"],"Work Place":["4"],"Office":["4.1"],"Factory":["4.2"],"Studio":["4.3"],"Outdoor":["4.4"],"School":["5"],"University":["5.1"],"High School":["5.2"],"Kindergarten":["5.3"],"Hall":["6"],"Museum":["6.1"],"Library":["6.2"],"Theater":["6.3"],"Public Facilities":["7"],"Bank":["7.1"],"Post Office":["7.2"],"Hospital":["7.3"],"Police":["7.4"],"Public Office":["7.5"],"Fire-Brigade Station":["7.6"],"Historic Site":["8"],"Palace":["8.1"],"Castle":["8.2"],"Church":["8.3"],"Temple":["8.4"],"Shrine":["8.5"],"Graveyard":["8.6"],"Natural Outdoor Spot":["9"],"Mountain":["9.1"],"Sea":["9.2"],"Lake":["9.3"],"Pond":["9.4"],"River":["9.5"],"Valley":["9.6"],"Field":["9.7"],"Island":["9.8"],"Sky":["9.9"],"Hotel":["10"],"Restaurant":["11"],"Shopping Spot":["12"],"Department Store":["12.1"],"Supermarket":["12.2"],"Shop":["12.3"],"Leisure Spot":["13"],"Park":["13.1"],"Garden":["13.2"],"Amusement Park":["13.3"],"Resort":["13.4"],"Hot Spring":["13.5"],"Sports Spot":["14"],"Stadium":["14.1"],"Sports Gym":["14.2"],"Tennis Court":["14.3"],"Golf Course":["14.4"],"Swimming Pool":["14.5"],"Skiing Ground":["14.6"],"Skating Rink":["14.7"],"Mobility":["15"],"In Transportation":["15.1"],"In Car":["15.1.1"],"In Train":["15.1.2"],"In Airplane":["15.1.3"],"On Foot":["15.2"],"Walking":["15.2.1"],"Running":["15.2.2"]},"uri":"urn:tva:metadata-cs:PlaceTypeCS_2005","versionDate":"2013-01-07"}
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