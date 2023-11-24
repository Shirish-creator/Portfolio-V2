import Script from 'next/script'
import { useEffect, useState } from 'react';
import { useRef } from 'react';
// import "../styles/Custom_pages/Contactpage.scss"
// import profile from "../public/assets/videos/profile.mp4"
import { motion as m } from "framer-motion"
import Mouse from "../public/components/Mouse"
import SubHead from "../public/components/subheader"
import emailjs from '@emailjs/browser'
import me from "../public/me.png"
import Image from 'next/image'
import SubFooter from '../public/components/subfooter';
import Head from 'next/head';
import IconButton from './../public/components/IconButton';


function Contact(){

  

  const [viewWidth, setViewWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewWidth(window.innerWidth);
    };
    

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);

    };
    
  }, []);

  let classs='col'

if(viewWidth<768){
classs='col-12'
}
if(viewWidth>768){
  classs='col-4'
  }
  const divClassName = classs

  //form request

    const formref=useRef();
  const [form, setForm]=useState({
    name:'',
    email:'',
    message:''
  })

  const [loaded, setLoaded]=useState(false)

  const [loading, setLoading]= useState(false)    ;
const handleChange=(e) =>{
const {name,value}=e.target;
setForm({...form,[name]:value})
}


//SzlVDNiBR3_3JB8YE
//template_5wew57s
//service_395olyt

const handleSubmit=(e)=>{
  e.preventDefault();
  setLoading(true);
  setLoaded(true);

  emailjs.send('service_50n9tf3', 'template_5wew57s', 
  {
    from_name:form.name,
    to_name:'Shirish',
    from_email:form.email,
    to_email:'shirish.shakya5@gmail.com',
    message:form.message
  },
  'SzlVDNiBR3_3JB8YE')
}

const [isCopied, setIsCopied] = useState(false);

const handleCopyClick = () => {
  // Logic to copy the email to the clipboard
  const emailElement = document.getElementById('email');
  if (emailElement) {
    const range = document.createRange();
    range.selectNode(emailElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    setIsCopied(true);
     // Reset the "Copied!" message after a delay (e.g., 3 seconds)
     setTimeout(() => {
      setIsCopied(false);
    }, 2000)
  }
  
};

    return(
        <>
        <Head>
          <title>
            Contact
          </title>
        </Head>
        <Mouse/>
        <m.div>
          
        <SubHead></SubHead>
       
        <main>
        
          <section className='contact-section'> 
            <div style={{paddingTop:"6rem"}} className='container d-flex flex-column gap-5'>

              <div className='headingContainer position-relative'>
              <h1>LETS WORK TOGETHER</h1>
              <Image alt="me" src={me} className="position-absolute"></Image >
              </div>
            
            <div className='contact row d-flex flex-row'>
              <div className={`${divClassName} d-flex flex-column gap-4`}>
              <Image src={me} alt="me" className="me-large"></Image >

             <div className='d-flex flex-column GAPm'>
              <span>Contact Details</span>
              <div className='d-flex flex-column GAPxs'>
              <div className='d-flex flex-row GAPm align-items-center'>
              <span className="FONTNEXA SIZEF8 TXTNaturalWhite100">Email:</span>
              <p id="email" className='TXTTailwindGray400 '>shirish.shakya5@gmail.com</p>
              <div className='position-relative'>

                <IconButton 
                onClick={handleCopyClick}
                icon=
                {isCopied ? 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-check-fill" viewBox="0 0 16 16">
                  <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/>
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/>
                </svg>
                : 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                  </svg>
                  }
                />
             
              {isCopied && <div style={{top:'-100%',left:'-50%'}} className='position-absolute FONTNEXA BGBrandBlack300 BDR4 PLm PTxs PBxs PRm TXTNaturalWhite100'>Copied!</div>}
              </div>
              </div>
              <div className='d-flex flex-row GAPm'>
              <span className="FONTNEXA SIZEF8 TXTNaturalWhite100">Mobile:</span>
              <p className='TXTTailwindGray400 FONTNEXA'>+977 9869134750</p>
              </div>
              </div>
              </div> 

              <div className='d-flex flex-column GAPm'>
              <span>Socials </span>
              <ul className="contact d-flex flex-column gap-2" >
                        <li ><a className='TXTBrandOrange500' href="https://www.linkedin.com/in/shirish-shakya-ba8a49200/">Linkedin</a></li>
                        <li><a className='TXTBrandOrange500' href="https://www.behance.net/shirishshakya">Behance</a></li>
                        <li><a className='TXTBrandOrange500' href="https://www.instagram.com/shakyastagram/?hl=en">Instagram</a></li>
                      </ul>

              </div> 
              </div>
              <div className='col'>
              <form 
              className='d-flex flex-column gap-5'
              ref={formref}
              onSubmit={handleSubmit}>
                <ul style={{overflowX:'hidden'}}>
                  <m.li
                  initial={{
                    x:100,
                    opacity:0
                  }}
                  
                  animate={{
                    x:0,
                    opacity:1
                  }}
                  transition={{
                    duration:1.5,
  
                   
                  }}
                  className='input-holder d-flex flex-column'>
                    <label className='TXTNaturalWhite100'>What is your name?</label>
                    <input name='name' type='text' id='name' value={form.name} onChange={handleChange} placeholder='e.g. Mike' required></input>
                  </m.li>
                  <m.li
                   initial={{
                    x:200,
                    opacity:0
                  }}
                  
                  animate={{
                    x:0,
                    opacity:1
                  }}
                  transition={{
                    duration:1.5,
  
                   
                  }}
                  className='input-holder d-flex flex-column'>
                    <label>What is your email?</label>
                    <input name='email' type='email' id='name' value={form.email} onChange={handleChange} placeholder='e.g. Mike@gmail.com' required></input>
                  </m.li>
                  <m.li
                   initial={{
                    x:300,
                    opacity:0
                  }}
                  
                  animate={{
                    x:0,
                    opacity:1
                  }}
                  transition={{
                    duration:1.5,
  
                   
                  }}
                  className='input-holder d-flex flex-column'>
                    <label className='TXTNaturalWhite100'>Your Message</label>
                    <textarea name='message' rows='7' type='text' id='name' value={form.message} onChange={handleChange} placeholder='Your Message Here' required></textarea>
                  </m.li>
                </ul>
                <button type="submit" className="btn btn-outline-primary position-relative">  Send</button>
              </form>
              </div>

            </div>
              
            </div>
          </section>
          <SubFooter> </SubFooter>

          </main>
        </m.div>
        </>

        
    )

    
    
}
// Contact.getInitialProps = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//           data: {
//             title: 'Welcome to my website',
//             content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//           },
//         });
//     }, 4000);
//   });
// };
export default Contact;


