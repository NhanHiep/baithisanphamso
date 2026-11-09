"use strict";
(function(){
  const toggle=document.getElementById('portalMenuToggle');
  const nav=document.getElementById('portalMainNav');
  if(!toggle||!nav)return;
  const setOpen=(open)=>{nav.classList.toggle('portal-nav-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Đóng danh mục':'Mở danh mục');};
  toggle.addEventListener('click',()=>setOpen(toggle.getAttribute('aria-expanded')!=='true'));
  nav.addEventListener('click',e=>{if(e.target.closest('a'))setOpen(false)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false)});
  document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!toggle.contains(e.target))setOpen(false)});
  window.addEventListener('resize',()=>{if(window.innerWidth>860)setOpen(false)});
})();
