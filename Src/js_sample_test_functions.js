function aboutJSFunction() {
var Loc01 = document.getElementById("Location01");
Loc01.innerHTML="JavaScript is a simple language for coding";
}
	
function aKeyFunction() {
var aws_access_key="AKIAAIDAYRANYAHGQOHD";
var Loc02 = document.getElementById("Location02");
Loc02.innerHTML=aws_access_key;
}

function secretFunction() {
var stripe_test_secret_key="Secret: Abacab-by-genisis-091981@";
var Loc03 = document.getElementById("Location03");
Loc03.innerHTML=stripe_test_secret_key;
}

function ccNumFunction() {
// using cc numbers for test CC Visa: 4012-8888-8888-1881  CC Diners: 38520000023237
var Loc04 = document.getElementById("Location04");
Loc04.innerHTML="CC Visa: 4012-8888-8888-1881  CC Diners: 38520000023237";
}

function ssnNumFunction() {
// using ssn numbers for test 267-04-5432 or 264574203
var Loc05 = document.getElementById("Location05");
Loc05.innerHTML="SSN Formatted: 267-04-5432 or  SSN Unformatted: 264574203";
}
 
function search() {
  var query = document.getElementById("searchBox").value;
  var resultsDiv=document.getElementById("results");
  resultsDiv.innerHTML = "Search results for:" + query;
}


