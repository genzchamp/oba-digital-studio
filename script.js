const WA='2348123958585';
const wa=(message)=>`https://wa.me/${WA}?text=${encodeURIComponent(message)}`;

/* Global site consistency: favicon, logo treatment, mobile navigation and safe service links. */
(function(){
  const favicon=document.querySelector('link[rel="icon"]')||document.createElement('link');
  favicon.rel='icon';
  favicon.type='image/svg+xml';
  favicon.href='favicon.svg';
  if(!favicon.parentNode)document.head.appendChild(favicon);

  if(!document.getElementById('oba-global-site-fixes')){
    const style=document.createElement('style');
    style.id='oba-global-site-fixes';
    style.textContent=`
      .brand{display:flex;align-items:center;gap:12px;min-height:44px}
      .brand::before{content:"";display:block;width:46px;height:46px;flex:0 0 46px;background:url("assets/oba-logo.svg") center/contain no-repeat}
      .brand b,.brand span{display:none}
      .footer .brand::before{width:52px;height:52px;flex-basis:52px}
      @media(max-width:800px){
        .nav{height:auto;min-height:76px;flex-wrap:wrap;gap:14px;padding-top:14px;padding-bottom:14px}
        .nav .menu{display:block;order:2;margin-left:auto;position:relative;z-index:30}
        .nav nav{display:none;order:4;width:100%;flex-direction:column;align-items:stretch;gap:0;padding-top:10px}
        .nav nav.open{display:flex}
        .nav nav a{padding:12px 0;border-top:1px solid rgba(16,18,17,.12)}
        .nav .nav-cta{order:3;font-size:12px;padding:9px 12px}
      }
      @media(max-width:520px){.brand::before{width:40px;height:40px;flex-basis:40px}.footer .brand::before{width:44px;height:44px;flex-basis:44px}}
    `;
    document.head.appendChild(style);
  }
})();

/* SEO enhancement: add page-aware canonical, social metadata and structured data. */
(function(){
  const canonical=new URL(window.location.pathname,window.location.origin).href;
  const pageTitle=document.title||'OBA Digital Studio';
  const description=document.querySelector('meta[name="description"]')?.content||'OBA Digital Studio helps creators and businesses build websites, automate workflows, strengthen brands and launch digital products.';
  const addMeta=(attr,value)=>{
    if(!value)return;
    let el=document.querySelector(`meta[${attr}]`);
    if(!el){const parts=attr.split('=');el=document.createElement('meta');el.setAttribute(parts[0],parts[1]);document.head.appendChild(el)}
    el.content=value;
  };
  let link=document.querySelector('link[rel="canonical"]');
  if(!link){link=document.createElement('link');link.rel='canonical';document.head.appendChild(link)}
  link.href=canonical;
  addMeta('property=og:type','website');addMeta('property=og:title',pageTitle);addMeta('property=og:description',description);addMeta('property=og:url',canonical);addMeta('property=og:site_name','OBA Digital Studio');
  addMeta('name=twitter:card','summary');addMeta('name=twitter:title',pageTitle);addMeta('name=twitter:description',description);
  if(!document.querySelector('script[type="application/ld+json"]')){
    const ld=document.createElement('script');ld.type='application/ld+json';ld.textContent=JSON.stringify({'@context':'https://schema.org','@type':'Organization','name':'OBA Digital Studio','url':window.location.origin+'/','description':description,'contactPoint':{'@type':'ContactPoint','telephone':'+2348123958585','contactType':'customer service'}});document.head.appendChild(ld);
  }
})();

