/*
 * biojs-rest-citation
 * https://github.com/hmenager/biojs-rest-citation
 *
 * Copyright (c) 2015 hmenager
 * Licensed under the BSD license.
 */

var _ = require('underscore');

var nets = require('nets');

var CitationClient = {};

var CONTENT_TYPES = {
  'rdf-xml': 'application/rdf+xml',
  'rdf-turtle': 'text/turtle',
  'Citeproc-JSON': 'application/vnd.citationstyles.csl+json',
  'Text': 'text/x-bibliography',
  'RIS': 'application/x-research-info-systems',
  'BibTeX': 'application/x-bibtex',
  'CrossRef-Unixref-XML': 'application/vnd.crossref.unixref+xml',
  'DataCite XML': 'application/vnd.datacite.datacite+xml',
  'ONIX for DOI': 'application/vnd.medra.onixdoi+xml'
};

CitationClient.getCitationFromDOI = function(doi, format, callback){
  format = format;
  var options = {
    url: 'http://dx.doi.org/' + doi,
    encoding: undefined,
    headers: {
      'Accept': CONTENT_TYPES[format]
    }
  };
  nets(options, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        callback(body);
      }else{
        throw error;
      }
    });
};

_.each(CONTENT_TYPES, function(mediaType, format){
  CitationClient['get'+format+'FromDOI'] = function(doi, callback){
    CitationClient.getCitationFromDOI(doi, format, callback);
  };
});

module.exports = CitationClient;
