/* OBA Digital Studio — shared behavior only.
   Keep navigation, branding, and enquiry actions predictable across pages. */
(function(){
  'use strict';
  const WA='2348123958585';
  const wa=(message)=>`https://wa.me/${WA}?text=${encodeURIComponent(message)}`;
  const messages={
    general:"Hi OBA Digital Studio, I'd like to discuss a digital project. Please guide me on the next steps.",
    websites:"Hi OBA Digital Studio, I'm interested in website design and development. I'd like to discuss my project.",
    'ai-automation':"Hi OBA Digital Studio, I'm interested in AI automation for my business. I'd like to know what you can automate for me.",
    branding:"Hi OBA Digital Studio, I'm interested in branding and visual identity. I'd like to discuss my brand.",
    'social-media':"Hi OBA Digital Studio, I'm interested in social media management and content systems.",
    'digital-products':"Hi OBA Digital Studio, I'm interested in your digital products. Please send me the available options.",
    'digital-strategy':"Hi OBA Digital Studio, I'd like help choosing the right digital strategy or setup for my business.",
    'chatgpt-prompts':"Hi OBA Digital Studio, I'd like to ask about the ChatGPT Prompt Vault. Please send me the payment and delivery details.",
    'build-website':"Hi OBA Digital Studio, I'd like to ask about the website guide. Please send me the payment and delivery details.",
    'social-content':"Hi OBA Digital Studio, I'd like to ask about the Social Content Engine. Please send me the payment and delivery details.",
    'launch-kit':"Hi OBA Digital Studio, I'd like to ask about the Digital Launch Kit. Please send me the payment and delivery details.",
    'ai-automation-kit':"Hi OBA Digital Studio, I'd like to ask about the AI Automation Starter Kit. Please send me the payment and delivery details.",
    'brand-starter':"Hi OBA Digital Studio, I'd like to ask about the Brand Starter System. Please send me the payment and delivery details."
  };
  const productLinks={'chatgpt-prompts':'https://selar.com/r49h8528sq','build-website':'https://selar.com/89p696690n'};
  const serviceAliases={'Website Design & Development':'websites','AI Automation':'ai-automation','Branding & Visual Identity':'branding','Social Media Management':'social-media','Digital Product Creation':'digital-products','Digital Strategy & Setup':'digital-strategy'};
  const getMessage=(key)=>messages[key]||messages.general;
  const productKey=(value)=>({'ChatGPT Prompt Vault':'chatgpt-prompts','Create Your Own Website in Minutes':'build-website','Social Content Engine':'social-content','Digital Launch Kit':'launch-kit','AI Automation Starter Kit':'ai-automation-kit','Brand Starter System':'brand-starter'}[value]||value||'general');
  function addStylesheet(){if(document.querySelector('link[data-oba-unified-style]'))return;const link=document.createElement('link');link.rel='stylesheet';link.href='oba-unified.css?v=2';link.dataset.obaUnifiedStyle='true';document.head.appendChild(link)}
  function addFavicon(){if(document.querySelector('link[rel="icon"]'))return;const link=document.createElement('link');link.rel='icon';link.type='image/svg+xml';link.href='favicon.svg';document.head.appendChild(link)}
  function configureNav(){const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');if(!menu||!nav||menu.dataset.obaReady==='true')return;menu.dataset.obaReady='true';menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu')});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu')}))}
  function configureWhatsApp(){
    document.querySelectorAll('[data-service]').forEach(link=>{const key=serviceAliases[link.dataset.service]||link.dataset.service;link.href=wa(getMessage(key));link.target='_blank';link.rel='noopener'});
    const main=document.getElementById('wa');if(main){const key=main.dataset.service||'general';main.href=wa(getMessage(key));main.target='_blank';main.rel='noopener'}
    document.querySelectorAll('[data-wa-message]').forEach(link=>{link.href=wa(link.dataset.waMessage);link.target='_blank';link.rel='noopener'});
    document.querySelectorAll('.buy-large,[data-product]').forEach(link=>{if(link.dataset.obaBuyReady==='true')return;link.dataset.obaBuyReady='true';link.addEventListener('click',(event)=>{const key=productKey(link.dataset.product||link.dataset.selar||link.closest('.product')?.querySelector('h3')?.textContent?.trim());if(productLinks[key])return;event.preventDefault();window.open(wa(getMessage(key)),'_blank','noopener')})});
  }
  function cleanSocialLabels(){document.querySelectorAll('a[href*="tiktok.com"],a[href*="snapchat.com"]').forEach(link=>{const isTikTok=link.href.toLowerCase().includes('tiktok.com');link.textContent=isTikTok?'TikTok':'Snapchat';link.setAttribute('aria-label',isTikTok?'TikTok profile':'Snapchat profile');link.classList.add('oba-social-link');link.target='_blank';link.rel='noopener'})}
  function hidePhoneText(){const phone=/\+?234[\s-]?812[\s-]?395[\s-]?8585|0812[\s-]?395[\s-]?8585/g;const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(node=>{if(phone.test(node.nodeValue))node.nodeValue=node.nodeValue.replace(phone,'');phone.lastIndex=0})}
  function run(){addStylesheet();addFavicon();configureNav();configureWhatsApp();cleanSocialLabels();hidePhoneText()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
