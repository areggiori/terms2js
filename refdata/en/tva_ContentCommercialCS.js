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

var voc = {"terms":{"3.50":["Commercial/Products"],"3.50.1":["Agriculture, forestry and fishery products"],"3.50.1.1":["Products of agriculture, horticulture and market gardening"],"3.50.1.2":["Live animals and animal products"],"3.50.1.3":["Forestry and logging products"],"3.50.1.4":["Fish and other fishing products"],"3.50.2":["Ores and minerals; electricity, gas and water"],"3.50.2.1":["Coal and lignite; peat"],"3.50.2.2":["Crude petroleum and natural gas"],"3.50.2.3":["Uranium and thorium ores"],"3.50.2.4":["Metal ores"],"3.50.2.5":["Stone, sand and clay"],"3.50.2.6":["Other minerals"],"3.50.2.7":["Electricity, town gas, steam and hot water"],"3.50.2.8":["Water"],"3.50.3":["Food products, beverages and tobacco; textiles, apparel and leather products"],"3.50.3.1":["Meat, fish, fruit, vegetables, oils and fats"],"3.50.3.2":["Dairy products"],"3.50.3.3":["Grain mill products, starches and starch products; other food products"],"3.50.3.4":["Beverages"],"3.50.3.5":["Tobacco products"],"3.50.3.6":["Yarn and thread; woven and tufted textile fabrics"],"3.50.3.7":["Textile articles other than apparel"],"3.50.3.8":["Knitted or crocheted fabrics; wearing apparel"],"3.50.3.9":["Leather and leather products; footwear"],"3.50.4":["Other transportable goods, except metal products, machinery and equipment"],"3.50.4.1":["Products of wood, cork, straw and plaiting materials"],"3.50.4.2":["Pulp, paper and paper products; printed matter and related articles"],"3.50.4.3":["Coke oven products; refined petroleum products; nuclear fuel"],"3.50.4.4":["Basic chemicals"],"3.50.4.5":["Other chemical products; man-made fibres"],"3.50.4.6":["Rubber and plastics products"],"3.50.4.7":["Glass and glass products and other non-metallic products n.e.c."],"3.50.4.8":["Furniture; other transportable goods n.e.c."],"3.50.4.9":["Wastes or scraps"],"3.50.5":["Metal products, machinery and equipment"],"3.50.5.1":["Basic metals"],"3.50.5.2":["Fabricated metal products, except machinery and equipment"],"3.50.5.3":["General purpose machinery"],"3.50.5.4":["Special purpose machinery"],"3.50.5.5":["Office, accounting and computing machinery"],"3.50.5.6":["Electrical machinery and apparatus"],"3.50.5.7":["Radio, television and communication equipment and apparatus"],"3.50.5.8":["Medical appliances, precision and optical instruments, watches and clocks"],"3.50.5.9":["Transport equipment"],"3.50.6":["Intangible assets; land; constructions; construction services"],"3.50.6.1":["Intangible assets"],"3.50.6.2":["Land"],"3.50.6.3":["Constructions"],"3.50.6.4":["Construction services"],"3.50.7":["Distributive trade services; lodging; food and beverage serving services; transport services; and utilities distribution services"],"3.50.7.1":["Wholesale trade services"],"3.50.7.2":["Retail trade services"],"3.50.7.3":["Lodging; food and beverage serving services"],"3.50.7.4":["Land transport services"],"3.50.7.5":["Water transport services"],"3.50.7.6":["Air transport services"],"3.50.7.7":["Supporting and auxiliary transport services"],"3.50.7.8":["Postal and courier services"],"3.50.7.9":["Electricity distribution services; gas and water distribution services through mains"],"3.50.8":["Financial and related services; real estate services; and rental and leasing services"],"3.50.8.1":["Financial intermediation, insurance and auxiliary services"],"3.50.8.2":["Real estate services"],"3.50.8.3":["Leasing or rental services without operator"],"3.50.9":["Business and production services"],"3.50.9.1":["Research and development services"],"3.50.9.2":["Professional, scientific and technical services"],"3.50.9.3":["Other professional, scientific and technical services"],"3.50.9.4":["Telecommunications services; information retrieval and supply services"],"3.50.9.5":["Support services"],"3.50.9.6":["Production services, on a fee or contract basis"],"3.50.9.7":["Maintenance and repair services"],"3.50.10":["Community, social and personal services"],"3.50.10.1":["Public administration and other services to the community as a whole; compulsory social security services"],"3.50.10.2":["Education services"],"3.50.10.3":["Health and social services"],"3.50.10.4":["Sewage and refuse disposal, sanitation and other environmental protection services"],"3.50.10.5":["Services of membership organizations"],"3.50.10.6":["Recreational, cultural and sporting services"],"3.50.10.7":["Other services"],"3.50.10.8":["Domestic services"],"3.50.10.9":["Services provided by extraterritorial organizations and bodies"]},"names":{"Commercial/Products":["3.50"],"Agriculture, forestry and fishery products":["3.50.1"],"Products of agriculture, horticulture and market gardening":["3.50.1.1"],"Live animals and animal products":["3.50.1.2"],"Forestry and logging products":["3.50.1.3"],"Fish and other fishing products":["3.50.1.4"],"Ores and minerals; electricity, gas and water":["3.50.2"],"Coal and lignite; peat":["3.50.2.1"],"Crude petroleum and natural gas":["3.50.2.2"],"Uranium and thorium ores":["3.50.2.3"],"Metal ores":["3.50.2.4"],"Stone, sand and clay":["3.50.2.5"],"Other minerals":["3.50.2.6"],"Electricity, town gas, steam and hot water":["3.50.2.7"],"Water":["3.50.2.8"],"Food products, beverages and tobacco; textiles, apparel and leather products":["3.50.3"],"Meat, fish, fruit, vegetables, oils and fats":["3.50.3.1"],"Dairy products":["3.50.3.2"],"Grain mill products, starches and starch products; other food products":["3.50.3.3"],"Beverages":["3.50.3.4"],"Tobacco products":["3.50.3.5"],"Yarn and thread; woven and tufted textile fabrics":["3.50.3.6"],"Textile articles other than apparel":["3.50.3.7"],"Knitted or crocheted fabrics; wearing apparel":["3.50.3.8"],"Leather and leather products; footwear":["3.50.3.9"],"Other transportable goods, except metal products, machinery and equipment":["3.50.4"],"Products of wood, cork, straw and plaiting materials":["3.50.4.1"],"Pulp, paper and paper products; printed matter and related articles":["3.50.4.2"],"Coke oven products; refined petroleum products; nuclear fuel":["3.50.4.3"],"Basic chemicals":["3.50.4.4"],"Other chemical products; man-made fibres":["3.50.4.5"],"Rubber and plastics products":["3.50.4.6"],"Glass and glass products and other non-metallic products n.e.c.":["3.50.4.7"],"Furniture; other transportable goods n.e.c.":["3.50.4.8"],"Wastes or scraps":["3.50.4.9"],"Metal products, machinery and equipment":["3.50.5"],"Basic metals":["3.50.5.1"],"Fabricated metal products, except machinery and equipment":["3.50.5.2"],"General purpose machinery":["3.50.5.3"],"Special purpose machinery":["3.50.5.4"],"Office, accounting and computing machinery":["3.50.5.5"],"Electrical machinery and apparatus":["3.50.5.6"],"Radio, television and communication equipment and apparatus":["3.50.5.7"],"Medical appliances, precision and optical instruments, watches and clocks":["3.50.5.8"],"Transport equipment":["3.50.5.9"],"Intangible assets; land; constructions; construction services":["3.50.6"],"Intangible assets":["3.50.6.1"],"Land":["3.50.6.2"],"Constructions":["3.50.6.3"],"Construction services":["3.50.6.4"],"Distributive trade services; lodging; food and beverage serving services; transport services; and utilities distribution services":["3.50.7"],"Wholesale trade services":["3.50.7.1"],"Retail trade services":["3.50.7.2"],"Lodging; food and beverage serving services":["3.50.7.3"],"Land transport services":["3.50.7.4"],"Water transport services":["3.50.7.5"],"Air transport services":["3.50.7.6"],"Supporting and auxiliary transport services":["3.50.7.7"],"Postal and courier services":["3.50.7.8"],"Electricity distribution services; gas and water distribution services through mains":["3.50.7.9"],"Financial and related services; real estate services; and rental and leasing services":["3.50.8"],"Financial intermediation, insurance and auxiliary services":["3.50.8.1"],"Real estate services":["3.50.8.2"],"Leasing or rental services without operator":["3.50.8.3"],"Business and production services":["3.50.9"],"Research and development services":["3.50.9.1"],"Professional, scientific and technical services":["3.50.9.2"],"Other professional, scientific and technical services":["3.50.9.3"],"Telecommunications services; information retrieval and supply services":["3.50.9.4"],"Support services":["3.50.9.5"],"Production services, on a fee or contract basis":["3.50.9.6"],"Maintenance and repair services":["3.50.9.7"],"Community, social and personal services":["3.50.10"],"Public administration and other services to the community as a whole; compulsory social security services":["3.50.10.1"],"Education services":["3.50.10.2"],"Health and social services":["3.50.10.3"],"Sewage and refuse disposal, sanitation and other environmental protection services":["3.50.10.4"],"Services of membership organizations":["3.50.10.5"],"Recreational, cultural and sporting services":["3.50.10.6"],"Other services":["3.50.10.7"],"Domestic services":["3.50.10.8"],"Services provided by extraterritorial organizations and bodies":["3.50.10.9"]},"uri":"urn:tva:metadata-cs:ContentCommercialCS_2008","versionDate":"2013-01-07"}
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