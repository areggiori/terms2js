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

var voc = {"terms":{"1":["Trailer"],"2":["GroupTrailer"],"3":["Sibling"],"4":["Alternative"],"5":["Parent"],"6":["Recommendation"],"7":["GroupRecommendation"],"8":["Commercial advert"],"9":["Direct product purchase"],"10":["For more information"],"12":["Recap"],"13":["The making of"],"14":["Support"],"15":["Segmentation"],"16":["Derived"],"17":["TVA RMPI document"],"18":["Content Package"],"19":["Promotional Still Image"],"20":["Broadcaster Website"],"21":["HasFormat"],"22":["IsFormatOf"],"23":["HasPart"],"24":["IsPartOf"],"25":["IsReferencedBy"],"26":["IsReplacedBy"],"27":["IsRequiredBy"],"28":["HasVersion"],"29":["References"],"30":["Replaces"],"31":["Requires"],"32":["Review Information"],"33":["Preview"],"34":["Current Broadcast"],"35":["Package Main Content"],"36":["IsEpisodeOf"],"37":["IsClipOf"],"38":["IsSeasonOf"],"39":["IsDerivedOf"],"40":["IsCompositeOf"],"41":["IsSupplementOf"],"42":["IsPromotionFor"],"43":["ChannelIdentification"],"44":["Best of"],"45":["Additional Material"],"46":["Extract"],"47":["Credit information"],"1.1":["HasTrailer"],"1.2":["IsTrailerOf"],"2.1":["HasGroupTrailer"],"2.2":["IsGroupTrailerOf"],"4.1":["Simulcast"],"4.2":["On-demand"],"4.3":["Catch-up"],"8.1":["Normal Advert"],"8.1.1":["HasNormalAdvert"],"8.1.2":["IsNormalAdvertOf"],"8.2":["Telescoped Advert"],"8.2.1":["HasTelescopedAdvert"],"8.2.2":["IsTelescopedAdvertOf"],"8.3":["Speedbump"],"8.3.1":["HasSpeedbump"],"8.3.2":["IsSpeedbumpOf"],"10.1":["Programme E-mail Address"],"10.2":["Programme Website"],"10.3":["Telephone Number"],"10.4":["Programme Transcript"],"10.5":["Interactive Enhancement"],"13.1":["HasMakingOf"],"13.2":["IsMakingOfFor"],"14.1":["Support E-mail Address"],"14.2":["Support Website"],"14.3":["Telephone Helpline"],"15.1":["Static Segmentation"],"15.2":["Live Segmentation"],"15.3":["Live & Post Segmentation"],"15.4":["Post Segmentation"],"32.1":["HasReviewInformation"],"32.2":["IsReviewInformationFor"],"33.1":["HasPreview"],"33.2":["IsPreviewOf"],"43.1":["IsChannelIdentificationOf"],"43.2":["HasChannelIdentification"],"44.1":["IsBestOf"],"44.2":["HasBestOf"],"45.1":["IsAdditionalMaterialFor"],"45.2":["HasAdditionalMaterial"],"46.1":["IsExtractOf"],"46.2":["HasExtract"],"47.1":["Biographical information"]},"names":{"Trailer":["1"],"HasTrailer":["1.1"],"IsTrailerOf":["1.2"],"GroupTrailer":["2"],"HasGroupTrailer":["2.1"],"IsGroupTrailerOf":["2.2"],"Sibling":["3"],"Alternative":["4"],"Simulcast":["4.1"],"On-demand":["4.2"],"Catch-up":["4.3"],"Parent":["5"],"Recommendation":["6"],"GroupRecommendation":["7"],"Commercial advert":["8"],"Normal Advert":["8.1"],"HasNormalAdvert":["8.1.1"],"IsNormalAdvertOf":["8.1.2"],"Telescoped Advert":["8.2"],"HasTelescopedAdvert":["8.2.1"],"IsTelescopedAdvertOf":["8.2.2"],"Speedbump":["8.3"],"HasSpeedbump":["8.3.1"],"IsSpeedbumpOf":["8.3.2"],"Direct product purchase":["9"],"For more information":["10"],"Programme E-mail Address":["10.1"],"Programme Website":["10.2"],"Telephone Number":["10.3"],"Programme Transcript":["10.4"],"Interactive Enhancement":["10.5"],"Recap":["12"],"The making of":["13"],"HasMakingOf":["13.1"],"IsMakingOfFor":["13.2"],"Support":["14"],"Support E-mail Address":["14.1"],"Support Website":["14.2"],"Telephone Helpline":["14.3"],"Segmentation":["15"],"Static Segmentation":["15.1"],"Live Segmentation":["15.2"],"Live & Post Segmentation":["15.3"],"Post Segmentation":["15.4"],"Derived":["16"],"TVA RMPI document":["17"],"Content Package":["18"],"Promotional Still Image":["19"],"Broadcaster Website":["20"],"HasFormat":["21"],"IsFormatOf":["22"],"HasPart":["23"],"IsPartOf":["24"],"IsReferencedBy":["25"],"IsReplacedBy":["26"],"IsRequiredBy":["27"],"HasVersion":["28"],"References":["29"],"Replaces":["30"],"Requires":["31"],"Review Information":["32"],"HasReviewInformation":["32.1"],"IsReviewInformationFor":["32.2"],"Preview":["33"],"HasPreview":["33.1"],"IsPreviewOf":["33.2"],"Current Broadcast":["34"],"Package Main Content":["35"],"IsEpisodeOf":["36"],"IsClipOf":["37"],"IsSeasonOf":["38"],"IsDerivedOf":["39"],"IsCompositeOf":["40"],"IsSupplementOf":["41"],"IsPromotionFor":["42"],"ChannelIdentification":["43"],"IsChannelIdentificationOf":["43.1"],"HasChannelIdentification":["43.2"],"Best of":["44"],"IsBestOf":["44.1"],"HasBestOf":["44.2"],"Additional Material":["45"],"IsAdditionalMaterialFor":["45.1"],"HasAdditionalMaterial":["45.2"],"Extract":["46"],"IsExtractOf":["46.1"],"HasExtract":["46.2"],"Credit information":["47"],"Biographical information":["47.1"]},"uri":"urn:ebu:metadata-cs:HowRelatedCS_2013","versionDate":"2013-01-07"}
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