const menuButton=document.querySelector('.menu-toggle');const menu=document.querySelector('#menu');
function closeMenu(){menu?.classList.remove('open');menuButton?.setAttribute('aria-expanded','false')}
menuButton?.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.classList.contains('open')){closeMenu();menuButton.focus()}});
document.querySelectorAll('[data-wa]').forEach(a=>{a.href='https://wa.me/5551999776170?text='+encodeURIComponent('Olá, gostaria de obter informações sobre o atendimento e o agendamento de uma consulta com o Dr. Miguel Castro.');a.target='_blank';a.rel='noopener noreferrer'});
