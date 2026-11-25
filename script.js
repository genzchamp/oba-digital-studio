/* OBA Digital Studio — shared navigation and direct enquiry actions. */
(function(){
'use strict';
const WA='2348123958585';
const wa=(message)=>'https://wa.me/'+WA+'?text='+encodeURIComponent(message);
const messages={
 general:"Hi OBA Digital Studio, I'd like to discuss a digital project. Please guide me on the next steps.",
 websites:"Hi OBA Digital Studio, I'm interested in website and software development. I'd like to discuss what I want to build.",
 'ai-automation':"Hi OBA Digital Studio, I'm interested in AI automation. I'd like to explain a workflow or task I want to automate.",
 'digital-products':"Hi OBA Digital Studio, I'm interested in creating a digital product from my idea or knowledge. I'd like to discuss the process.",
 'digital-strategy':"Hi OBA Digital Studio, I'd like help with my digital strategy. I want to discuss my goals and the right next steps.",
 'learning-ai-tools':"Hi OBA Digital Studio, I'm interested in a custom learning format for AI tools. Please tell me how we can arrange it.",
 'learning-web-apps':"Hi OBA Digital Studio, I'm interested in custom guidance for learning to build a website, app or software product.",
 'learning-digital-products':"Hi OBA Digital Studio, I'd like a custom learning experience on creating and selling digital products. Please share the options."
};
const navLinks=[
 ['Home','index.html'],
 ['Digital Services','services.html'],
 ['Digital Products','products.html'],
 ['Digital Knowledge','free-lab.html'],
 ['Digital Innovation','work.html'],
 ['About OBA','about.html'],
 ['Contact','contact.html']
];
function configureNav(){
 const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');
 if(!nav)return;
 const current=(location.pathname.split('/').pop()||'index.html');
 nav.innerHTML=navLinks.map(([label,url])=>{const active=url===current;return '<a href="'+url+'"'+(active?' class="active" aria-current="page"':'')+'>'+label+'</a>'}).join('');
 let cta=document.querySelector('.nav-cta');
 if(!cta){cta=document.createElement('a');cta.className='nav-cta';cta.href='contact.html';cta.textContent='Let’s talk';nav.insertAdjacentElement('afterend',cta);}
 if(menu&&!menu.dataset.obaReady){
  menu.dataset.obaReady='true';
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');menu.textContent=open?'×':'☰'});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');menu.textContent='☰'}));
 }
}
function configureWhatsApp(){
 document.querySelectorAll('[data-service]').forEach(link=>{
  const key=link.dataset.service||'general';
  link.href=wa(messages[key]||messages.general);
  link.target='_blank';link.rel='noopener';
 });
 document.querySelectorAll('[data-wa-message]').forEach(link=>{link.href=wa(link.dataset.waMessage);link.target='_blank';link.rel='noopener'});
}
function addPageContrast(){
 if(document.querySelector('link[href*="oba-page-contrast.css"]'))return;
 const link=document.createElement('link');link.rel='stylesheet';link.href='oba-page-contrast.css?v=1';document.head.appendChild(link);
}
function addDesignSystemLast(){
 if(document.querySelector('link[href*="oba-design-system.css"]'))return;
 const link=document.createElement('link');link.rel='stylesheet';link.href='oba-design-system.css?v=14';link.dataset.obaDesignSystem='true';document.head.appendChild(link);
}
function addSimplifiedStyles(){
 if(document.querySelector('link[href*="oba-simplified.css"]'))return;
 const link=document.createElement('link');link.rel='stylesheet';link.href='oba-simplified.css?v=2';link.dataset.obaSimplified='true';document.head.appendChild(link);
}
function addFloatingWhatsApp(){
 if(document.querySelector('.oba-floating-whatsapp'))return;
 const link=document.createElement('a');
 link.className='oba-floating-whatsapp';
 link.href=wa(messages.general);
 link.target='_blank';link.rel='noopener';
 link.setAttribute('aria-label','Message OBA Digital Studio on WhatsApp');
 link.setAttribute('title','Message OBA on WhatsApp');
 link.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L4 20l1.1-4a8.2 8.2 0 1 1 15.1-4.3Z"/><path d="M8.7 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4-.1.6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .4-.2 1.2-.7 1.6-.5.4-1.1.6-1.8.4-1-.2-2.2-.8-3.5-1.9-1.1-1-1.9-2.3-2.1-3.3-.2-.8.1-1.6.6-2.1Z"/></svg>';
 document.body.appendChild(link);
}
function addFavicon(){if(document.querySelector('link[rel="icon"]'))return;const link=document.createElement('link');link.rel='icon';link.type='image/svg+xml';link.href='favicon.svg';document.head.appendChild(link)}
function run(){configureNav();configureWhatsApp();addPageContrast();addDesignSystemLast();addSimplifiedStyles();addFloatingWhatsApp();addFavicon();addOBAKineticMotion()}
/* OBA kinetic identity — animation only; existing page content and structure stay intact. */
function addOBAKineticMotion(){
 if(document.documentElement.dataset.obaMotionReady)return;
 document.documentElement.dataset.obaMotionReady='true';
 const style=document.createElement('style');
 style.id='oba-kinetic-motion';
 style.textContent=`
 .oba-kinetic-heading{position:relative}
 .hero .hero-copy h1 .oba-hero-word{display:block;width:max-content;max-width:100%;line-height:.98;letter-spacing:-.055em}
 .hero .hero-copy h1 .oba-hero-word:nth-child(1){color:#f5f6f1}
 .hero .hero-copy h1 .oba-hero-word:nth-child(2){color:#b9ed70}
 .hero .hero-copy h1 .oba-hero-word:nth-child(3){color:#f5f6f1}
 .hero .hero-copy h1 .oba-hero-word .oba-letter:nth-child(4n+2){color:#c9ed82}
 .hero .hero-copy h1 .oba-hero-word .oba-letter:nth-child(7n+4){color:#d8c28a}
 .hero.container .hero-visual{display:block!important;position:absolute!important;right:1%!important;top:0!important;width:49%!important;height:100%!important;min-height:0!important;margin:0!important;padding:0!important;z-index:1!important;pointer-events:none!important;overflow:visible!important}.hero.container .hero-visual:before{display:none!important}.hero.container .hero-visual:after{display:none!important}.oba-orbit-system{position:absolute;inset:0;width:100%;height:100%;z-index:2;overflow:visible;pointer-events:none;opacity:.92}@media(max-width:760px){.hero.container .hero-visual{display:block!important;right:-12%!important;top:12%!important;width:100%!important;height:78%!important;min-height:0!important;opacity:.58!important;z-index:1!important}.hero.container .hero-visual .oba-orbit-system{opacity:1}}
 .oba-orbit-system{perspective:900px;transform-style:preserve-3d;filter:drop-shadow(0 0 8px rgba(185,237,112,.16))}
 .oba-orbit-system .orbit-a{transform-box:view-box;transform-origin:250px 250px;animation:obaOrbitA 27s linear infinite}
 .oba-orbit-system .orbit-b{transform-box:view-box;transform-origin:250px 250px;animation:obaOrbitB 34s linear infinite}
 .oba-orbit-system .orbit-c{transform-box:view-box;transform-origin:250px 250px;animation:obaOrbitC 42s linear infinite}
 .oba-orbit-system .orbit-glow{animation:obaOrbitPulse 6s ease-in-out infinite alternate}
 @keyframes obaOrbitA{from{transform:perspective(900px) rotateX(68deg) rotateZ(0deg)}to{transform:perspective(900px) rotateX(68deg) rotateZ(360deg)}}
 @keyframes obaOrbitB{from{transform:perspective(900px) rotateY(66deg) rotateZ(0deg)}to{transform:perspective(900px) rotateY(66deg) rotateZ(-360deg)}}
 @keyframes obaOrbitC{from{transform:perspective(900px) rotateX(48deg) rotateY(52deg) rotateZ(0deg)}to{transform:perspective(900px) rotateX(48deg) rotateY(52deg) rotateZ(360deg)}}
 @keyframes obaOrbitPulse{to{opacity:.48;transform:scale(1.1)}}
 .oba-kinetic-heading .oba-letter{display:inline;opacity:0;transition:opacity .12s linear}
 .oba-kinetic-heading.oba-typing .oba-letter{opacity:1}
 .oba-kinetic-heading .oba-underline{position:absolute;left:0;bottom:-13px;width:clamp(88px,20%,150px);height:22px;overflow:visible;pointer-events:none;opacity:0}
 .oba-kinetic-heading.oba-typed .oba-underline{opacity:1}
 .oba-kinetic-heading .oba-underline path{fill:none;stroke:#a8dc62;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:230;stroke-dashoffset:230}
 .oba-kinetic-heading.oba-typed .oba-underline path{animation:obaInkDraw .72s cubic-bezier(.5,0,.25,1) forwards}
 .oba-kinetic-heading .oba-doodle{opacity:0;transform:translate(-7px,4px) scale(.7);transform-origin:center}
 .oba-kinetic-heading.oba-typed .oba-doodle{animation:obaDoodlePop .4s cubic-bezier(.2,1.5,.5,1) .62s forwards}
 @keyframes obaInkDraw{to{stroke-dashoffset:0}}
 @keyframes obaDoodlePop{to{opacity:1;transform:translate(0,0) scale(1)}}
 .oba-scroll-reveal{opacity:0;transform:translate3d(0,22px,0);transition:opacity .8s ease,transform .85s cubic-bezier(.2,.7,.2,1);transition-delay:var(--oba-motion-delay,0ms)}
 .oba-scroll-reveal.oba-in-view{opacity:1;transform:translate3d(0,0,0)}
 @media(max-width:700px){.oba-scroll-reveal{transform:translate3d(0,15px,0)}.oba-kinetic-heading .oba-underline{bottom:-10px;height:18px}}
 @media(prefers-reduced-motion:reduce){
  .oba-orbit-system *{animation:none!important}
  .oba-kinetic-heading .oba-letter{opacity:1!important;transition:none!important}
  .oba-kinetic-heading .oba-underline{opacity:1}
  .oba-kinetic-heading .oba-underline path{stroke-dashoffset:0!important;animation:none!important}
  .oba-kinetic-heading .oba-doodle{opacity:1;transform:none;animation:none!important}
  .oba-scroll-reveal{opacity:1!important;transform:none!important;transition:none!important}
 }`;
 document.head.appendChild(style);
 const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const heroVisual=document.querySelector('.hero .hero-visual');
 if(heroVisual&&!heroVisual.querySelector('.oba-orbit-system')){
  const orbit=document.createElementNS('http://www.w3.org/2000/svg','svg');
  orbit.setAttribute('class','oba-orbit-system');orbit.setAttribute('viewBox','0 0 500 500');orbit.setAttribute('aria-hidden','true');
  orbit.innerHTML='<defs><radialGradient id="obaOrbitCore"><stop offset="0" stop-color="#d5f58b" stop-opacity=".3"/><stop offset="1" stop-color="#b9ed70" stop-opacity="0"/></radialGradient></defs><circle class="orbit-glow" cx="250" cy="250" r="105" fill="url(#obaOrbitCore)"/><g class="orbit-a"><ellipse cx="250" cy="250" rx="205" ry="92" fill="none" stroke="#b9ed70" stroke-opacity=".55" stroke-width="1.5"/><circle cx="455" cy="250" r="5" fill="#d8c28a"/><circle cx="45" cy="250" r="3" fill="#b9ed70"/></g><g class="orbit-b" transform="rotate(58 250 250)"><ellipse cx="250" cy="250" rx="185" ry="72" fill="none" stroke="#e7e8dd" stroke-opacity=".42" stroke-width="1.2"/><circle cx="435" cy="250" r="4" fill="#b9ed70"/></g><g class="orbit-c" transform="rotate(-52 250 250)"><ellipse cx="250" cy="250" rx="220" ry="116" fill="none" stroke="#d8c28a" stroke-opacity=".34" stroke-width="1"/><circle cx="470" cy="250" r="3.5" fill="#e6e7dd"/></g>';
  heroVisual.prepend(orbit);
 }
 const skip='header,nav,footer,form,button,input,textarea,select,script,style,.nav,.footer,.oba-floating-whatsapp,[aria-hidden="true"]';
 const headings=[...document.querySelectorAll('main h1,main h2,main h3,body>h1,body>h2')].filter(h=>!h.closest(skip)&&h.textContent.trim());
 function addDoodle(){
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.setAttribute('class','oba-underline');svg.setAttribute('viewBox','0 0 155 24');svg.setAttribute('aria-hidden','true');
  svg.innerHTML='<path d="M2 15 C28 7 51 19 77 13 S119 9 137 13"/><g class="oba-doodle"><path d="M136 15 Q146 23 151 13" fill="none" stroke="#b7ed69" stroke-width="2" stroke-linecap="round"/><ellipse cx="137" cy="12" rx="7" ry="5" fill="#b7ed69" stroke="#17221a" stroke-width="1.2"/><circle cx="132" cy="6" r="3.2" fill="#b7ed69" stroke="#17221a" stroke-width="1.1"/><circle cx="142" cy="6" r="3.2" fill="#b7ed69" stroke="#17221a" stroke-width="1.1"/><circle cx="135" cy="11" r=".9" fill="#17221a"/><circle cx="140" cy="11" r=".9" fill="#17221a"/></g>';
  return svg;
 }
 headings.forEach(h=>{
  if(h.dataset.obaKinetic)return;h.dataset.obaKinetic='true';h.classList.add('oba-kinetic-heading');
  if(h.matches('.hero .hero-copy h1')){
   h.innerHTML='<span class="oba-hero-word">Creativity</span><span class="oba-hero-word">into</span><span class="oba-hero-word">Productivity.</span>';
  }
  const walker=document.createTreeWalker(h,NodeFilter.SHOW_TEXT);
  const nodes=[];while(walker.nextNode())if(walker.currentNode.textContent.trim())nodes.push(walker.currentNode);
  let count=0;
  nodes.forEach(node=>{
   const frag=document.createDocumentFragment();
   [...node.textContent].forEach(char=>{
    const span=document.createElement('span');span.className='oba-letter';span.textContent=char;
    span.style.transitionDelay=(count*125)+'ms';count++;frag.appendChild(span);
   });
   node.parentNode.replaceChild(frag,node);
  });
  h.appendChild(addDoodle());h.dataset.obaTypingDuration=Math.min(10000,Math.max(1200,count*125+750));
 });
 const revealSelector='main section > .container > *,main section > div > *,main article,main .card,main .service-card,main .product-card,main .work-card,main .feature-card,main .resource-card,main p,main li,main figure';
 const reveals=[...document.querySelectorAll(revealSelector)].filter(el=>!el.closest(skip)&&!el.matches('h1,h2,h3')&&!el.classList.contains('oba-kinetic-heading'));
 reveals.forEach((el,i)=>{if(el.dataset.obaReveal)return;el.dataset.obaReveal='true';el.classList.add('oba-scroll-reveal');el.style.setProperty('--oba-motion-delay',(i%4)*75+'ms')});
 if(reduce){headings.forEach(h=>h.classList.add('oba-typing','oba-typed'));reveals.forEach(el=>el.classList.add('oba-in-view'));return}
 if(!('IntersectionObserver'in window)){headings.forEach(h=>h.classList.add('oba-typing','oba-typed'));reveals.forEach(el=>el.classList.add('oba-in-view'));return}
 const headingObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;const h=entry.target;h.classList.add('oba-typing');
  window.setTimeout(()=>h.classList.add('oba-typed'),Number(h.dataset.obaTypingDuration)||900);headingObserver.unobserve(h);
 }),{threshold:.45,rootMargin:'0px 0px -6% 0px'});
 headings.forEach(h=>headingObserver.observe(h));
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('oba-in-view');revealObserver.unobserve(entry.target)}
 }),{threshold:.1,rootMargin:'0px 0px -5% 0px'});
 reveals.forEach(el=>revealObserver.observe(el));
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();