let startDate;
function updateTimer(){
    
const now = new Date().getTime()/* to get the current time in milliseconds */
const difference= now-startDate;/* to calculate the time difference */
const Days= Math.floor(difference/(1000*60*60*24));/* Calculate days:1000 milliseconds * 60 seconds * 60 minutes * 24 hours = 1 day */ 
const Hours= Math.floor((difference%(1000*60*60*24))/(1000*60*60))/* modulus operator is used because yeh bta rha hai ki full days khtm hone ke baad kitna bacha hai, that would come as remainder and then we are dividing it again to get hours */
const Minutes= Math.floor((difference%(1000*60*60))/(1000*60));/* same as above */
const Seconds= Math.floor((difference%(1000*60))/(1000));/* same as above */
document.getElementById('timer').innerHTML=
Days + " Days, "+ Hours + " Hours, " + Minutes +" Minutes, " + Seconds +" Seconds ";
    }
    setInterval(updateTimer,1000)/* to run the update timer function every second */
    updateTimer();/* run updateTimer immediately to avoid 1 sec delay */