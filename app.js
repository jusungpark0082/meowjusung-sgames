const games=[
{name:'Snake',icon:'🐍',desc:'Eat the food, grow longer, and survive.',file:'games/snake.html'},
{name:'Pong',icon:'🏓',desc:'Classic paddle-versus-paddle arcade action.',file:'games/pong.html'},
{name:'Flappy Cat',icon:'🐱',desc:'Tap to fly through the pipes.',file:'games/flappy.html'},
{name:'Memory',icon:'🧠',desc:'Match pairs and test your memory.',file:'games/memory.html'},
{name:'Click Rush',icon:'⚡',desc:'How fast can you click? Beat your score.',file:'games/click-rush.html'},
{name:'Dodge',icon:'💥',desc:'Avoid obstacles for as long as possible.',file:'games/dodge.html'},
{name:'Archer',icon:'🏹',desc:'Aim carefully and hit the target.',file:'games/archer.html'},
{name:'Drift',icon:'🏎️',desc:'Race around corners and chase high scores.',file:'games/drift.html'}
];
function render(list=games){const grid=document.getElementById('grid');grid.innerHTML=list.map(g=>`<article class="card" onclick="location.href='${g.file}'"><div class="icon">${g.icon}</div><h3>${g.name}</h3><p>${g.desc}</p><span class="play">▶ Play</span></article>`).join('');document.getElementById('count').textContent=`${list.length} games`}
function randomGame(){location.href=games[Math.floor(Math.random()*games.length)].file}
document.getElementById('search').addEventListener('input',e=>{const q=e.target.value.toLowerCase();render(games.filter(g=>(g.name+' '+g.desc).toLowerCase().includes(q)))})
document.getElementById('themeBtn').addEventListener('click',()=>{document.body.classList.toggle('light');document.body.style.background=document.body.classList.contains('light')?'#f4f6fb':'#0d1020';document.body.style.color=document.body.classList.contains('light')?'#151827':'#f7f7fb'});
render();