const PRODUCT_LINKS={'chatgpt-prompts':'https://selar.com/r49h8528sq','build-website':'https://selar.com/89p696690n','social-content':'https://selar.com/gx0w8o1576','launch-kit':'','ai-automation':'','brand-starter':''};
const PRODUCT_NAMES={'ChatGPT Prompt Vault':'chatgpt-prompts','Create Your Own Website in Minutes':'build-website','Social Content Engine':'social-content','Digital Launch Kit':'launch-kit','AI Automation Starter Kit':'ai-automation','Brand Starter System':'brand-starter'};
const PRODUCT_MESSAGES={'chatgpt-prompts':"Hi OBA Digital Studio, I'd like to buy the ChatGPT Prompt Vault for ₦5,000. Please send me payment and delivery instructions.",'build-website':"Hi OBA Digital Studio, I'd like to buy Create Your Own Website in Minutes for ₦7,500. Please send me payment and delivery instructions.",'social-content':"Hi OBA Digital Studio, I'd like to buy the Social Content Engine for ₦6,500. Please send me payment and delivery instructions.",'launch-kit':"Hi OBA Digital Studio, I'd like to buy the Digital Launch Kit for ₦9,000. Please send me payment and delivery instructions.",'ai-automation':"Hi OBA Digital Studio, I'd like to buy the AI Automation Starter Kit for ₦10,000. Please send me payment and delivery instructions.",'brand-starter':"Hi OBA Digital Studio, I'd like to buy the Brand Starter System for ₦7,500. Please send me payment and delivery instructions."};
const SERVICE_MESSAGES={websites:"Hi OBA Digital Studio, I'm interested in getting a website built for my business. I'd like to discuss my project.",'Website Design & Development':"Hi OBA Digital Studio, I'm interested in getting a website built for my business. I'd like to discuss my project.",'ai-automation':"Hi OBA Digital Studio, I'm interested in AI automation for my business. I'd like to know what you can automate for me.",'AI Automation':"Hi OBA Digital Studio, I'm interested in AI automation for my business. I'd like to know what you can automate for me.",branding:"Hi OBA Digital Studio, I'm interested in your branding services. I'd like to discuss building my brand identity.",'Branding & Visual Identity':"Hi OBA Digital Studio, I'm interested in your branding services. I'd like to discuss building my brand identity.",'social-media':"Hi OBA Digital Studio, I'm interested in your social-media management/content services.",'Social Media Management':"Hi OBA Digital Studio, I'm interested in your social-media management/content services.",'digital-products':"Hi OBA Digital Studio, I'm interested in one of your digital products and I'd like more information.",'Digital Product Creation':"Hi OBA Digital Studio, I'm interested in your digital product creation service. I'd like to discuss an idea.",'digital-strategy':"Hi OBA Digital Studio, I'd like to discuss a digital project. I need help choosing the right product or service for my business.",'Digital Strategy & Setup':"Hi OBA Digital Studio, I'd like to discuss a digital project. I need help choosing the right product or service for my business.",general:"Hi OBA Digital Studio, I'd like to discuss a digital project. I need help choosing the right product or service for my business."};
const toast=document.getElementById('toast');
function showToast(message){if(!toast)return;toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),4500)}
function productKey(value){return PRODUCT_NAMES[value]||value||''}
function handleProduct(button){const key=productKey(button.dataset.selar||button.dataset.product);const url=PRODUCT_LINKS[key];if(url){window.location.href=url;return}window.open(wa(PRODUCT_MESSAGES[key]||"Hi OBA Digital Studio, I'm interested in buying one of your digital products. Please send me the price and payment instructions."),'_blank','noopener')}
document.querySelectorAll('.buy-large,[data-selar]').forEach(button=>button.addEventListener('click',event=>{event.preventDefault();handleProduct(button)}));

document.querySelectorAll('[data-service]').forEach(link=>{const message=SERVICE_MESSAGES[link.dataset.service]||SERVICE_MESSAGES.general;link.href=wa(message);link.target='_blank';link.rel='noopener'});

/* The homepage previously linked to service pages that were not present in the repository. Keep those CTAs useful instead of sending visitors to 404 pages. */
const missingServiceMessages={'service-websites.html':'Website Design & Development','service-ai-automation.html':'AI Automation','service-branding.html':'Branding & Visual Identity','service-social-media.html':'Social Media Management','service-digital-products.html':'Digital Product Creation','service-digital-strategy.html':'Digital Strategy & Setup'};
document.querySelectorAll('a[href]').forEach(link=>{const file=link.getAttribute('href')?.split('?')[0];if(missingServiceMessages[file]){link.href=wa(SERVICE_MESSAGES[missingServiceMessages[file]]);link.target='_blank';link.rel='noopener'}});

const mainWA=document.getElementById('wa');
if(mainWA&&!mainWA.dataset.noWhatsapp){mainWA.href=mainWA.dataset.service?wa(SERVICE_MESSAGES[mainWA.dataset.service]):wa(SERVICE_MESSAGES.general);mainWA.target='_blank';mainWA.rel='noopener'}

const menu=document.querySelector('.menu');const nav=document.querySelector('.nav nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu')});document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu')}))}
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.08});document.querySelectorAll('.product,.work-card,.service-list a,.step,.why-grid>div,.hero-copy,.hero-visual,.box-grid .box,.contact-card').forEach(el=>{el.classList.add('reveal');observer.observe(el)})}
