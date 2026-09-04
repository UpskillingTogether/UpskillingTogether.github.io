#!/usr/bin/env node
const key=process.env.POSTHOG_PROJECT_KEY;
const host=(process.env.POSTHOG_HOST||"https://us.i.posthog.com").replace(/\/$/,"");
if(!key){console.error("Set POSTHOG_PROJECT_KEY before running this script.");process.exit(1)}
const tutors=[{id:"maya",name:"Maya Chen",subjects:["Math","Algebra"]},{id:"jordan",name:"Jordan Brooks",subjects:["Science","Math"]},{id:"sofia",name:"Sofia Martinez",subjects:["Reading","Elementary Math"]},{id:"marcus",name:"Marcus Reed",subjects:["Algebra","Science"]}];
const weights=[7,5,6,4];
const events=[];
function add(event,distinct_id,properties){events.push({event,properties:{...properties,distinct_id,prototype:"abc-tutoring",$lib:"traffic-simulator"},timestamp:new Date(Date.now()-events.length*36e5).toISOString()})}
tutors.forEach((t,i)=>{for(let n=0;n<weights[i];n++){const visitor=`demo-${i}-${n}`;add("tutor_profile_viewed",visitor,{tutor_id:t.id,tutor_name:t.name,subjects:t.subjects});if(n<weights[i]-1){const subject=t.subjects[n%t.subjects.length],format=n%3?"online":"in_person";add("booking_started",visitor,{tutor_id:t.id,tutor_name:t.name,subject,session_format:format});if(n%4!==0)add("booking_submitted",visitor,{tutor_id:t.id,tutor_name:t.name,subject,session_format:format,grade_band:n%2?"middle_school":"elementary"})}}});
const response=await fetch(`${host}/batch/`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({api_key:key,batch:events})});
if(!response.ok){console.error(`PostHog returned ${response.status}: ${await response.text()}`);process.exit(1)}
console.log(`Sent ${events.length} anonymous demo events to PostHog.`);
