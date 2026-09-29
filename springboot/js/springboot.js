document.querySelectorAll('pre').forEach(function(p){
  var b=document.createElement('button');b.className='copy';b.textContent='Copy';
  b.onclick=function(){navigator.clipboard.writeText(p.querySelector('code').innerText);b.textContent='Copied';setTimeout(function(){b.textContent='Copy'},1500)};
  p.appendChild(b);
});
var links={};document.querySelectorAll('.toc .pl a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
var io=new IntersectionObserver(function(es){es.forEach(function(e){
  if(e.isIntersecting){Object.values(links).forEach(function(a){a.removeAttribute('aria-current')});
  if(links[e.target.id])links[e.target.id].setAttribute('aria-current','true')}})},{rootMargin:'0px 0px -70% 0px'});
document.querySelectorAll('.pat').forEach(function(s){io.observe(s)});