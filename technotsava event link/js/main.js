// mobile menu
const menu=document.querySelector(".menu"),nav=document.querySelector(".nav nav");
if(menu)menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
// registration links
document.querySelectorAll("[data-register]").forEach(a=>{
  if(REGISTRATION_FORM_URL){a.href=REGISTRATION_FORM_URL;a.target="_blank";a.rel="noopener";}
});
if(!REGISTRATION_FORM_URL)document.querySelectorAll(".soon").forEach(s=>s.style.display="block");
// scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
// countdown
const T=new Date(FEST_DATE).getTime(),$=id=>document.getElementById(id);
function tick(){if(!$("d"))return;const x=Math.max(0,T-Date.now()),p=n=>String(n).padStart(2,"0");
$("d").textContent=p(Math.floor(x/864e5));$("h").textContent=p(Math.floor(x%864e5/36e5));$("m").textContent=p(Math.floor(x%36e5/6e4));$("s").textContent=p(Math.floor(x%6e4/1e3))}
tick();setInterval(tick,1000);
// gallery lightbox
const lb=document.createElement("div");lb.className="lightbox";lb.innerHTML="<img alt=''>";document.body.appendChild(lb);
document.querySelectorAll(".gallery img").forEach(i=>i.addEventListener("click",()=>{lb.firstChild.src=i.src;lb.classList.add("open")}));
lb.addEventListener("click",()=>lb.classList.remove("open"));

