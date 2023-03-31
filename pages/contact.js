import Script from 'next/script'
import { useEffect, useState } from 'react';
import { useRef } from 'react';
// import "../styles/Custom_pages/Contactpage.scss"
// import profile from "../public/assets/videos/profile.mp4"
import { motion as m } from "framer-motion"
import Mouse from "../public/components/Mouse"
import Link from "next/link";
import SubHead from "../public/components/subheader"
import emailjs from '@emailjs/browser'
import me from "../public/me.png"
import Image from 'next/image'
import SubFooter from '../public/components/subfooter';
import Head from 'next/head';






function Contact(){

  //Width classname


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

  emailjs.send('service_395olyt', 'template_5wew57s', 
  {
    from_name:form.name,
    to_name:'Shirish',
    from_email:form.email,
    to_email:'shirish.shakya5@gmail.com',
    message:form.message
  },
  'SzlVDNiBR3_3JB8YE')
}

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

             <div>
              <span>Contact Details</span>
              <p>shirish.shakya5@gmail.com</p>
              <p>+977 9869134750</p>

              </div> 
              <div>
              <span>Socials </span>
              <ul className="contact d-flex flex-column gap-2" >
                        <li><a href="https://www.linkedin.com/in/shirish-shakya-ba8a49200/">Linkedin</a></li>
                        <li><a href="https://www.behance.net/shirishshakya">Behance</a></li>
                        <li><a href="https://www.instagram.com/shakyastagram/?hl=en">Instagram</a></li>
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
                    <label>What is your name?</label>
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
                    <label>Your Message</label>
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
Contact.getInitialProps = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
          data: {
            title: 'Welcome to my website',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
        });
    }, 4000);
  });
};
export default Contact;


