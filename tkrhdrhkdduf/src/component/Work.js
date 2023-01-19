import React from "react";
import img1work from './img/img1.png'
import img2work from './img/img2.png'
import img3work from './img/img3.png'
import img4work from './img/img4.png'
import {useEffect, useState } from "react";

function Work(){
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
    window.onload=function(){
        const workmainbg=document.querySelector('.tkrhdrhkddufworks');
        window.addEventListener('scroll',()=>{
            if(window.scrollY>1400){
                workmainbg.style.backgroundColor=` rgb(177, 96, 19)`;
                workmainbg.style.transition='1s'
            }
            else if(window.scrollY>900){
                workmainbg.style.backgroundColor=`rgb(39, 49, 41)`;
                workmainbg.style.transition='1s'
            }
            else if(window.scrollY>450){
                workmainbg.style.backgroundColor=`rgb(30, 10, 39)`;
                workmainbg.style.transition='1s'
            }
            else{
                workmainbg.style.backgroundColor=`#141414`;
                workmainbg.style.backgroundColor=`rgb(16,47,75)`;
            }
        })

    }
    if(matchMedia("(max-width: 1024px)").matches){
        window.onload=function(){
            const workmainbg=document.querySelector('.tkrhdrhkddufworks');
            window.addEventListener('scroll',()=>{
                if(window.scrollY>750){
                    workmainbg.style.backgroundColor=` rgb(177, 96, 19)`;
                    workmainbg.style.transition='1s'
                }
                else if(window.scrollY>500){
                    workmainbg.style.backgroundColor=`rgb(39, 49, 41)`;
                    workmainbg.style.transition='1s'
                }
                else if(window.scrollY>250){
                    workmainbg.style.backgroundColor=`rgb(30, 10, 39)`;
                    workmainbg.style.transition='1s'
                }
                else{
                    workmainbg.style.backgroundColor=`#141414`;
                    workmainbg.style.backgroundColor=`rgb(16,47,75)`;
                }
            })
    
        }
    }
  
   
    return(
        <div className="work"><div className="workmain"><logo className="worklogo" >Tkrhdrhkdduf</logo><a href="/"><span className="chome">Home</span></a>
        <h1 className="workstitle">Amazing Works Creative <br/>Idea Looking for Innovation</h1>
        <div className="tkrhdrhkddufworks"><div className="workingimgcontainer" style={{transform:`translateY(${(300-currentx)/9.2}vw)`}}><div><img className="img1work" src={img1work} alt='img1work'></img><span className="workword1">Title: tkrhrhkdduf.com<br/>Language Used: React.js, Javascript, Scss<br/>Genre: Website(frontend)<br/>projects work date:<br/>
        2022.April~August <br/>Rlease date: 2022 August 31th<br/><a href="https://tkrhdrhkdduf.com/">visit</a></span></div>
        <div><img className="img2work" src={img2work} alt='img1work'></img><span className="workword2">Title: Are you Mafia<br/>Language Used: Kotlin, Android Studio<br/>Genre: Game(App)<br/>projects work date:<br/>
        2020.October<br/>Release date: 2020 October 4th<br/><a href="https://play.google.com/store/apps/details?id=com.kwang.game">visit</a></span></div> <div><img className="img3work" src={img3work} alt='img1work'></img><span className="workword3">Title: Wild Shooter<br/>Language Used: c#, Unity<br/>Genre: Game(Windows)<br/>projects work date:<br/>
        2020.April~September<br/>Release date: 2020 September 24th<br/><a href="https://drive.google.com/file/d/1eaeSF_p7jV9pNIMEJRY0iPu1ySRLkFzM/view?usp=sharing">visit</a></span></div><div><img className="img4work" src={img4work} alt='img1work'></img><span className="workword4">Title: Hithekwang<br/>Language Used: Html, Jquery, Css, Javascript<br/>Genre: Website(frontend)<br/>projects work date:<br/>
        2020.August<br/>Release date: 2020 August 5th <br/><a href="https://hitthekwang.com/">visit</a></span></div></div></div></div> <div className="wfooter"><div className="wmydef"><span>Kwangyoul Sagong</span><div><span className="wfe">FrontEnd Developer(ux & ui)</span></div></div><div className="wcopyright"><span>© Kwangyoul Sagong 2022</span></div><div className="wcontact"><a href="https://www.instagram.com/kwangtussy/"><span>instagram</span></a><a href="https://www.facebook.com/kwangyoul.sagong/"><span>facebook</span></a><a href="https://www.linkedin.com/in/%EA%B4%91%EC%97%B4-%EC%82%AC%EA%B3%B5-8626281b4/"><span>linkedin</span></a><a href="https://github.com/Tkrhdrhkdduf"><span>github</span></a></div>
                <div className="wcontactoriginal"><h1>Contact Tkrhdrhkdduf</h1><div>kysg0511@gmail.com <br/> +82-010-7654-9532 </div></div></div>
        </div>
    )

}
export default Work