const WA='2348123958585';
const wa=(message)=>`https://wa.me/${WA}?text=${encodeURIComponent(message)}`;
const toast=document.getElementById('toast');
function showToast(){toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),4500)}

document.querySelectorAll('.buy').forEach(btn=>btn.addEventListener('click',()=>{
  const product=btn.dataset.product;
  showToast();
  // This placeholder intentionally does not invent a Selar checkout URL.
  // Replace this handler with the product's exact Selar URL when each listing is published.
}));

document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{
  const service=link.dataset.service;
  const message=`Hi OBA Digital Studio, I'm interested in ${service}. I'd like to discuss my project and get the available options.`;
  link.href=wa(message);
  link.target='_blank';
}));

const mainWA=document.getElementById('wa');
if(mainWA) mainWA.href=wa("Hi OBA Digital Studio, I'd like to discuss a digital project. I need help choosing the right product or service for my business.");

const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
if(menu) menu.addEventListener('click',()=>{
  nav.classList.toggle('open');
  menu.setAttribute('aria-expanded',nav.classList.contains('open'));
});
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.08});
document.querySelectorAll('.product,.work-card,.service-list a,.step,.why-grid>div,.hero-copy,.hero-visual').forEach(el=>{el.style.transition='opacity .7s ease,transform .7s ease';el.style.opacity='0';el.style.transform='translateY(18px)';observer.observe(el)});
const style=document.createElement('style');style.textContent='.in{opacity:1!important;transform:none!important}.nav nav.open{display:flex;position:absolute;top:68px;left:0;right:0;background:#f5f5f0;padding:20px 4%;flex-direction:column;border-bottom:1px solid #ddd}.nav nav.open a{font-size:16px;padding:8px 0}';document.head.appendChild(style);
