#!/usr/bin/env node

var fs=require('fs');

var file=fs.readFileSync('index.html','utf-8');


console.log(file);
