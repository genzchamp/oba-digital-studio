const WA='2348123958585';
const wa=(message)=>`https://wa.me/${WA}?text=${encodeURIComponent(message)}`;

// Add live checkout URLs here when payment listings are published.
// Until then, product buttons open a pre-filled WhatsApp purchase request.
const PRODUCT_LINKS={
  'chatgpt-prompts':'',
  'build-website':'',
  'social-content':'',
  'launch-kit':'',
  'ai-automation':'',
  'brand-starter':''
};
const PRODUCT_NAMES={
  'ChatGPT Prompt Vault':'chatgpt-prompts',
  'Create Your Own Website in Minutes':'build-website',
  'Social Content Engine':'social-content',
  'Digital Launch Kit':'launch-kit',
  'AI Automation Starter Kit':'ai-automation',
  'Brand Starter System':'brand-starter'
};
const PRODUCT_MESSAGES={
  'chatgpt-prompts':"Hi OBA Digital Studio, I'd like to buy the ChatGPT Prompt Vault. Please send me the current price and payment instructions.",
  'build-website':"Hi OBA Digital Studio, I'd like to buy Create Your Own Website in Minutes. Please send me the current price and payment instructions.",
  'social-content':"Hi OBA Digital Studio, I'd like to buy the Social Content Engine. Please send me the current price and payment instructions.",
  'launch-kit':"Hi OBA Digital Studio, I'd like to buy the Digital Launch Kit. Please send me the current price and payment instructions.",
  'ai-automation':"Hi OBA Digital Studio, I'd like to buy the AI Automation Starter Kit. Please send me the current price and payment instructions.",
  'brand-starter':"Hi OBA Digital Studio, I'd like to buy the Brand Starter System. Please send me the current price and payment instructions."
};
const SERVICE_MESSAGES={
  websites:"Hi OBA Digital Studio, I'm interested in getting a website built for my business. I'd like to discuss my project.",
  'Website Design & Development':"Hi OBA Digital Studio, I'm interested in getting a website built for my business. I'd like to discuss my project.",
  'ai-automation':"Hi OBA Digital Studio, I'm interested in AI automation for my business. I'd like to know what you can automate for me.",
  'AI Automation':"Hi OBA Digital Studio, I'm interested in AI automation for my business. I'd like to know what you can automate for me.",
  branding:"Hi OBA Digital Studio, I'm interested in your branding services. I'd like to discuss building my brand identity.",
  'Branding & Visual Identity':"Hi OBA Digital Studio, I'm interested in your branding services. I'd like to discuss building my brand identity.",
  'social-media':"Hi OBA Digital Studio, I'm interested in your social-media management/content services.",
  'Social Media Management':"Hi OBA Digital Studio, I'm interested in your social-media management/content services.",
  'digital-products':"Hi OBA Digital Studio, I'm interested in one of your digital products and I'd like more information.",
  'Digital Product Creation':"Hi OBA Digital Studio, I'm interested in your digital product creation service. I'd like to discuss an idea.",
  'digital-strategy':"Hi OBA Digital Studio, I'd like to discuss a digital project. I need help choosing the right product or service for my business.",
  'Digital Strategy & Setup':"Hi OBA Digital Studio, I'd like to discuss a digital project. I need help choosing the right product or service for my business.",
  general:"Hi OBA Digital Studio, I'd like to discuss a digital project. I need help choosing the right product or service for my business."
};
const toast=document.getElementById('toast');
function showToast(message){if(!toast)return;toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),4500)}
function productKey(value){return PRODUCT_NAMES[value]||value||''}
function handleProduct(button){const key=productKey(button.dataset.selar||button.dataset.product);const url=PRODUCT_LINKS[key];if(url){window.location.href=url;return}const message=PRODUCT_MESSAGES[key]||"Hi OBA Digital Studio, I'm interested in buying one of your digital products. Please send me the price and payment instructions.";window.open(wa(message),'_blank','noopener')}
document.querySelectorAll('.buy-large,[data-selar]').forEach(button=>button.addEventListener('click',event=>{event.preventDefault();handleProduct(button)}));
document.querySelectorAll('[data-service]').forEach(link=>{const isDetailAction=!link.getAttribute('href')||link.getAttribute('href')==='#'||link.hasAttribute('data-whatsapp-service');if(!isDetailAction)return;const message=SERVICE_MESSAGES[link.dataset.service]||SERVICE_MESSAGES.general;link.href=wa(message);link.target='_blank';link.rel='noopener'});
const mainWA=document.getElementById('wa');if(mainWA&&!mainWA.dataset.noWhatsapp)mainWA.href=mainWA.dataset.service?wa(SERVICE_MESSAGES[mainWA.dataset.service]):wa(SERVICE_MESSAGES.general);
const menu=document.querySelector('.menu');const nav=document.querySelector('.nav nav');if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}))}
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.08});document.querySelectorAll('.product,.work-card,.service-list a,.step,.why-grid>div,.hero-copy,.hero-visual,.box-grid .box,.contact-card').forEach(el=>{el.classList.add('reveal');observer.observe(el)})}
