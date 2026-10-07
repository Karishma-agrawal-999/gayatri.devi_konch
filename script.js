
const menu=document.querySelector('.menu'), links=document.querySelector('.links');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));

const modal=document.querySelector('.modal'), modalImg=document.querySelector('.modal img');
document.querySelectorAll('.photo img').forEach(img=>img.addEventListener('click',()=>{if(modal){modal.classList.add('show');modalImg.src=img.src;modalImg.alt=img.alt}}));
document.querySelector('.close')?.addEventListener('click',()=>modal.classList.remove('show'));
modal?.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const cat=btn.dataset.cat;
  document.querySelectorAll('.gallery-item').forEach(item=>item.style.display=(cat==='all'||item.dataset.cat===cat)?'block':'none');
}));
