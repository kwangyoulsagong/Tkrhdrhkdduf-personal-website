import React, { Suspense } from "react";
import { useRef,useEffect, useState } from "react";
import './eventcomponent/effect'
import tkrhdrhkdduf from './img/sgky.png'
import macbookpro from './img/macbookpro.png'
import hitthekwang from './img/hitthekwang.png'
import wildshooter from './img/wild.jpg'
import web1 from './img/web1.jpeg'
import tweb from './img/tweb.png'
import game1 from './img/wordgame1.png'
import game2 from './img/wordgame2.png'
import js from './img/js.png'
import react from './img/react.png'
import iphone from './img/iphone.png'
import insta from './img/instagram.PNG'
import facebook from './img/facebook.PNG'
import kakao from './img/kakao.PNG'
import gmail from './img/gmail.PNG'
import call from './img/call.PNG'
import me from  './img/me_main.png'
import k from './img/k.jpg'
import k1 from './img/k1.JPG'
import k2 from './img/k2.JPG'
import k3 from './img/k3.JPG'
import k4 from './img/k4.jpeg'
import k7 from './img/programmer.jpg'




function Home(){
  
    const [currentx,movex]=useState(0);// 유즈 스테이트를 사용시 currentx 는 현재 위치=0 move스크롤 위치에따라 이벤트 사용함
    function Scroll(){
        movex(window.scrollY); //수직 방향의 크롤 값 
    }
    useEffect(()=>{
        window.addEventListener('scroll',Scroll);// Scroll 함수에 스크롤 이벤트 붙임
        return()=>{
            window.removeEventListener('scroll',Scroll);//사용안할시 이벤트 없앰
        };
    },[])// 한번만 실행하기위해 배열
    if (matchMedia("(min-width: 1024px)").matches){
        const bgchange= document.querySelector('.App');
    const bgchangem= document.querySelector('.main3');
    const logochange=document.querySelector('.logo');
    const bgchangeab=document.querySelector('.about');
    const bgarr=[bgchange, bgchangem, bgchangeab];
    const navchange=document.querySelector('.navbar');
    const old=document.querySelector('.old');
    window.addEventListener('scroll', ()=>{
        if(window.scrollY>4500){
            for(var i=1; i<bgarr.length; i++){
                bgarr[i].style.backgroundColor=`rgb(188, 188, 183)`;
                bgarr[i].style.transition='0.7s'
            }
        }
        else if(window.scrollY>1200){
            for(var i=0; i<bgarr.length; i++){
                bgarr[i].style.backgroundColor=`#f0f0ef`;
                bgarr[i].style.transition='0.7s'
            }
            logochange.style.color=`#000`;
            navchange.style.color=`#000`;
            old.style.color=`#000`;
        }
        
        else if((window.scrollY)>700){
            bgchange.style.backgroundColor=`#0a0a0a`;
            bgchange.style.transition='0.7s'
            logochange.style.color=`#fff`;
            navchange.style.color=`#fff`;
            old.style.color=`#fff`;

        }
        else{
            bgchange.style.backgroundColor=`#f0f0ef`;
            logochange.style.color=`#000`;
            navchange.style.color=`#000`;
            old.style.color=`#000`;
        }
   

        
    })
    const macout=document.querySelector('.macbookpro')
    const reactleft=document.querySelector('.react')
    const jsleft=document.querySelector('.js')
    const array =[reactleft,jsleft]
    window.addEventListener('scroll',()=>{
        if(window.scrollY>2100){
            for(var i=0; i<array.length; i++){
                array[i].style.opacity=1
                array[i].style.transform=('translateX(1%)')
                array[i].style.transition='1s'
                
            }
           
        }
        else if(window.scrollY>1500){
            macout.style.transform=('scale(1)')
           macout.style.transition='3s'

        }
        else{
            macout.style.transform='scale(8)'
            for(var i=0; i<array.length; i++){
                array[i].style.opacity=0
                array[i].style.transform=('translateX(100%)')
                
            }
            
        }

    })
  
    const barpercent= document.querySelector('.bar1')
    const barpercent1= document.querySelector('.bar2')
    const barpercent2=document.querySelector('.bar3')
    const barpercent3=document.querySelector('.bar4')
    const barpercent4=document.querySelector('.bar5')
    const barpercent5=document.querySelector('.bar6')
    const barpercent6=document.querySelector('.bar7')
    const barpercent7=document.querySelector('.bar8')
    const barpercent8=document.querySelector('.bar9')
    const statbare=document.querySelector('.statbar')
    var bararr=[barpercent,barpercent1,barpercent2,barpercent3,barpercent4,barpercent5,barpercent6,barpercent7,barpercent8]
    var score=['75%','80%','95%','100%','55%','68%','50%','70%','45%']
    window.addEventListener('scroll',()=>{
        for(var i=0; i<bararr.length; i++){
            if(window.scrollY>6100){
                bararr[i].style.width=score[i];
                bararr[i].style.transition='2s';
                statbare.style.strokeDashoffset= 90;
                statbare.style.transition='2s';
            }
            else{
                bararr[i].style.width='0%';
                statbare.style.strokeDashoffset= 442;
            }
        }
     
    })

    }
    function aboutsection(){
        document.getElementById("about").scrollIntoView({behavior:"smooth"})
        
    }
    function worksection(){
        document.getElementById("work").scrollIntoView({behavior:"smooth"})
    }
 



   
    if(matchMedia("(max-width: 1024px)").matches){
        const mmac= document.querySelector('.mmacbookpro');
        const mreact=document.querySelector('.mreact');
        const mjs=document.querySelector('.mjs');
        var marray=[mreact,mjs];
        window.addEventListener('scroll',()=>{
            if(window.scrollY>1000){
                for(var i=0; i<marray.length; i++){
                    marray[i].style.opacity=1;
                    marray[i].style.transform=('translateX(-300%)');
                    marray[i].style.transition='3s';
                }


            }
            else if(window.scrollY>900){
                mmac.style.transform=('scale(2)');
                mmac.style.transition='3s';
            }
            else{
                mmac.style.transform=('scale(5)');
                for(var i=0; i<marray.length; i++){
                    marray[i].style.opacity=0;
                    marray[i].style.transform=('translateX(300%)');
                }
    

            }
           

        })

    }

    const mbarpercent= document.querySelector('.mbar1')
    const mbarpercent1= document.querySelector('.mbar2')
    const mbarpercent2=document.querySelector('.mbar3')
    const mbarpercent3=document.querySelector('.mbar4')
    const mbarpercent4=document.querySelector('.mbar5')
    const mbarpercent5=document.querySelector('.mbar6')
    const mbarpercent6=document.querySelector('.mbar7')
    const mbarpercent7=document.querySelector('.mbar8')
    const mbarpercent8=document.querySelector('.mbar9')
    const mstatbare=document.querySelector('.mstatbar')
    var mbararr=[mbarpercent,mbarpercent1,mbarpercent2,mbarpercent3,mbarpercent4,mbarpercent5,mbarpercent6,mbarpercent7,mbarpercent8]
    var mscore=['75%','80%','95%','100%','55%','68%','50%','70%','45%']
    window.addEventListener('scroll',()=>{
        for(var i=0; i<mbararr.length; i++){
            if(window.scrollY>2700){
                mbararr[i].style.width=mscore[i];
                mbararr[i].style.transition='2s';
                mstatbare.style.strokeDashoffset= 90;
                mstatbare.style.transition='2s';
            }
            else{
                mbararr[i].style.width='0%';
                mstatbare.style.strokeDashoffset= 442;
            }
        }
     
    })
    function maboutsection(){
        document.getElementById("mabout").scrollIntoView({behavior:"smooth"})
        
    }
    function mworksection(){
        document.getElementById("mwork").scrollIntoView({behavior:"smooth"})
    }
    const mlogo=document.querySelector('.mmlogo');
    const mnav=document.querySelector('.mnavbar');
    const mold=document.querySelector('.mold');
    var logoarr=[mlogo,mnav,mold];
    window.addEventListener('scroll',()=>{
        for(var i=0; i<logoarr.length; i++){
            if(window.scrollY>1500){
                logoarr[i].style.color=`#000`;
            }
            else if(window.scrollY>800){
                logoarr[i].style.color=`#fff`;
            }
            else if(window.scrollY>100){
                logoarr[i].style.opacity=1;
                logoarr[i].style.color=`#000`;
            }
            else{
                logoarr[i].style.opacity=0;
                logoarr[i].style.color=`#000`;
            }
        }
        
    })

    
    
    
   

  
    
  
    


    return(
        <div className="main"  ><div className="preloader"><span>Tkrhdrhkdduf<br/>Kwangyoul Sagong</span></div><div className="maincontainer"> <logo className="logo" >Tkrhdrhkdduf</logo> <nav className="navbar"> <li onClick={worksection}>Work</li> <li onClick={aboutsection}>About</li> <a href="https://hitthekwang.com/"><li className="old">Old</li></a></nav><div className="container" >
        <section className="section one" id="size1" ><img className="bgimg" src={tkrhdrhkdduf} alt="tkrhkdduf"/><p className="name">Tkrh<span className="midname">drhk</span><span className="endname">dduf</span></p> <p className="dev">-Web & App Developer-</p></section>
        <section className="section two" ><div className="circlecontainer" ><p className="word1">Creative Interactive</p></div><circle className="circ"  style={{opacity:(currentx-700)/100}}><video className="vidcontainer" src="./mainbg.mp4" autoPlay loop muted></video></circle> <circle className="Scrolldown">scroll down</circle></section>
         </div><div className="main2"><circle className="circlework" style={{opacity:(currentx-1300)/100}}><p className="ab">Work</p>
         </circle><p className="write" style={{opacity:(currentx-1400)/100}}>Tkrhkdduf is my personal website. I'm a creative and flexible person, mainly in charge of developing front-end and apps, and will contribute to my future plans.</p>
         <div className="maccontainer"><img className="macbookpro" src={macbookpro} alt="macbookpro"></img><img className="react" src={react} alt="react" ></img><img className="js" src={js} alt="js" ></img></div><div className="imgcontainer"><border className="pborder"></border>
         <circle className="pcirc"></circle><div className="projects"><p className="wordprojects">projects</p></div>
         <div className="workreact"></div><div className="sortp"><p className="sortw">Recently Projects </p></div><div className="projectcontainer" id="work"><div className="workimgcontainer"><p className="wordwork">work</p><p className="wordweb1">Tkrhdrhkdduf / Web</p><p className="wordgame2">Are you Mafia / App</p>
         <p className="wordgame1">Wildshooter / Game</p><p className="wordweb2">Hitthekwang / web</p><img className="workimgsize" src={web1} alt="web1"></img>
         <img className="workimgsize" src={tweb} alt="hitthekwang"></img><img className="workimgsize" src={game2} alt="game1"></img><img className="workimgsize" src={game1} alt="game1"></img><img className="workimgsize" src={hitthekwang} alt="game1"></img></div></div></div><div className="linkwork"><a href="/works"> <span>Visit Work Page</span></a></div><div className="knowmore">Do you want know more?</div>
         <div className="Explore">Let's Explore More</div><img className="iphone" src={iphone} alt="iphone"></img><div className="iphonecontainer" ><div className="iphonediv" style={{transform:`translateY(${(2700-currentx)/9.2}vw)`}}><img className="iphoneimg" src={insta} alt="insta"></img><img className="iphoneimg" src={facebook} alt="facebook"></img>
         <img className="iphoneimg" src={kakao} alt="kakao"></img><img className="iphoneimg" src={gmail} alt="gmail"></img><img className="iphoneimg" src={call} alt="call" ></img></div></div><div className="header1"><p className="word2" style={{transform:`translateX(${(2700-currentx)/40}vw)`}}>
             Vizualize Memorable Eyesighting Fun Vizualize </p> </div><div className="header2"><p className="three"style={{transform:`translateX(${(currentx-2800)/40}vw)`}}>Branding Work Creative Design Interactive</p></div></div>
             <div className="main3" ></div><div className="about" id="about"><h2 className="profiletag">PROFILE</h2><div className="aboutcont"><img className="k" src={k} alt="k"></img><img className="k1" src={k1} alt="k1"></img><img className="k2" src={k2} alt="k2"></img><img className="k3" src={k3} alt="k3"></img><img className="k4" src={k4} alt="k4"></img>
             <img className="k5" src={k2} alt="k5"></img><img className="k6" src={k2} alt="k6"></img>
             <img className="k7" src={k7} alt="k7"></img><img className="k8" src={k2} alt="k8"></img>
             <img className="k9" src={k2} alt="k9"></img><img className="k10" src={k2} alt="k10"></img></div>
             <span className="aboutme">Kwangyoul Sagong is a <br/> creative and interactive developer.<br/>
             I always try to develop content <br/> that is bright and can fascinate people.<br/>I mainly focus on web development and <br/>apps, and I try one by one as a hobby.</span>
             <span className="information"> Nationality: Korea Republic<br/> Birth: 1999 / January / 17th <br/> MBTI: ISTP</span><span className="language"><span className="langaugeskill">Language Skill:</span><div className="languagecircle">
                <div>C++<div className="bar"><div className="bar1"></div></div></div><div>JavaScript<div className="bar"><div className="bar2"></div></div></div><div>Css<div className="bar"><div className="bar3"></div></div></div><div>Html<div className="bar"><div className="bar4"></div></div></div><div>Kotlin<div className="bar"><div className="bar5"></div></div></div><div>Java<div className="bar"><div className="bar6"></div></div></div>
                <div>Python<div className="bar"><div className="bar7"></div></div></div><div>C<div className="bar"><div className="bar8"></div></div></div><div>C#<div className="bar"><div className="bar9"></div></div></div></div></span></div><div className="statbox"><svg><circle cx="70" cy="70" r="70" className="statgrade"></circle><circle cx="70" cy="70" r="70"  className="statbar"></circle></svg><div className="gradeview">A+</div><div className="stat">Kwangyoul Sagong Projects Stats</div>
                <div className="projectstat"><span>FrontEnd: 2 <br/> App: 1 <br/> Game: 1 <br/> Total Commits in Github: 174</span></div></div>
                <div className="footer"><div className="mydef"><span>Kwangyoul Sagong</span><div><span className="fe">FrontEnd Developer(ux & ui)</span></div></div><div className="copyright"><span>© Kwangyoul Sagong 2022</span></div><div className="contact"><a href="https://www.instagram.com/kwangtussy/"><span>instagram</span></a><a href="https://www.facebook.com/kwangyoul.sagong/"><span>facebook</span></a><a href="https://www.linkedin.com/in/%EA%B4%91%EC%97%B4-%EC%82%AC%EA%B3%B5-8626281b4/"><span>linkedin</span></a><a href="https://github.com/Tkrhdrhkdduf"><span>github</span></a></div>
                <div className="contactoriginal"><h1>Contact Tkrhdrhkdduf</h1><div>kysg0511@gmail.com <br/> +82-010-7654-9532 </div></div></div></div> 

     <div className="mmain"><logo className="mmlogo" >Tkrhdrhkdduf</logo> <nav className="mnavbar"> <li onClick={mworksection}>Work</li> <li onClick={maboutsection}>About</li><a href="https://hitthekwang.com/"><li className="mold">Old</li></a></nav><img className="mbg" src={tkrhdrhkdduf} alt="tkrhdrhkdduf"></img><p className="mname">Tkrh<span className="mmidname">drhk</span><span className="mendname">dduf</span></p><span className="mlogo">Tkrhdrhkdduf</span><div className="mlogo2"><span>web & App Developer<div className="mlogo3">(Frontend develpoer(UX & UI)</div></span></div></div><div className="sec2"><circle className="videocontent">
     <video className="mvidcontainer" src="./mainbg.mp4" autoPlay loop muted></video></circle><span className="mword">Creative Interactive</span></div><div className="minfo"><circle className="mcirclework" style={{opacity:(currentx-900)/100}}><p className="mab">Work</p>
         </circle><p className="mwrite" style={{opacity:(currentx-1200)/100}}>Tkrhkdduf is my personal website. I'm a creative and flexible person, mainly in charge of developing fornt-end and apps, and will contribute to my future plans.</p>
         <div className="mworkstation"><img className="mmacbookpro" src={macbookpro} alt="macbookpro"></img><img className="mreact" src={react} alt="react" ></img><img className="mjs" src={js} alt="js" ></img>
         <border className="mpborder"></border><circle className="mpcirc"></circle><div className="mprojects"><p className="mwordprojects">projects</p></div></div></div><div className="mworkreact"></div><div className="msortp"><p className="msortw">Recently Projects </p></div><div className="mprojectcontainer" id="mwork"><div className="mworkimgcontainer"><p className="mwordwork">work</p><p className="mwordweb1">Tkrhdrhkdduf / Web</p><p className="mwordgame2">Are you Mafia / App</p>
         <p className="mwordgame1">Wildshooter / Game</p><p className="mwordweb2">Hitthekwang / web</p><img className="mworkimgsize" src={web1} alt="web1"></img>
         <img className="mworkimgsize" src={tweb} alt="hitthekwang"></img><img className="mworkimgsize" src={game2} alt="game1"></img><img className="mworkimgsize" src={game1} alt="game1"></img><img className="mworkimgsize" src={hitthekwang} alt="game1"></img></div></div><div className="linkwork"><a href="/works"> <span>Visit Work Page</span></a></div><div className="mknowmore">Do you want know more?</div>
         <div className="mExplore">Let's Explore More</div><img className="miphone" src={iphone} alt="iphone"></img><div className="miphonecontainer" ><div className="miphonediv" style={{transform:`translateY(${(1700-currentx)/5.2}vw)`}}><img className="miphoneimg" src={insta} alt="insta"></img><img className="miphoneimg" src={facebook} alt="facebook"></img>
         <img className="miphoneimg" src={kakao} alt="kakao"></img><img className="miphoneimg" src={gmail} alt="gmail"></img><img className="miphoneimg" src={call} alt="call" ></img></div></div><div className="mheader1"><p className="mword2" style={{transform:`translateX(${(100-currentx)/40}vw)`}}>
             Vizualize Memorable Eyesighting Fun Vizualize </p> </div><div className="mheader2"><p className="mthree"style={{transform:`translateX(${(currentx-1900)/40}vw)`}}>Branding Work Creative Design Interactive</p></div>
             <div className="mmain3" ></div><div className="mabout" id="mabout"><h2 className="mprofiletag">PROFILE</h2><div className="maboutcont"><img className="mk" src={k} alt="k"></img><img className="mk1" src={k1} alt="k1"></img><img className="mk2" src={k2} alt="k2"></img><img className="mk3" src={k3} alt="k3"></img><img className="mk4" src={k4} alt="k4"></img>
             <img className="mk5" src={k2} alt="k5"></img><img className="mk6" src={k2} alt="k6"></img>
             <img className="mk7" src={k7} alt="k7"></img><img className="mk8" src={k2} alt="k8"></img>
             <img className="mk9" src={k2} alt="k9"></img><img className="mk10" src={k2} alt="k10"></img></div><span className="maboutme">Kwangyoul Sagong is a <br/> creative and interactive developer.<br/>
             I always try to develop content <br/> that is bright and can fascinate people.<br/>I mainly focus on web development and <br/>apps, and I try one by one as a hobby.</span>
             <span className="minformation"> Nationality: Korea Republic<br/> Birth: 1999 / January / 17th <br/> MBTI: ISTP</span><span className="mlanguage"><span className="mlangaugeskill">Language Skill:</span><div className="mlanguagecircle">
                <div>C++<div className="mbar"><div className="mbar1"></div></div></div><div>JavaScript<div className="mbar"><div className="mbar2"></div></div></div><div>Css<div className="mbar"><div className="mbar3"></div></div></div><div>Html<div className="mbar"><div className="mbar4"></div></div></div><div>Kotlin<div className="mbar"><div className="mbar5"></div></div></div><div>Java<div className="mbar"><div className="mbar6"></div></div></div>
                <div>Python<div className="mbar"><div className="mbar7"></div></div></div><div>C<div className="mbar"><div className="mbar8"></div></div></div><div>C#<div className="mbar"><div className="mbar9"></div></div></div></div></span></div><div className="mstatbox"><svg><circle cx="70" cy="70" r="70" className="mstatgrade"></circle><circle cx="70" cy="70" r="70"  className="mstatbar"></circle></svg><div className="mgradeview">A+</div><div className="mstat">Kwangyoul Sagong Projects Stats</div>
                <div className="mprojectstat"><span>FrontEnd: 2 <br/> App: 1 <br/> Game: 1 <br/> Total Commits in Github: 174</span></div></div> <div className="mfooter"><div className="mmydef"><span>Kwangyoul Sagong</span><div><span className="mfe">FrontEnd Developer(ux & ui)</span></div></div><div className="mcopyright"><span>© Kwangyoul Sagong 2022</span></div><div className="mcontact"><a href="https://www.instagram.com/kwangtussy/"><span>instagram</span></a><a href="https://www.facebook.com/kwangyoul.sagong/"><span>facebook</span></a><a href="https://www.linkedin.com/in/%EA%B4%91%EC%97%B4-%EC%82%AC%EA%B3%B5-8626281b4/"><span>linkedin</span></a><a href="https://github.com/Tkrhdrhkdduf"><span>github</span></a></div>
                <div className="mcontactoriginal"><h1>Contact Tkrhdrhkdduf</h1><div>kysg0511@gmail.com <br/> +82-010-7654-9532 </div></div></div>
            
         
           
        </div>
        
       
       
    );
    
    

}



export default Home
