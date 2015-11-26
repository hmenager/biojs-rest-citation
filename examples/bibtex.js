var CitationClient = require("biojs-rest-citation");
var display = function(data){
  yourDiv.style['display'] = 'block';
  yourDiv.style['font-family'] = 'monospace';
  yourDiv.style['white-space'] = 'pre';
  yourDiv.innerHTML = data;
}
CitationClient.getBibTeXFromDOI('10.12688/f1000research.3-55.v1', display);
