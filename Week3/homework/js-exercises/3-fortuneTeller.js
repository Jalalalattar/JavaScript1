"use strcit";

const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ['Loubna', 'Heba', 'Mayada', 'Nancy', 'Elena'];
const locations = ['Syria', 'Netherlands', 'Lebanon', 'Dubai', 'Coallambor '];
const jobs = ['Painter','actor', 'Director', 'Sales Manager', 'Web Developer'];

const yourChilsrenNum = numChildren[Math.floor(Math.random() * numChildren.length)];
const yourPartnerName = partnerNames[Math.floor(Math.random() * partnerNames.length)];
const yourLocation = locations[Math.floor(Math.random() * locations.length)];
const yourJob = jobs[Math.floor(Math.random() * jobs.length)];


function tellFortune(numChildren, partnerNames, locations, jobs) {

  return `You will be a ${yourJob} in ${yourLocation}, and married to ${yourPartnerName} with ${yourChilsrenNum} kids.`;
}
console.log(tellFortune());