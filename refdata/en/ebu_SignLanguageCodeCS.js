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

var voc = {"terms":{"ads":["Adamorobe Sign Language"],"aed":["Argentine Sign Language"],"aen":["Armenian Sign Language"],"afg":["Afghan Sign Language"],"ase":["American Sign Language"],"asf":["Australian Sign Language"],"asp":["Algerian Sign Language"],"asq":["Austrian Sign Language"],"asw":["Australian Aborigines Sign Language"],"bfi":["British Sign Language"],"bfk":["Ban Khor Sign Language"],"bog":["Bamako Sign Language"],"bqn":["Bulgarian Sign Language"],"bqy":["Bengkala Sign Language"],"bvl":["Bolivian Sign Language"],"bzs":["Brazilian Sign Language"],"cds":["Chadian Sign Language"],"csc":["Catalan Sign Language"],"csd":["Chiangmai Sign Language"],"cse":["Czech Sign Language"],"csf":["Cuba Sign Language"],"csg":["Chilean Sign Language"],"csl":["Chinese Sign Language"],"csn":["Colombian Sign Language"],"csq":["Croatia Sign Language"],"csr":["Costa Rican Sign Language"],"doq":["Dominican Sign Language"],"dse":["Dutch Sign Language"],"dsl":["Danish Sign Language"],"ecs":["Ecuadorian Sign Language"],"esl":["Egypt Sign Language"],"esn":["Salvadoran Sign Language"],"eso":["Estonian Sign Language"],"eth":["Ethiopian Sign Language"],"fcs":["Quebec Sign Language"],"fse":["Finnish Sign Language"],"fsl":["French Sign Language"],"fss":["Finland-Swedish Sign Language"],"gse":["Ghanaian Sign Language"],"gsg":["German Sign Language"],"gsm":["Guatemalan Sign Language"],"gss":["Greek Sign Language"],"gus":["Guinean Sign Language"],"hab":["Hanoi Sign Language"],"haf":["Haiphong Sign Language"],"hds":["Honduras Sign Language"],"hks":["Hong Kong Sign Language"],"hos":["Ho Chi Sign Language"],"hps":["Hawai'I Pidgin Sign Language"],"hsh":["Hungarian Sign Language"],"hsl":["Hausa Sign Language"],"icl":["Icelandic Sign Language"],"inl":["Indonesian Sign Language"],"ins":["Indian Sign Language"],"ise":["Italian Sign Language"],"isg":["Irish Sign Language"],"isr":["Israeli Sign Language"],"jcs":["Jamaican Country Sign Language"],"jhs":["Jhankot Sign Language"],"jls":["Jamaican Sign Language"],"jos":["Jordanian Sign Language"],"jsl":["Japanese Sign Language"],"jus":["Jumla Sign Language"],"kgi":["Selangor Sign Language"],"kvk":["Korean Sign Language"],"lbs":["Libyan Sign Language"],"lls":["Lithuanian Sign Language"],"lsg":["Lyons Sign Language"],"lsl":["Latvian Sign Language"],"lso":["Laos Sign Language"],"lsp":["Panamanian Sign Language"],"lst":["Trinidad Sign Language"],"lsy":["Mauritian Sign Language"],"mdl":["Maltese Sign Language"],"mfs":["Mexican Sign Language"],"mre":["Martha's Vineyard Sign Language"],"msd":["Yucatec Maya Sign Language"],"msr":["Mongolian Sign Language"],"mzg":["Monastic Sign Language"],"mzy":["Mozambican Sign Language"],"nbs":["Namibian Sign Language"],"ncs":["Nicaraguan Sign Language"],"nsi":["Nigerian Sign Language"],"nsl":["Norwegian Sign Language"],"nsp":["Nepalese Sign Language"],"nsr":["Maritime Sign Language"],"nzs":["New Zealand Sign Language"],"prl":["Peruvian Sign Language"],"prz":["Providencia Sign Language"],"psc":["Persian Sign Language"],"psd":["Plains Indian Sign Language"],"psg":["Penang Sign Language"],"psl":["Puerto Rican Sign Language"],"pso":["Polish Sign Language"],"psp":["Philippine Sign Language"],"psr":["Portuguese Sign Language"],"pys":["Paraguayan Sign Language"],"rms":["Romanian Sign Language"],"rsi":["Rennellese Sign Language"],"rsl":["Russian Sign Language"],"sdl":["Saudi Arabian Sign Language"],"sfb":["Langue des Signes de Beligique Francophone Sign Language"],"sfs":["South African Sign Language"],"sgg":["Swiss-German Sign Language"],"slf":["Swiss-Italian Sign Language"],"sls":["Singapore Sign Language"],"sqk":["Albanian Sign Language"],"sqs":["Sri Lankan Sign Language"],"ssp":["Spanish Sign Language"],"ssr":["Swiss-French Sign Language"],"svk":["Slovakian Sign Language"],"swl":["Swedish Sign Language"],"syy":["Al-Sayyid Bedouin Sign Language"],"tse":["Tunisian Sign Language"],"tsm":["Turkish Sign Language"],"tsq":["Thai Sign Language"],"tss":["Taiwan Sign Language"],"tsy":["Tebul Sign Language"],"tza":["Tanzanian Sign Language"],"ugn":["Ugandan Sign Language"],"ugy":["Uruguayan Sign Language"],"ukl":["Ukrainian Sign Language"],"uks":["Urubú-Kaapor Sign Language"],"vsi":["Moldova Sign Language"],"vsl":["Venezuelan Sign Language"],"vsv":["Valencian Sign Language"],"xki":["Kenyan Sign Language"],"xml":["Malaysian Sign Language"],"xms":["Moroccan Sign Language"],"ysl":["Yugoslavian Sign Language"],"zib":["Zimbabwe Sign Language"],"zsl":["Zambian Sign Language"],"sgn-afr-ZA":["Signed Afrikaans"],"sgn-chi-TW":["Signed Chinese"],"sgn-dan-DK":["Signed Danish"],"sgn-dut-BE":["Signed Dutch"],"sgn-dut-NL":["Signed Dutch"],"sgn-eng-GB":["Signed English"],"sgn-eng-IE":["Signed English"],"sgn-eng-US":["Signed English"],"sgn-fin-FI":["Signed Finnish"],"sgn-fre-BE":["Signed French"],"sgn-fre-CA":["Signed French"],"sgn-fre-FR":["Signed French"],"sgn-jpn-JP":["Signed Japanese"],"sgn-nor-NO":["Signed Norwegian"],"sgn-por-PT":["Signed Portuguese"],"sgn-swe-SE":["Signed Swedish"]},"names":{"Adamorobe Sign Language":["ads"],"Argentine Sign Language":["aed"],"Armenian Sign Language":["aen"],"Afghan Sign Language":["afg"],"American Sign Language":["ase"],"Australian Sign Language":["asf"],"Algerian Sign Language":["asp"],"Austrian Sign Language":["asq"],"Australian Aborigines Sign Language":["asw"],"British Sign Language":["bfi"],"Ban Khor Sign Language":["bfk"],"Bamako Sign Language":["bog"],"Bulgarian Sign Language":["bqn"],"Bengkala Sign Language":["bqy"],"Bolivian Sign Language":["bvl"],"Brazilian Sign Language":["bzs"],"Chadian Sign Language":["cds"],"Catalan Sign Language":["csc"],"Chiangmai Sign Language":["csd"],"Czech Sign Language":["cse"],"Cuba Sign Language":["csf"],"Chilean Sign Language":["csg"],"Chinese Sign Language":["csl"],"Colombian Sign Language":["csn"],"Croatia Sign Language":["csq"],"Costa Rican Sign Language":["csr"],"Dominican Sign Language":["doq"],"Dutch Sign Language":["dse"],"Danish Sign Language":["dsl"],"Ecuadorian Sign Language":["ecs"],"Egypt Sign Language":["esl"],"Salvadoran Sign Language":["esn"],"Estonian Sign Language":["eso"],"Ethiopian Sign Language":["eth"],"Quebec Sign Language":["fcs"],"Finnish Sign Language":["fse"],"French Sign Language":["fsl"],"Finland-Swedish Sign Language":["fss"],"Ghanaian Sign Language":["gse"],"German Sign Language":["gsg"],"Guatemalan Sign Language":["gsm"],"Greek Sign Language":["gss"],"Guinean Sign Language":["gus"],"Hanoi Sign Language":["hab"],"Haiphong Sign Language":["haf"],"Honduras Sign Language":["hds"],"Hong Kong Sign Language":["hks"],"Ho Chi Sign Language":["hos"],"Hawai'I Pidgin Sign Language":["hps"],"Hungarian Sign Language":["hsh"],"Hausa Sign Language":["hsl"],"Icelandic Sign Language":["icl"],"Indonesian Sign Language":["inl"],"Indian Sign Language":["ins"],"Italian Sign Language":["ise"],"Irish Sign Language":["isg"],"Israeli Sign Language":["isr"],"Jamaican Country Sign Language":["jcs"],"Jhankot Sign Language":["jhs"],"Jamaican Sign Language":["jls"],"Jordanian Sign Language":["jos"],"Japanese Sign Language":["jsl"],"Jumla Sign Language":["jus"],"Selangor Sign Language":["kgi"],"Korean Sign Language":["kvk"],"Libyan Sign Language":["lbs"],"Lithuanian Sign Language":["lls"],"Lyons Sign Language":["lsg"],"Latvian Sign Language":["lsl"],"Laos Sign Language":["lso"],"Panamanian Sign Language":["lsp"],"Trinidad Sign Language":["lst"],"Mauritian Sign Language":["lsy"],"Maltese Sign Language":["mdl"],"Mexican Sign Language":["mfs"],"Martha's Vineyard Sign Language":["mre"],"Yucatec Maya Sign Language":["msd"],"Mongolian Sign Language":["msr"],"Monastic Sign Language":["mzg"],"Mozambican Sign Language":["mzy"],"Namibian Sign Language":["nbs"],"Nicaraguan Sign Language":["ncs"],"Nigerian Sign Language":["nsi"],"Norwegian Sign Language":["nsl"],"Nepalese Sign Language":["nsp"],"Maritime Sign Language":["nsr"],"New Zealand Sign Language":["nzs"],"Peruvian Sign Language":["prl"],"Providencia Sign Language":["prz"],"Persian Sign Language":["psc"],"Plains Indian Sign Language":["psd"],"Penang Sign Language":["psg"],"Puerto Rican Sign Language":["psl"],"Polish Sign Language":["pso"],"Philippine Sign Language":["psp"],"Portuguese Sign Language":["psr"],"Paraguayan Sign Language":["pys"],"Romanian Sign Language":["rms"],"Rennellese Sign Language":["rsi"],"Russian Sign Language":["rsl"],"Saudi Arabian Sign Language":["sdl"],"Langue des Signes de Beligique Francophone Sign Language":["sfb"],"South African Sign Language":["sfs"],"Swiss-German Sign Language":["sgg"],"Swiss-Italian Sign Language":["slf"],"Singapore Sign Language":["sls"],"Albanian Sign Language":["sqk"],"Sri Lankan Sign Language":["sqs"],"Spanish Sign Language":["ssp"],"Swiss-French Sign Language":["ssr"],"Slovakian Sign Language":["svk"],"Swedish Sign Language":["swl"],"Al-Sayyid Bedouin Sign Language":["syy"],"Tunisian Sign Language":["tse"],"Turkish Sign Language":["tsm"],"Thai Sign Language":["tsq"],"Taiwan Sign Language":["tss"],"Tebul Sign Language":["tsy"],"Tanzanian Sign Language":["tza"],"Ugandan Sign Language":["ugn"],"Uruguayan Sign Language":["ugy"],"Ukrainian Sign Language":["ukl"],"Urubú-Kaapor Sign Language":["uks"],"Moldova Sign Language":["vsi"],"Venezuelan Sign Language":["vsl"],"Valencian Sign Language":["vsv"],"Kenyan Sign Language":["xki"],"Malaysian Sign Language":["xml"],"Moroccan Sign Language":["xms"],"Yugoslavian Sign Language":["ysl"],"Zimbabwe Sign Language":["zib"],"Zambian Sign Language":["zsl"],"Signed Afrikaans":["sgn-afr-ZA"],"Signed Chinese":["sgn-chi-TW"],"Signed Danish":["sgn-dan-DK"],"Signed Dutch":["sgn-dut-BE","sgn-dut-NL"],"Signed English":["sgn-eng-GB","sgn-eng-IE","sgn-eng-US"],"Signed Finnish":["sgn-fin-FI"],"Signed French":["sgn-fre-BE","sgn-fre-CA","sgn-fre-FR"],"Signed Japanese":["sgn-jpn-JP"],"Signed Norwegian":["sgn-nor-NO"],"Signed Portuguese":["sgn-por-PT"],"Signed Swedish":["sgn-swe-SE"]},"deprecated":["sgn-afr-ZA","sgn-chi-TW","sgn-dan-DK","sgn-dut-BE","sgn-dut-NL","sgn-eng-GB","sgn-eng-IE","sgn-eng-US","sgn-fin-FI","sgn-fre-BE","sgn-fre-CA","sgn-fre-FR","sgn-jpn-JP","sgn-nor-NO","sgn-por-PT","sgn-swe-SE"],"uri":"urn:ebu:metadata-cs:SignLanguageCodeCS_2013","versionDate":"2013-02-24"}
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
