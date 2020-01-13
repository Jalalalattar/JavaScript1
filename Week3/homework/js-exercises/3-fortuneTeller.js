"use strcit";

  function myStuation(numChildren, partnerNames, locations, jobs){
     numChildren = [1, 2, 3, 4, 5];
     partnerNames = ['Loubna', 'Heba', 'Mayada', 'Nancy', 'Elena'];
     locations = ['Syria', 'Netherlands', 'Lebanon', 'Dubai', 'Coallambor '];
     jobs = ['Painter','actor', 'Director', 'Sales Manager', 'Web Developer'];
   
    const yourChilsrenNum = numChildren[Math.floor(Math.random() * numChildren.length)];
    const yourPartnerName = partnerNames[Math.floor(Math.random() * partnerNames.length)];
    const yourLocation = locations[Math.floor(Math.random() * locations.length)];
    const yourJob = jobs[Math.floor(Math.random() * jobs.length)];
    return  `You will be a ${yourJob} in ${yourLocation}, and married to ${yourPartnerName} with ${yourChilsrenNum} kids.`;
  }
 
    

 console.log(myStuation()) ;