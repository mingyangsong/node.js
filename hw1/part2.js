#!/usr/bin/env node
var fs = require('fs');
var outfile = "part2.txt";

var testPrime = function(k) {
    for(var i=2; i<=Math.sqrt(k); i++){
	if(k%i == 0) return false;
    }
    return true;
}

var list = [];

var i = 0;
var k = 2;

while(i<100){
    if(testPrime(k)==true){
	list.push(k);
	i++;
    }
    k++;
}

var out="";

for(var i=0; i<list.length; i++){
    out+=list[i]+",";
}

out=out.substr(0, out.length-1);

console.log(out);

fs.writeFileSync(outfile, out);
