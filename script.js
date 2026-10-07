const t=document.getElementById('track'),secs=[...t.children],menu=document.getElementById('menu');
const names={inicio:'Inicio','sobre-mi':'Sobre mí',habilidades:'Skills',proyectos:'Proyectos',contacto:'Contacto'};
secs.forEach(s=>{const li=document.createElement('li'),a=document.createElement('a');a.textContent=names[s.id];a.onclick=()=>go(s.id);a.dataset.id=s.id;li.append(a);menu.append(li)});
function go(id){document.getElementById(id).scrollIntoView({behavior:'smooth',inline:'start',block:'nearest'})}
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));
t.addEventListener('wheel',e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){e.preventDefault();t.scrollBy({left:e.deltaY*1.5,behavior:'auto'})}},{passive:false});
addEventListener('keydown',e=>{if(e.key==='ArrowRight')t.scrollBy({left:innerWidth});if(e.key==='ArrowLeft')t.scrollBy({left:-innerWidth})});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.dataset.id===e.target.id));
if(e.target.id==='habilidades')document.querySelectorAll('.sk').forEach(s=>s.querySelector('i').style.width=s.dataset.v+'%')}}),{root:t,threshold:.6});
secs.forEach(s=>io.observe(s));
document.getElementById('f').onsubmit=e=>{e.preventDefault();const [n,c,m]=e.target.elements;location.href='mailto:ezequieltt282@gmail.com?subject='+encodeURIComponent('Contacto desde tu portafolio - '+n.value)+'&body='+encodeURIComponent(m.value+'\n\nMi correo: '+c.value);document.getElementById('ok').textContent='Abriendo tu app de correo...';e.target.reset()};