/* OBA Motion concept interactions — visual demo only, no video rendering backend. */
(function(){
 'use strict';
 const canvas=document.getElementById('motionCanvas');
 const play=document.getElementById('motionPlay');
 const reset=document.getElementById('motionReset');
 const time=document.getElementById('motionTime');
 if(!canvas||!play||!reset)return;
 let running=false,elapsed=0,frame=null,last=0;
 const duration=8;
 function paint(){const s=Math.min(duration,elapsed);const mm=String(Math.floor(s/60)).padStart(2,'0');const ss=String(Math.floor(s%60)).padStart(2,'0');const cs=String(Math.floor((s%1)*100)).padStart(2,'0');time.textContent=mm+':'+ss+'.'+cs+' / 00:08';}
 function tick(now){if(!running)return;if(!last)last=now;elapsed+=(now-last)/1000;last=now;if(elapsed>=duration){elapsed=duration;running=false;play.innerHTML='<span>▶</span> Replay animation';canvas.classList.remove('is-playing');}paint();if(running)frame=requestAnimationFrame(tick);}
 play.addEventListener('click',function(){if(running){running=false;cancelAnimationFrame(frame);play.innerHTML='<span>▶</span> Resume animation';canvas.classList.remove('is-playing');last=0;return;}if(elapsed>=duration)elapsed=0;running=true;last=0;play.innerHTML='<span>Ⅱ</span> Pause animation';canvas.classList.add('is-playing');frame=requestAnimationFrame(tick);});
 reset.addEventListener('click',function(){running=false;cancelAnimationFrame(frame);elapsed=0;last=0;paint();play.innerHTML='<span>▶</span> Play animation';canvas.classList.remove('is-playing');});
 paint();
})();

/* Kinetic storytelling: type-on headings, hand-drawn underline mascot and scroll reveals. */
(function(){
 'use strict';
 const page=document.querySelector('.motion-page');
 if(!page)return;
 const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const headingSelector='.motion-hero h1,.motion-section-heading h2,.motion-intro h2,.motion-engine-band h2,.motion-future h2,.motion-final-cta h2,.motion-feature h3,.motion-steps h3,.motion-home-copy h2';
 const headings=[...page.querySelectorAll(headingSelector)];
 function makeDoodle(){
  const ns='http://www.w3.org/2000/svg';
  const svg=document.createElementNS(ns,'svg');
  svg.setAttribute('class','motion-doodle');svg.setAttribute('viewBox','0 0 180 30');svg.setAttribute('aria-hidden','true');
  svg.innerHTML='<path d="M3 19 C35 10 63 24 91 16 S137 12 158 16"/><g class="doodle-mouse"><path class="mouse-tail" d="M157 19 Q168 27 173 16"/><ellipse class="mouse-body" cx="158" cy="14" rx="9" ry="6"/><circle class="mouse-ear" cx="152" cy="7" r="4"/><circle class="mouse-ear" cx="163" cy="7" r="4"/><circle class="mouse-eye" cx="155" cy="13" r="1"/><circle class="mouse-eye" cx="161" cy="13" r="1"/></g>';
  return svg;
 }
 function splitText(node,spans){
  if(node.nodeType===Node.TEXT_NODE){
   const fragment=document.createDocumentFragment();
   [...node.textContent].forEach(ch=>{
    const span=document.createElement('span');span.className='motion-type-char';span.textContent=ch;
    span.style.setProperty('--oba-char-delay',(spans.count*34)+'ms');spans.count++;fragment.appendChild(span);
   });
   node.parentNode.replaceChild(fragment,node);
  }else if(node.nodeType===Node.ELEMENT_NODE&&node.tagName!=='BR'){
   [...node.childNodes].forEach(child=>splitText(child,spans));
  }
 }
 headings.forEach((heading,index)=>{
  if(heading.dataset.obaTyped)return;heading.dataset.obaTyped='true';
  const label=heading.textContent.trim();heading.setAttribute('aria-label',label);
  const state={count:0};[...heading.childNodes].forEach(node=>splitText(node,state));
  heading.appendChild(makeDoodle());
  heading.dataset.obaDuration=String(Math.min(2600,state.count*34+850));
  if(!reduce)heading.classList.add('motion-ready');
 });
 const revealTargets=page.querySelectorAll('.motion-intro-copy p,.motion-section-heading>p,.motion-app-shell,.motion-prototype-note,.motion-feature,.motion-steps article,.engine-copy>p,.engine-copy>a,.engine-stage,.motion-future-copy>p,.motion-roadmap>div,.motion-final-cta .motion-wrap>p,.motion-final-cta .motion-button,.motion-back-link,.motion-home-visual');
 revealTargets.forEach((el,index)=>{
  el.classList.add('motion-reveal');
  el.style.setProperty('--oba-reveal-delay',(index%5)*85+'ms');
 });
 if(reduce){
  headings.forEach(h=>h.classList.add('is-typing','is-typed'));
  revealTargets.forEach(el=>el.classList.add('is-visible'));
  return;
 }
 const headingObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(!entry.isIntersecting)return;
   const h=entry.target;h.classList.add('is-typing');
   const duration=Number(h.dataset.obaDuration)||1000;
   window.setTimeout(()=>h.classList.add('is-typed'),duration);
   headingObserver.unobserve(h);
  });
 },{threshold:.55,rootMargin:'0px 0px -8% 0px'});
 headings.forEach(h=>headingObserver.observe(h));
 const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}
  });
 },{threshold:.12,rootMargin:'0px 0px -7% 0px'});
 revealTargets.forEach(el=>revealObserver.observe(el));
})();
