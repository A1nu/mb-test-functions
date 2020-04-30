const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

//============= Question =============
/**
 const team = {
  members:['Superman','Batman','Wonder Woman'],
  teamName: 'Justice league',
  teamSummary: function(){
    return this.members.map(function(member) { return `${member} is on team ${this.teamName}`; });
    } };
 team.teamSummary();
 i) Will the above code block return an error? ii) If yes, then why and how do we fix it?
 **/


//============= Answer =============
/**
    Possibly error will not be thrown. But we will receive undefined as team name in result.
    It happens because anonymous function cannot access to scope of it's parent.
    There are several solutions: we can bind this to anonymous function or use arrow function. Because it has access to teams scope
 */
const team = {
    members:['Superman','Batman','Wonder Woman'],
    teamName: 'Justice league',
    teamSummary: function() {
        return this.members.map(member => `${member} is on team ${this.teamName}`);
    } };

/** This solution will also work but not recommended to use it in fact we have arrow functions **/
const team2 = {
    members:['Superman','Batman','Wonder Woman'],
    teamName: 'Justice league',
    teamSummary: function(){
        return this.members.map(function(member) { return `${member} is on team ${this.teamName}`; }.bind(this));
    } };
team.teamSummary();

//============= For Testing =============
exports.team = team;
exports.team2 = team;
