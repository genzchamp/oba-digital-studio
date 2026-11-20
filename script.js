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
 ['Home','index.html'],['Contact',wa(messages.general)],['Privacy','privacy.html'],['Terms','terms.html'],
 ['About OBA','about.html'],['Why OBA','index.html#why'],['Our Work','work.html'],
 ['Our Services','services.html'],['OBA Learning Hub / Marketplace','index.html#learn']
];
function configureNav(){
 const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');
 if(!nav)return;
 nav.innerHTML=navLinks.map(([label,url])=>'<a href="'+url+'"'+(url.startsWith('https://wa.me/')?' target="_blank" rel="noopener"':'')+'>'+label+'</a>').join('');
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
function addDesignSystemLast(){
 if(document.querySelector('link[href*="oba-design-system.css"]'))return;
 const link=document.createElement('link');link.rel='stylesheet';link.href='oba-design-system.css?v=13';link.dataset.obaDesignSystem='true';document.head.appendChild(link);
}
function addSimplifiedStyles(){
 if(document.querySelector('link[href*="oba-simplified.css"]'))return;
 const link=document.createElement('link');link.rel='stylesheet';link.href='oba-simplified.css?v=1';link.dataset.obaSimplified='true';document.head.appendChild(link);
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
function run(){configureNav();configureWhatsApp();addDesignSystemLast();addSimplifiedStyles();addFloatingWhatsApp();addFavicon()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();