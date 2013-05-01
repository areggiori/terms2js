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

var voc = {"terms":{"4.0":["Proprietary"],"4.1":["GENERAL AUDIENCE"],"4.2":["AGE GROUPS"],"4.2.1":["Children"],"4.2.1.0":["specific single age"],"4.2.1.1":["age 4-7"],"4.2.1.2":["age 8-13"],"4.2.1.3":["age 14-15"],"4.2.1.4":["age 0-3"],"4.2.2":["Adults"],"4.2.2.1":["age 16-17"],"4.2.2.2":["age 18-24"],"4.2.2.3":["age 25-34"],"4.2.2.4":["age 35-44"],"4.2.2.5":["age 45-54"],"4.2.2.6":["age 55-64"],"4.2.2.7":["age 65+"],"4.2.2.8":["specific single age"],"4.2.3":["Teenagers"],"4.2.4":["Pre-teens"],"4.3":["SOCIAL/REGIONAL/MINORITY GROUPS"],"4.3.1":["Ethnic"],"4.3.1.1":["Immigrant groups"],"4.3.1.2":["Indigineous"],"4.3.2":["Religious"],"4.3.3":["Linguistic"],"4.4":["OCCUPATIONAL GROUPS"],"4.4.1":["AB"],"4.4.1.1":["A"],"4.4.1.2":["B"],"4.4.2":["C1C2"],"4.4.2.1":["C1"],"4.4.2.2":["C2"],"4.4.3":["DE"],"4.4.3.1":["D"],"4.4.3.2":["E"],"4.5":["OTHER SPECIAL INTEREST/OCCUPATIONAL GROUPS"],"4.5.1":["Main shopper"],"4.5.2":["Housewife","Housekeeper"],"4.5.3":["Student"],"4.5.4":["People with disabilities"],"4.6":["GENDER"],"4.6.1":["Primarily for males"],"4.6.2":["Primarily for females"],"4.7":["GEOGRAPHICAL"],"4.7.1":["Universal"],"4.7.2":["Continental"],"4.7.3":["National"],"4.7.4":["Regional"],"4.7.5":["Local"],"4.7.6":["Multinational"],"4.7.7":["International"],"4.8":["EDUCATION STANDARD"],"4.8.1":["Primary"],"4.8.2":["Secondary"],"4.8.3":["Tertiary"],"4.8.4":["Post Graduate/Life Long Learning"],"4.9":["LIFESTYLE STAGES"],"4.9.1":["Single"],"4.9.2":["Couple"],"4.9.3":["Family with Children 0-3"],"4.9.4":["Family with Children 4-7"],"4.9.5":["Family with Children 8-15"],"4.9.6":["Family with Children 16+"],"4.9.7":["Empty Nester"],"4.9.8":["Retired"],"4.11":["LANGUAGE OF TARGET AUDIENCE"]},"names":{"Proprietary":["4.0"],"GENERAL AUDIENCE":["4.1"],"AGE GROUPS":["4.2"],"Children":["4.2.1"],"specific single age":["4.2.1.0","4.2.2.8"],"age 4-7":["4.2.1.1"],"age 8-13":["4.2.1.2"],"age 14-15":["4.2.1.3"],"age 0-3":["4.2.1.4"],"Adults":["4.2.2"],"age 16-17":["4.2.2.1"],"age 18-24":["4.2.2.2"],"age 25-34":["4.2.2.3"],"age 35-44":["4.2.2.4"],"age 45-54":["4.2.2.5"],"age 55-64":["4.2.2.6"],"age 65+":["4.2.2.7"],"Teenagers":["4.2.3"],"Pre-teens":["4.2.4"],"SOCIAL/REGIONAL/MINORITY GROUPS":["4.3"],"Ethnic":["4.3.1"],"Immigrant groups":["4.3.1.1"],"Indigineous":["4.3.1.2"],"Religious":["4.3.2"],"Linguistic":["4.3.3"],"OCCUPATIONAL GROUPS":["4.4"],"AB":["4.4.1"],"A":["4.4.1.1"],"B":["4.4.1.2"],"C1C2":["4.4.2"],"C1":["4.4.2.1"],"C2":["4.4.2.2"],"DE":["4.4.3"],"D":["4.4.3.1"],"E":["4.4.3.2"],"OTHER SPECIAL INTEREST/OCCUPATIONAL GROUPS":["4.5"],"Main shopper":["4.5.1"],"Housewife":["4.5.2"],"Housekeeper":["4.5.2"],"Student":["4.5.3"],"People with disabilities":["4.5.4"],"GENDER":["4.6"],"Primarily for males":["4.6.1"],"Primarily for females":["4.6.2"],"GEOGRAPHICAL":["4.7"],"Universal":["4.7.1"],"Continental":["4.7.2"],"National":["4.7.3"],"Regional":["4.7.4"],"Local":["4.7.5"],"Multinational":["4.7.6"],"International":["4.7.7"],"EDUCATION STANDARD":["4.8"],"Primary":["4.8.1"],"Secondary":["4.8.2"],"Tertiary":["4.8.3"],"Post Graduate/Life Long Learning":["4.8.4"],"LIFESTYLE STAGES":["4.9"],"Single":["4.9.1"],"Couple":["4.9.2"],"Family with Children 0-3":["4.9.3"],"Family with Children 4-7":["4.9.4"],"Family with Children 8-15":["4.9.5"],"Family with Children 16+":["4.9.6"],"Empty Nester":["4.9.7"],"Retired":["4.9.8"],"LANGUAGE OF TARGET AUDIENCE":["4.11"]},"uri":"urn:ebu:metadata-cs:IntendedAudienceCodeCS_2011","versionDate":"2013-01-07"}
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
