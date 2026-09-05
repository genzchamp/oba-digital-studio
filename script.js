const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');

if(menu){
  menu.addEventListener('click',()=>{
    const open=links.classList.toggle('open');
    menu.setAttribute('aria-expanded',open);
  });
  links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    links.classList.remove('open');
    menu.setAttribute('aria-expanded','false');
  }));
}

const products={
  'Premium Website Template':{
    description:'A polished, responsive business website foundation for a company that wants to look established without starting from zero.',
    items:['Premium mobile-first layout','Responsive desktop design','Hero, services, work and CTA sections','Clean HTML + CSS + JavaScript structure','Basic customization of business details'],
    price:'From ₦30,000'
  },
  'Business Social Starter Pack':{
    description:'A ready-to-use content system for businesses that need to start posting consistently and professionally.',
    items:['10 promotional design concepts','10 caption ideas','10 content ideas','Story / status-ready formats','Niche-specific customization available'],
    price:'₦5,000'
  },
  'Business Launch Kit':{
    description:'Our starter bundle for a business that needs a stronger digital presence across its website, brand and social channels.',
    items:['Premium business website template','Logo / brand starter direction','Social media starter system','Launch-ready content structure','Customization and setup available'],
    price:'From ₦50,000'
  }
};

const modal=document.querySelector('#productModal');
const modalTitle=document.querySelector('#modalTitle');
const modalDescription=document.querySelector('#modalDescription');
const modalList=document.querySelector('#modalList');
const modalPrice=document.querySelector('#modalPrice');
const modalOrder=document.querySelector('#modalOrder');

function openProduct(name){
  const product=products[name];
  if(!product||!modal)return;
  modalTitle.textContent=name;
  modalDescription.textContent=product.description;
  modalList.innerHTML=product.items.map(item=>`<li>${item}</li>`).join('');
  modalPrice.textContent=product.price;
  modalOrder.href=`mailto:hello@obadigitalstudio.com?subject=${encodeURIComponent('Order: '+name)}&body=${encodeURIComponent('Hello OBA Digital Studio,\n\nI would like to order: '+name+'\n\nPlease send me the next steps for payment and delivery.\n')}`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
}

function closeProduct(){
  if(!modal)return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.product').forEach(card=>{
  card.querySelector('.product-click')?.addEventListener('click',()=>openProduct(card.dataset.product));
});

document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeProduct));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeProduct()});

document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{
  const service=link.dataset.service;
  const btn=document.querySelector('#contactBtn');
  if(btn)btn.href=`mailto:hello@obadigitalstudio.com?subject=${encodeURIComponent(service+' project enquiry')}`;
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));