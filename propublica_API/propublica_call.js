const fetch = require('fetch').fetchUrl;
const process = require('process');
console.log(process.env.Propublica_API_KEY);
const API_KEY = process.env.Propublica_API_KEY;
var options = {headers:{"X-API-KEY": API_KEY}};
var current_congress = 116;

var address = '4010 Charlotte St., Kansas City, MO 64110';

console.log(process.env.google_API_Key);
const google_API_Key = process.env.google_API_Key;

var google_url = 'https://www.googleapis.com/civicinfo/v2/voterinfo?address='+address+'&electionId=2000&key='+google_API_Key;

fetch(google_url, function(error, meta, body){
    // This response contains the user's state code (for their given addresss)
    console.log(body.toString());
});

var state = 'MO';

var district = '5';

// Calling the following endpoints gives complete data on members of each chamber of congress
// var house_url = 'https://api.propublica.org/congress/v1/'+current_congress+'/house/members.json';
// var senate_url = 'https://api.propublica.org/congress/v1/'+current_congress+'/senate/members.json';

var user_house_url = 'https://api.propublica.org/congress/v1/members/house/'+state+'/'+district+'/current.json';
var user_representative;
fetch(user_house_url,options, function(error, meta, body){
    // console.log(body.toString());
    user_representative = body;
});

var user_senate_url = 'https://api.propublica.org/congress/v1/members/senate/'+state+'/'+district+'/current.json';
var user_senators;
fetch(user_senate_url,options, function(error, meta, body){
    // console.log(body.toString());
    user_senators = body;
});

var bill_search_term = 'Blunt';
var bill_search_url = 'https://api.propublica.org/congress/v1/bills/search.json?query='+bill_search_term;
var user_search_results;
fetch(bill_search_url,options, function(error, meta, body){
    // console.log(body.toString());
    user_search_results = body;
});

var recent_house_bills_url = 'https://api.propublica.org/congress/v1/'+current_congress+'/house/bills/introduced.json';
var recent_house_bills;
fetch(recent_house_bills_url,options, function(error, meta, body){
    // // console.log(body.toString());
    // console.log("Recent House Bills");
    recent_house_bills = JSON.parse(body.toString());
    temp = recent_house_bills.results[0].bills;
    // for(var i = 0; i < temp.length; i++){
    //     console.log(temp[i].title);
    // }
});

var upcoming_house_bills_url = 'https://api.propublica.org/congress/v1/bills/upcoming/house.json';
var upcoming_house_bills;
fetch(upcoming_house_bills_url,options, function(error, meta, body){
    // console.log(body.toString());
    upcoming_house_bills = body;
});

var recent_senate_bills_url = 'https://api.propublica.org/congress/v1/'+current_congress+'/senate/bills/introduced.json';
var recent_senate_bills;
fetch(recent_senate_bills_url,options, function(error, meta, body){
    // // console.log(body.toString());
    // console.log("Recent Senate Bills");
    recent_senate_bills = JSON.parse(body.toString());
    temp = recent_senate_bills.results[0].bills;
    // for(var i = 0; i < temp.length; i++){
    //     console.log(temp[i].title);
    // }
});

var upcoming_senate_bills_url = 'https://api.propublica.org/congress/v1/bills/upcoming/senate.json';
var upcoming_senate_bills;
fetch(upcoming_senate_bills_url,options, function(error, meta, body){
    upcoming_senate_bills = body.toString();

});

function get_recentVotesH(apiKey) {
    var options = {headers: {"X-API-KEY": apiKey}};
    var recent_house_votes = 'https://api.propublica.org/congress/v1/house/votes/recent.json';
    fetch(recent_house_votes, options, function (error, meta, body) {
        // console.log(body.toString());
        return(body);
    });
}

function get_recentVotesS(apiKey){
    var options = {headers:{"X-API-KEY": apiKey}};
    var recent_senate_votes = 'https://api.propublica.org/congress/v1/house/votes/recent.json';
    fetch(recent_senate_votes,options, function(error, meta, body){
        // console.log(body.toString());
        return(body);
    });
}