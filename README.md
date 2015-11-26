# biojs-rest-citation

[![NPM version](http://img.shields.io/npm/v/biojs-rest-citation.svg)](https://www.npmjs.org/package/biojs-rest-citation) 
[![Build Status](https://secure.travis-ci.org/hmenager/biojs-rest-citation.png?branch=master)](http://travis-ci.org/hmenager/biojs-rest-citation) 

> Retrieves citation information from various web services

## Getting Started
Install the module with: `npm install biojs-rest-citation`

```javascript
var CitationClient = require("biojs-rest-citation");
```

Once you have created the client, you can call one of the methods to retrieve a citation in a specific format, e.g.:

```javascript
CitationClient.getBibTeXFromDOI('10.12688/f1000research.3-55.v1',function(data){
  console.log(data);
});
```

## Contributing

All contributions are welcome.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/hmenager/biojs-rest-citation/issues).

## License 
The BSD License

Copyright (c) 2015, hmenager

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the hmenager nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
