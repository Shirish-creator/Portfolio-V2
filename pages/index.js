
import Link from "next/link"
import Header from "../public/components/header"
import Toggle from "../public/components/togglemenu"
import ThreeD  from "../public/components/ThreeD"
import Footer from "../public/components/Footer"
import Script from 'next/script'
import {use, useEffect,useRef,useState } from 'react'
import World from "../public/components/worldcanvas"
import Mouse from "../public/components/Mouse"
import Head from "next/head"
import { easeIn, motion as m } from "framer-motion"
import { Spring } from "@react-spring/core"
import styles from '../styles/Custom_pages/custom-components/ToggleSwitch.module.css';
import Sidenavigation from "../public/components/side-navigation";
import Typewriter from 'typewriter-effect';
import {projects} from '../public/scripts/Datas/projects'; //projects database
import BGERASER from "../public/components/BgEraserSection";
import React from 'react';




export default function Home() {


  
 
    let exploreref=useRef()
    const landingTitle="YOU'VE SAFELY LANDED ON MY DESIGN WORLD"
    const [isToggled, setToggled] = useState(false);
    const [time, setTime] = useState('');

    const mouseTargetElements = [
      { targetClass: "p-right", hoverClass: "mouse-cursor-case" },
      { targetClass: "designs-grid-container", hoverClass: "mouse-cursor-brush",pressClass: "mouse-cursor-brushed" },
      // Add more objects for additional target elements and hover classes
    ];

    const titleLetters = landingTitle.split('');
   
    

    //for smooth scroll
    useEffect(() => {
      const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        const sections = document.querySelectorAll('section');
  
        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 50; // Adjust offset as needed
          const sectionHeight = section.clientHeight;
  
          if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
            const name = section.getAttribute('name');
            window.history.replaceState(null, null, `#${name}`);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  //for time
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const torontoTime = date.toLocaleTimeString('en-US', { timeZone: 'America/Toronto' });
      setTime(torontoTime);
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  

  //side-bar toggle

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

    //for scrolling of the button
    // useEffect(()=>{
    //   let scrollable=document.querySelector('main')
    //   let explore=document.querySelector('.explore-world')
      
    //   scrollable.addEventListener('scroll',(e)=>{
    //     let t=scrollable.scrollTop;
    //     if (t>0){
    //       explore.style.display="none"

    //     }
    //   if(t<=0){
    //     explore.style.display="block"
       
    //   }
        
    //   })
    // })
    const [checked, setChecked] = useState(false);

  return (
    
      
      <m.div>
        <Head>
        <meta property="og:image" content="https://scontent.xx.fbcdn.net/v/t1.15752-9/313273686_827503425189555_3207342809800637848_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=mtft8E-ZwkUAX9C4eAk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTHQ8fYnEQ5DaG4H5No7212K8qluiamCzyTikBCNaWZ0Q&oe=6383DEDB" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Shirish - The Design World</title>

        </Head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous">

        </Script>

        <World></World>
        
        <Toggle></Toggle>
        <Mouse 
        mouseTargetElements={mouseTargetElements}
        // targetClass="p-right" hoverClass="mouse-cursor-case" 
        />


        {/* switch button */}

        {/* <div  ref={exploreref} className={`${styles.toggleWrapper} explore-world` } onClick={()=>setChecked(!checked)}>
        <div
          className={`${styles.toggleSwitch} ${checked ? styles.checked : ''} ${!checked ? styles.unchecked:''}`}
        />
      </div> */}

      {/* Mobile Navigation */}
      <Sidenavigation isSidebarOpen={isSidebarOpen}></Sidenavigation>


        {/* <World/> */}
        <main className={checked ? 'main-inactive' : ''}>
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}></Header>

          <div className="hero-wrapper position-relative">           
            <section className="w-100 hero-container" style={{top: 0}} >
              <div className="container position-relative">
                <m.div 
                 initial={{
                  y:-100,
                  opacity:0
                }}
                
                animate={{
                  y:0,
                  opacity:1
                }}
                transition={{
                  duration:1.5,

                 
                }}
                className="gradient-shade w-100" />
                <div className="hero border-l-r-b d-flex flex-column">
                  <img className="blur_purple_1" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/313479256_441074301297160_4045645680689999996_n.png?_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=BzXvvAA_jf4AX8ZvoyI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR-PW0VRmR0wPatq0d1oqC6ePOtG7lIdXFqvEfQmqm3lQ&oe=6384022B" alt="purple light" />
                  <img className="sun_light" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/313447552_795166854896686_2591347491281059701_n.png?_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=tgKaeaGHcGgAX-87D4s&_nc_oc=AQm_TteOTHijzqhuo9SFAS2B6U8sMUShLb3MjyW3RaHthO9eQEII8Rp_sSknUxGDLTtqvHOBtq9uaBPY_P0tyKpg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSriLuF3KeHLAogomxbbjwanaeM-BFPnGTOwmhKZoGuTg&oe=6384FFC5" alt="sun light" />
                  <div className="hero-title d-flex flex-column">
                    <span style={{fontFamily:"Monument Extended Bold", letterSpacing:0.8}}>SHIRISH SHAKYA</span>
                    {/* <h1>
                    YOU'VE SAFELY LANDED ON MY DESIGN WORLD
                    </h1> */}
                    <h1 className="FONTMONUMENT" >
                      <div>
                                    {titleLetters.map((letter, index) => (
                            <m.span
                              key={index}
                              initial={{ y: -100, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
                              
                            >
                              {letter}
                            </m.span>
                          ))}
                          </div>
                    </h1>
                    
                      <div className="TypeWriterWrapper ">
                    <Typewriter
                    style={{letterSpacing:0}}
                        options={{
                          strings: ['I design', 'I code','I create',''],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                      </div>
                      
                      
                      
                  </div>
                  <div className="profile_info_top d-flex w-100">
                    <div className="profile_detail d-flex flex-row">
                      <div className="profile_picture" />
                      <p className="profile_details">Hey!, I’m a product designer based
                        in Canada <span><svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_3249_7064)">
<path fillRule="evenodd" clipRule="evenodd" d="M12.1043 18.7918C12.484 21.4036 11.9001 23.5128 10.3375 25.6768C9.98629 26.1619 9.61537 26.5525 9.18519 26.9695C9.183 26.3923 8.81427 26.1443 8.25899 26.017C10.5438 23.7586 11.4853 21.2675 11.786 18.7918H11.268C9.5583 18.6228 7.68396 21.5023 5.48478 22.2859C6.53169 20.2754 5.36187 20.0033 2.70618 20.8966C4.69246 18.5262 4.8856 17.6505 2.70618 17.9665C3.8321 17.115 4.87902 16.6255 5.86228 16.4258C3.81455 15.7739 1.99287 14.6765 0.454326 13.0085C3.34267 12.9032 2.63375 10.952 0.00439453 8.01317C3.50069 9.77119 5.34431 9.99287 4.77367 7.97586C5.80741 8.6738 7.13306 10.0104 8.52895 11.5073C7.99123 8.76379 7.58738 6.16516 7.77833 4.22058C9.1369 6.26831 10.6008 4.19643 12.0362 0C13.2455 3.82771 14.5449 5.95226 16.1888 4.40713C16.4017 6.11029 16.1734 7.93196 15.5874 9.8524L15.5501 11.3163C16.913 9.84582 18.2519 8.45652 19.3295 7.92757C18.6601 10.1421 21.0041 9.36955 24 8.01097C21.1643 11.1802 20.9405 12.8527 23.4359 12.969C22.3978 14.5844 20.5674 15.5676 18.4406 16.3117C19.3668 16.5772 20.293 17.0776 21.2192 17.8524C19.3032 17.6944 19.7048 18.9498 21.2741 20.969C18.8774 20.2667 17.6549 20.4576 18.4121 22.2859C15.5786 19.9155 13.5572 18.7676 12.3193 18.7918H12.1043Z" fill="#FF0000"/>
</g>
<defs>
<clipPath id="clip0_3249_7064">
<rect width="24" height="26.9695" fill="white"/>
</clipPath>
</defs>
</svg>
</span> who brings concepts,
                        art, and ideas into reality.</p>
                    </div>
                    <div className="social_links d-flex flex-column">
                      <span>shirish.shakya5@gmail.com</span>
                      <div className="time">{time} <span>Local Time</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section id="digital-products" className="w-100">
            <div className="container position-relative" id="products-container">
              <div style={{borderTop:"1px solid white"}} className="border-l-r-b d-flex flex-row container-title">
               
                <div className=" container-header d-flex align-items-center" >
                  <h2 className="secton-header-h2">FEATURED PROJECTS</h2>
                  
                </div>
              </div>
            </div>
            <div className="container d-flex flex-row " style={{justifyContent: 'center'}}>
              {/* projects container */}
              <ul className="border-l-r-b project-contents">
              {projects.filter(project => project.featured === true).map((project, index, array) => (
                <React.Fragment key={project.id}>
                  <li  className="project d-flex" id={project.title} >
                    <div className="p-left d-flex flex-column">
                      <div className="project-detail d-flex flex-column">
                        <span className="project-leading">
                          {/* Mapping responsibilities */}
                          
                          {project.responsibilities.map((responsibility, resIndex) => (
              <span key={resIndex} className="MRm">{responsibility}</span>
            ))}                          
                        </span>
                        <h3 className="allCaps">{project.title}</h3>
                        <p className="project-details">{project.projectBrief}</p>
                      </div>
                      <Link className="btn btn-outline-primary position-relative" href={project.link}>
                        VIEW CASE STUDY
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                          <path d="M15.964.686a.5.5 0 0 0-.65-.65L0.767 5.855H0.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                        </svg>
                      </Link>
                    </div>
                    <Link href={project.link} className="p-right d-flex align-items-center justify-content-center position-relative">
                      <div className="position-absolute sub-image">
                        <img src={project.projectMascotImageLink} alt="Project Mascot" />
                      </div>
                      <img className="rightimg" src={project.featuredImageLink} alt="featured-image" />
                    </Link>
                    
                  </li>
        {index !== array.length - 1 && ( // Add a div except for the last project
      <div style={{ width: '100%', backgroundColor: 'white', height: '1px' }} />
    )}
        </React.Fragment>
      ))}
                
                
              </ul>
              {/* end of project container */}
            </div>
          </section> 
          <BGERASER/>   
         <ThreeD/>
         <Footer/>
        </main>
        <Script type="module" src="/script.js"></Script>
        </m.div>           
      
   
  )
}
