(()=>{var e=class{constructor(t){if(this.element=document.querySelector(t),!this.element)throw new Error(`Element with selector ${t} not found`);this.updateTime(),this.start()}formatTime(t){let o=i=>String(i).padStart(2,"0"),n=o(t.getHours()),s=o(t.getMinutes()),r=o(t.getSeconds());return`${n}:${s}:${r}`}updateTime(){let t=new Date;this.element.textContent=this.formatTime(t)}start(){this.interval=setInterval(()=>this.updateTime(),1e3)}stop(){clearInterval(this.interval)}};var c=15;console.log(c);var h=new e(".hero_clock");})();
