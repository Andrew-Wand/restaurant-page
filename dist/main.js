(()=>{"use strict";const e=function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("home-container"),t.setAttribute("id","home-container");const n=document.createElement("div");n.classList.add("home-content-container");const d=document.createElement("p");d.textContent="Hello DERP!",t.appendChild(n),n.appendChild(d),e.appendChild(t)},t=(e,t)=>{const n=document.createElement("button");return n.classList.add("nav-btn"),n.textContent=t,n.setAttribute("id",e),n};(function(){const e=document.getElementById("content"),n=(()=>{const e=document.createElement("header");e.classList.add("header-container");const n=document.createElement("h1");n.classList.add("site-title"),n.setAttribute("id","site-title"),n.textContent="Perfect Pancakes";const d=document.createElement("img");return d.src="/dist/assets/pancake.png",d.classList.add("logo-img"),d.setAttribute("id","logo-img"),e.appendChild(n),e.appendChild((()=>{const e=document.createElement("nav");e.classList.add("nav-bar");const n=t("home-btn","Home"),d=t("menu-btn","Menu"),c=t("contact-btn","Contact");return e.appendChild(n),e.appendChild(d),e.appendChild(c),e})()),e.appendChild(d),e})();e.appendChild(n)})(),e();const n=document.querySelector("#content"),d=document.getElementById("home-btn"),c=document.getElementById("menu-btn"),s=document.getElementById("contact-btn");d.classList.add("selected"),d.addEventListener("click",(()=>{d.classList.add("selected"),c.classList.remove("selected"),s.classList.remove("selected"),n.removeChild(n.lastChild),e()})),c.addEventListener("click",(()=>{c.classList.add("selected"),d.classList.remove("selected"),s.classList.remove("selected"),n.removeChild(n.lastChild),function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div");n.textContent="Second page!",t.appendChild(n),e.appendChild(t)}()})),s.addEventListener("click",(()=>{s.classList.add("selected"),d.classList.remove("selected"),c.classList.remove("selected"),n.removeChild(n.lastChild),document.getElementById("logo-img").animate([{transform:"translateY(0px) rotate(0deg)"},{transform:"translateY(-10px) rotate(1080deg)"}],{duration:100,fill:"forwards"}),function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div");n.textContent="Third page!",t.appendChild(n),e.appendChild(t)}()})),document.getElementById("site-title").addEventListener("click",(()=>{location.reload()}))})();