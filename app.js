const games=[
{name:'Snake',icon:'🐍',desc:'Eat food, grow longer, and beat your best score.',file:'games/snake.html',tag:'Arcade'},
{name:'Pong',icon:'🏓',desc:'Classic paddle action against a clever CPU.',file:'games/pong.html',tag:'Arcade'},
{name:'Flappy Cat',icon:'🐱',desc:'Flap through pipes and chase a high score.',file:'games/flappy.html',tag:'Arcade'},
{name:'Memory',icon:'🧠',desc:'Match every pair in as few moves as possible.',file:'games/memory.html',tag:'Puzzle'},
{name:'Click Rush',icon:'⚡',desc:'Click the target as fast as you can for 10 seconds.',file:'games/click-rush.html',tag:'Speed'},
{name:'Dodge',icon:'💥',desc:'Move left and right and survive the falling chaos.',file:'games/dodge.html',tag:'Arcade'},
{name:'Archer',icon:'🏹',desc:'Hit moving targets and build a huge combo.',file:'games/archer.html',tag:'Skill'},
{name:'Drift',icon:'🏎️',desc:'Steer through a winding road without crashing.',file:'games/drift.html',tag:'Racing'},
{name:'Breakout',icon:'🧱',desc:'Smash every brick with your bouncing ball.',file:'games/breakout.html',tag:'Arcade'},
{name:'Tic-Tac-Toe',icon:'❌',desc:'Beat the CPU in the classic 3×3 battle.',file:'games/tictactoe.html',tag:'Puzzle'},
{name:'2048',icon:'🔢',desc:'Combine matching tiles and reach 2048.',file:'games/2048.html',tag:'Puzzle'},
{name:'Mines',icon:'💣',desc:'Clear the board without hitting a mine.',file:'games/mines.html',tag:'Puzzle'}
];
const grid=document.getElementById('grid');
function render(list=games){grid.innerHTML=list.map(g=>`<article class="card" onclick="location.href='${g.file}'"><span class="badge">${g.tag}</span><div class="icon">${g.icon}</div><h3>${g.name}</h3><p>${g.desc}</p><span class="play">▶ Play now</span></article>`).join('');document.getElementById('count').textContent=`${list.length} ${list.length===1?'game':'games'}`;document.getElementById('total').textContent=games.length}
function randomGame(){location.href=games[Math.floor(Math.random()*games.length)].file}
document.getElementById('search').addEventListener('input',e=>{const q=e.target.value.toLowerCase().trim();render(games.filter(g=>(g.name+' '+g.desc+' '+g.tag).toLowerCase().includes(q)))})
const saved=localStorage.getItem('meow-theme');if(saved==='light')document.body.classList.add('light');document.getElementById('themeBtn').textContent=document.body.classList.contains('light')?'☀️':'🌙';
document.getElementById('themeBtn').addEventListener('click',()=>{document.body.classList.toggle('light');const light=document.body.classList.contains('light');localStorage.setItem('meow-theme',light?'light':'dark');document.getElementById('themeBtn').textContent=light?'☀️':'🌙'});
render();