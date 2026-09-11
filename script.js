const WA='2348123958585';
const wa=(message)=>`https://wa.me/${WA}?text=${encodeURIComponent(message)}`;

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
  'Digital Product Creation':"Hi OBA Digital Studio, I'm interested in one of your digital products and I'd like more information.",
  'digital-strategy':"Hi OBA Digital Studio, I'd like to discuss a digital project. I need help choosing the right product or service for my business.",
  'Digital Strategy & Setup':"Hi OBA Digital Studio, I'd like to discuss a digital project. I need help choosing the right product or service for my business.",
  general:"Hi OBA Digital Studio, I'd like to discuss a digital project. I need help choosing the right product or service for my business."
};

const toast=document.getElementById('toast');
function showToast(message){
  if(!toast)return;
  toast.textContent=message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer=setTimeout(()=>toast.classList.remove('show'),4500);
}

function productKey(value){return PRODUCT_NAMES[value]||value||'';}

function handleProduct(button){
  const key=productKey(button.dataset.selar||button.dataset.product);
  const url=PRODUCT_LINKS[key];
  if(url){
    window.location.href=url;
    return;
  }
  showToast('Checkout will activate when this product is published on Selar and its exact checkout URL is added.');
}

document.querySelectorAll('.buy,.buy-large,[data-selar]').forEach(button=>{
  button.addEventListener('click',event=>{
    event.preventDefault();
    handleProduct(button);
  });
});

document.querySelectorAll('[data-service]').forEach(link=>{
  const message=SERVICE_MESSAGES[link.dataset.service]||SERVICE_MESSAGES.general;
  link.href=wa(message);
  link.target='_blank';
  link.rel='noopener';
});

const mainWA=document.getElementById('wa');
if(mainWA)mainWA.href=wa(SERVICE_MESSAGES.general);

const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
if(menu&&nav){
  menu.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));
  });
  document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded','false');
  }));
}

if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add('in');
  }),{threshold:.08});
  document.querySelectorAll('.product,.work-card,.service-list a,.step,.why-grid>div,.hero-copy,.hero-visual,.box-grid .box,.contact-card').forEach(el=>{
    el.classList.add('reveal');
    observer.observe(el);
  });
}
