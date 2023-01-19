import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import App from '../../App';
window.onload=function(){
  if(window.matchMedia("(min-width: 1024px)").matches){
    gsap.registerPlugin(ScrollTrigger);
  
  let pages = gsap.utils.toArray(".section");//섹션에 있는 배열들로 만듬
  
  gsap.to(pages, {
    xPercent: -100 * (pages.length - 1),// translatex x축을 옆으로 옮김
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      invalidateOnRefresh:true,
      pin: true,
      scrub:2,
  
      end: ()=> + (pages.offsetWidth/20),// 섹션배열이 보이는 너비가 끝이나면 끝남
    }
  })

  }
  let sl=document.querySelector('.projectcontainer');
  let cr=document.querySelector('.workimgcontainer');
  let pressed=false;
  let startx;
  let x;
  sl.addEventListener('mousedown',(e)=>{
      pressed=true;
      startx=e.offsetX-cr.offsetLeft;
      sl.style.cursor='grabbing';
    
      
  })
  window.addEventListener('mouseup',()=>{
      pressed=false;
  })
  sl.addEventListener('mousemove',(e)=>{
      if(!pressed) return;
      e.preventDefault();
      x=e.offsetX
      cr.style.left=`${x-startx}px`;
      checkboundary()
  })
  function checkboundary(){
    let outer =sl.getBoundingClientRect();
    let inner= cr.getBoundingClientRect();
    if(parseInt(cr.style.left)>0){
      cr.style.left='0px';
    }
    else if(inner.right<outer.right){
      cr.style.left=`-${inner.width-outer.width}px`

    }
  
  }
  setTimeout(()=>{
    const loader=document.querySelector('.preloader');
  loader.style.display="none";

  },1000)
  
  

  
  };