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