// event rules popup
const RULES={
ramp:{t:"Runway Rizz",r:"Ramp Walk • Theme: Netflix Icons – Walk the Reel",c:"#ff3ea5",coord:["Mrs. Brunda","8792326025"],
rules:["Only registered participants can take part.","Follow the theme “Netflix Icons: Walk the Reel” – show it through costume, music and walk style.","Time limit: about 5 minutes per candidate, including entry and exit.","Costumes must suit a college event. Vulgar or overly revealing outfits may lead to disqualification.","Submit background music beforehand in the format the organisers specify.","Props are allowed if safe and manageable on stage. Fire, sharp objects and hazardous materials are prohibited.","Report before your allotted time for makeup and costume changes.","Breaking safety/decency rules, exceeding the time limit or ignoring organiser instructions can lead to disqualification.","The judges' decision is final and binding."],
judging:["Theme","Costume / styling","Confidence","Posture","Expressions","Coordination","Creativity","Overall stage impact"]},
dance:{t:"Beat Drop",r:"Group Dance",c:"#22e6ff",coord:["Ms. Latha","7259451307"],
rules:["Group dance only – a team has 4 to 8 participants.","Only registered participants may perform. Carry your college ID card.","Submit your track in MP3 format and carry a backup on a pen drive.","No vulgar, offensive or inappropriate lyrics. No remix songs.","Costumes must be appropriate for a college event.","Props are allowed, but you must arrange them yourself.","Any dance style or fusion is permitted.","Report at the venue at least 30 minutes before your slot.","Maintain discipline and decorum. The judges' decision is final; no objections will be entertained."],
judging:["Rhythm & synchronisation","Expressions","Energy & stage presence","Creativity","Costume & presentation","Overall performance"]},
poster:{t:"Aesthetic Check",r:"Poster Presentation",c:"#ff3ea5",coord:["Ms. Sreeshma","8304816785"],
rules:["The topic is announced 1 hour before the competition.","Maximum 2 members per team.","Each team gets 5 minutes to present.","Bring your own materials to prepare the poster.","The poster must be creative, original and relevant to the topic.","Complete the poster and presentation within the given time.","The judges' decision is final."],
judging:["Content & relevance","Creativity & originality","Poster design","Presentation & explanation","Time management"]},
blind:{t:"Code in the Dark",r:"Blind Coding",c:"#c6ff3d",coord:["Ms. Bhargavi","9353648543"],
rules:["Single participant only — this is an individual event.","Participants must code without seeing the computer screen.","Mobile phones, smartwatches and other electronic devices are not allowed.","Internet, AI tools or any external help is strictly prohibited.","Complete the given program within the specified time.","Any cheating or unfair practice will result in disqualification."],judging:[]},
paper:{t:"Big Brain Energy",r:"Paper Presentation",c:"#22e6ff",coord:["Mrs. Aysha","8660769670"],
rules:["Open to registered students participating in the fest.","Maximum of 2 participants allowed per paper.","The paper must relate to IT, Computer Science, emerging technologies, innovation or current tech developments.","The paper must be the participants' original work — copied content may lead to disqualification.","Submit an abstract before the deadline; keep it concise, typically around 250 words.","The paper should include: Title, Names of participants, College/Department, Abstract, Keywords, Introduction, Main content/analysis, Conclusion, References.","Prepare a PowerPoint presentation to explain the paper — a maximum of 10 slides is permitted.","Each team gets 7 minutes for presentation, followed by 2–3 minutes for questions and answers.","Strictly follow the allotted time — exceeding it may cost marks.","Keep the presentation clear, technically accurate, well organised and easy to understand.","Images, charts, diagrams, demonstrations or short videos may be used if permitted, within the allotted time.","Answer judges' questions confidently and appropriately — no misbehaviour or misconduct is allowed.","Maintain discipline and respectful behaviour throughout.","Plagiarism, inappropriate content, misrepresentation of authorship or rule violations may lead to disqualification.","The decision of the judging panel is final."],
judging:["Relevance & originality of topic","Technical content","Presentation & communication skills","Creativity & innovation","Time management","Question–answer performance"],
topics:[
{y:"1st Year",items:["AI in Healthcare","Computer Vision Applications","Internet of Things (IoT) in Smart Cities","Zero Trust Security"]},
{y:"2nd Year",items:["AI in Everyday Cyber Security","Cyber Security Threats and Solutions","Smart City Traffic Management","5G and 6G Technology"]},
{y:"3rd Year",items:["Smart Agriculture — present how soil moisture sensors and automated irrigation systems save water and improve crop yields","Green Computing","Quantum Computing","Edge Computing vs Cloud Computing","Robotics and Automation in Industries"]}]},
quiz:{t:"Quiz, No Chill",r:"Tech Quiz",c:"#ffd23f",coord:["Ms. Noorain","8050998870"],rules:["Team of exactly 2 members.","Time limit: 30 seconds per question.","No phones or outside help allowed.","Logical images may be linked with each other or combined.","Answers must be spoken immediately.","No discussion.","No passing questions to other teams."],judging:[],note:"The quiz master's decision is final."},
chill:{t:"Chill Pill Zone",r:"Stress Management",c:"#c6ff3d",coord:["Mr. Poobalan (HOD)","6380705720"],rules:[],judging:[],note:"Rules for this event will be updated soon."}};
const KEY={"Runway Rizz":"ramp","Beat Drop":"dance","Aesthetic Check":"poster","Code in the Dark":"blind","Big Brain Energy":"paper","Quiz, No Chill":"quiz","Chill Pill Zone":"chill"};
const md=document.createElement("div");md.className="modal";document.body.appendChild(md);
function closeM(){md.classList.remove("open")}
md.addEventListener("click",e=>{if(e.target===md||e.target.closest(".modal-x"))closeM()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeM()});
function openM(k){const d=RULES[k];if(!d)return;
md.innerHTML=`<div class="modal-box" style="--c:${d.c}"><button class="modal-x" aria-label="Close">✕</button><p class="kicker">RULES &amp; GUIDELINES</p><h2>${d.t}</h2><div class="real">${d.r}</div>`+
(d.rules.length?`<ol>${d.rules.map(x=>`<li>${x}</li>`).join("")}</ol>`:"")+
(d.judging.length?`<h3>JUDGING CRITERIA</h3><div class="chips">${d.judging.map(x=>`<span>${x}</span>`).join("")}</div>`:"")+
(d.topics?`<h3>SUGGESTED TOPICS</h3>`+d.topics.map(g=>`<p class="topic-year">${g.y}</p><ol class="topic-list">${g.items.map(x=>`<li>${x}</li>`).join("")}</ol>`).join(""):"")+
(d.note?`<div class="note">${d.note}</div>`:"")+
(d.coord?`<div class="coord-line">👩‍🏫 Event Coordinator: <b>${d.coord[0]}</b> &nbsp;·&nbsp; <a href="tel:+91${d.coord[1]}">📞 ${d.coord[1]}</a></div>`:"")+
`<a class="btn primary" ${REGISTRATION_FORM_URL?`href="${REGISTRATION_FORM_URL}" target="_blank" rel="noopener"`:'href="registration.html"'}>REGISTER NOW ↗</a></div>`;
md.classList.add("open")}
document.querySelectorAll(".event-card").forEach(c=>{const h=c.querySelector("h2"),top=c.querySelector(".event-top"),k=h&&KEY[h.textContent.trim()];if(!k||!top)return;
top.insertAdjacentHTML("beforeend",'<span class="rules-pill">📜 VIEW RULES</span>');top.tabIndex=0;top.setAttribute("role","button");
top.addEventListener("click",()=>openM(k));top.addEventListener("keydown",e=>{if(e.key==="Enter")openM(k)})});
