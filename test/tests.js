var CitationClient = require('../');
var _ = require('underscore')
var fs = require('fs');

require('mocha')
var assert = require("chai").assert;


describe('BioJS2 CitationClient REST', function () {
    this.timeout(5000);

    it("Exists", function () {
	assert.isDefined(CitationClient);
    })

    describe('Data retrieval', function () {
	// Being friendly with the REST API. The tests are delayed this time
	var delay = 50;
	var doi = "10.12688/f1000research.3-55.v1";
	it("Retrieves text from the server", function (done) {
            var text = fs.readFileSync(__dirname + '/biojs.txt', 'utf-8');
            CitationClient.getTextFromDOI('10.12688/f1000research.3-55.v1', function(data){
                console.log(data);
                assert.equal(data.trim(), text.trim());
                setTimeout(done, delay);
            });
        });
	it("Retrieves BibTeX from the server", function (done) {
            var bibtexText = fs.readFileSync(__dirname + '/biojs.bib', 'utf-8');
            CitationClient.getBibTeXFromDOI('10.12688/f1000research.3-55.v1', function(data){
                console.log(data);
                assert.equal(data.trim(), bibtexText.trim());
                setTimeout(done, delay);
            });
        });
        it("Retrieves RIS from the server", function(done) {
            var RISText = fs.readFileSync(__dirname + '/biojs.ris', 'utf-8');
            CitationClient.getRISFromDOI('10.12688/f1000research.3-55.v1', function(data){
                console.log(data);
                assert.equal(data.trim(), RISText.trim());
                setTimeout(done, delay);
            });
        });
    });
});
