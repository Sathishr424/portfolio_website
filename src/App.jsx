import { useEffect, useRef, useState } from 'react';
import './App.css';
import project_bg from './images/project.png';
import client_bg from './images/client.png';
import bg from './images/bg.png';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faHeart, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { ScrollTrigger } from 'gsap/all';
import { faGithub, faLinkedin, faSquareUpwork } from '@fortawesome/free-brands-svg-icons';

function App() {
  const openingScreen = useRef(null);

  const projects = [
    {
      name: 'Deviant Lifestyle',
      description: "Deviant Lifestyle is a unique and inclusive e-commerce platform designed to help people explore their sexuality and embrace their authentic selves. Founded by Allen Stallings, the brand is built on a passion for empowerment and self-expression. It offers a thoughtfully curated collection of products that combine comfort with a touch of daring, creating a safe and judgment-free space where individuals and couples can discover new facets of pleasure and connection. More than just a website, Deviant Lifestyle is about celebrating freedom, breaking societal norms, and inspiring people to live life unapologetically.",
      stacks: ['NextJS', 'React', 'Node', 'JavaScript', 'Python', 'MongoDB', 'MYSQL', 'Stripe', 'PayPal']
    },
    {
      name: 'LEGO Sales tracking',
      description: "Brick Sales is a website I created to make life easier for LEGO fans. It brings together LEGO products from the official LEGO site and compares their prices across popular retailers like Target, Walmart, Amazon, Best Buy, and more. I built a custom scraper that collects product data from these sites, updates prices regularly, and stores everything in a database. The site doesn’t just show you where to find the best deals—it also features price history graphs, past sales trends, and even details on deals that have ended. It’s designed to help LEGO enthusiasts save money, track prices, and shop smarter, all in one convenient place.",
      stacks: ['Vue', 'Laravel', 'Node', 'JavaScript', 'Python', 'Php', 'MySQL', 'D3', 'Puppeteer']
    },
    {
      name: 'Ecommerse site for custom hats',
      description: "Developed a custom e-commerce website that allows users to purchase hats in bulk, complete with their own custom designs and text placement. Users can easily personalize their orders and specify their design preferences directly on the site.The website includes a robust admin panel for the client to manage their business efficiently. Through the admin panel, the client can add and update hat details, upload images, set prices, and approve or manage orders.With full e-commerce functionality, the site supports secure payments, a contact system for inquiries, and a streamlined order process. It’s designed to provide a seamless experience for both customers and administrators.",
      stacks: ['Laravel', 'Php', 'MySQL', 'Stripe']
    },
  ];

  const testimonals = [
    {
      name: <p>via <a rel="noreferrer" target='_blank' className='hover:underline' href="https://www.upwork.com/freelancers/~01b87d2baf21208fc5">UpWork</a></p>,
      description: "As always Sathish delivers and is very flexible with his work. Will be hiring him for a longer-term job shortly and couldn't be happier with the work he has delivered.",
    },
    {
      name: <p>via <a rel="noreferrer" target='_blank' className='hover:underline' href="https://www.upwork.com/freelancers/~01b87d2baf21208fc5">UpWork</a></p>,
      description: "Sathish delivered results not only quickly but fit perfectly to specification, and what was not quite up to specification, was quickly amended in speedy time. Sathish is hard working and will go above and beyond the requirements to make sure that the client is satisfied. Would recommend him to anybody looking to get work done well and fast!",
    },
    {
      name: <p>via <a rel="noreferrer" target='_blank' className='hover:underline' href="https://www.upwork.com/freelancers/~01b87d2baf21208fc5">UpWork</a></p>,
      description: "Sathish did a fantastic job. He understood the brief very well, and completed the job quickly and exactly as needed. Highly recommended.",
    },
    {
      name: <p>via <a rel="noreferrer" target='_blank' className='hover:underline' href="https://www.upwork.com/freelancers/~01b87d2baf21208fc5">UpWork</a></p>,
      description: "Sathish is our go-to guy for all data extraction tasks. Quick turnaround and high quality of work. We highly recommend Sathish and will continue to use his help.",
    },
    {
      name: <p>via <a rel="noreferrer" target='_blank' className='hover:underline' href="https://www.upwork.com/freelancers/~01b87d2baf21208fc5">UpWork</a></p>,
      description: "It was pleasure working with you! He delivered exactly as promised. Thank you my friend!",
    },
  ]

  const skills = [
    {
      name: 'Python',
      score: 95
    },
    {
      name: 'JavaScript',
      score: 95
    },
    {
      name: 'Java',
      score: 85
    },
    {
      name: 'C++',
      score: 85
    },
    {
      name: 'React',
      score: 95
    },
    {
      name: 'Angular',
      score: 90
    },
    {
      name: 'NEXTJS',
      score: 95
    },
    {
      name: 'D3',
      score: 90
    },
    {
      name: 'Laravel',
      score: 95
    },
    {
      name: 'Solidity',
      score: 85
    },
    {
      name: 'DSA',
      score: 95
    },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray('.skills-section .single-skill');
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills-section'
      }
    });
    sections.forEach((section, i) => {
      let val = parseFloat(section.querySelector('#perc').getAttribute('data-value'));
      let score = parseFloat(section.querySelector('#time-left').getAttribute('data-value'));

      tl.to(section.querySelector('#perc'), {
        strokeDashoffset: val,
        duration: 5
      }, '<')
      tl.to(section.querySelector('#time-left'), {
        onUpdate: function () {
          section.querySelector('#time-left').innerHTML = parseFloat(tl.progress() * score).toFixed(0) + '%';
        },
        duration: 5
      }, '<')
    })

    gsap.utils.toArray('.testi-icon').forEach(testi => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.testimonal-section'
        }
      });

      tl.to(testi, {
        rotateY: 360,
        duration: 4
      })

      tl.to(testi, {
        rotateY: 380,
        duration: 1
      }, '-=0.5')

      tl.to(testi, {
        rotateY: 360,
        duration: 1
      })
    })

    // gsap.utils.toArray('.project-icon').forEach(testi => {
    //   let tl = gsap.timeline({

    //   });

    //   tl.to(testi, {
    //     ease: 'none',
    //     rotate: 720,
    //     duration: 30,
    //     repeat: -1
    //   })
    // })

  }, [])

  const [dropDown, setDropDown] = useState(false);

  const dropDownToggle = () => {
    let el = document.querySelector('.dropdown-btn');
    let spans = el.querySelectorAll('span');

    if (!dropDown) {
      gsap.timeline().to(spans[0], {
        rotate: 45,
        y: 10,
        duration: 0.5
      }).to(spans[1], {
        opacity: '0',
        duration: 0.5
      }, '<')
      .to(spans[2], {
        rotate: -45,
        y: -10,
        duration: 0.5
      }, '<')
      .to('.dropdown-container', {
        maxHeight: document.querySelector('.dropdown-container').scrollHeight,
        duration: 0.5
      }, '<')
      setDropDown(true);
    } else {
      gsap.timeline().to(spans[0], {
        rotate: 0,
        y: 0,
        duration: 0.5
      }).to(spans[1], {
        opacity: '1',
        duration: 0.5
      }, '<')
      .to(spans[2], {
        rotate: 0,
        y: 0,
        duration: 0.5
      }, '<')
      .to('.dropdown-container', {
        maxHeight: '0px',
        duration: 1
      }, '<')
      setDropDown(false);
    }
  }

  return (
    <div className="App">
      <main className='font-oswald max-w-[100vw] overflow-hidden relative'>
        <div className="w-[100vw] h-[100vh] left-0 top-0 fixed z-0" style={{ zIndex: 2 }}>
          <img src={bg} className='h-full w-full object-cover' alt="" />
        </div>
        <section id='starting-screen' /*style={{ backgroundImage: 'url(' + bg + ')', backgroundSize: 'cover', backgroundPosition: 'bottom' }}*/ ref={openingScreen} className='text-zinc-700 min-h-[100vh] flex flex-col relative bg-white z-10'>
          <nav className='w-full py-10 px-4 flex-grow-0'>
            <div className="hidden sm:flex flex-row justify-between">
              <div className="">
              </div>
              <div className="font-poppins font-[450] text-lg bg-zinc-700 py-1 px-10 rounded-md">
                <a href="#starting-screen" className='mx-3 my-2 text-white hover:text-zinc-400'>Home</a>
                <a href="#project-section" className='mx-3 my-2 text-white hover:text-zinc-400'>Projects</a>
                <a href="#skills-section" className='mx-3 my-2 text-white hover:text-zinc-400'>Skills</a>
                <a href="#contact-section" className='mx-3 my-2 text-white hover:text-zinc-400'>Contact</a>
              </div>
            </div>
            <div className="block sm:hidden py-2 w-full bg-zinc-700 rounded rounded-b-none relative">
              <button onClick={() => dropDownToggle()} className="dropdown-btn flex flex-col cursor-pointer px-2">
                <span className='h-1 w-8 m-[3px] bg-white'></span>
                <span className='h-1 w-8 m-[3px] bg-white'></span>
                <span className='h-1 w-8 m-[3px] bg-white'></span>
              </button>
              <div className="dropdown-container absolute top-full bg-white border-b-[5px] border-x-[5px] border-zinc-700 w-full flex flex-col items-center font-roboto rounded rounded-t-none text-lg overflow-hidden" style={{maxHeight: '0px'}}>
                <a href="#starting-screen" className='px-3 py-2 hover:text-zinc-400 border-b-[3px] w-full'>Home</a>
                <a href="#project-section" className='px-3 py-2 hover:text-zinc-400 border-b-[3px] w-full'>Projects</a>
                <a href="#skills-section" className='px-3 py-2 hover:text-zinc-400 border-b-[3px] w-full'>Skills</a>
                <a href="#contact-section" className='px-3 py-2 hover:text-zinc-400 border-b-[3px] w-full'>Contact</a>
              </div>
            </div>
          </nav>
          <div className="font-poppins flex flex-row px-4 sm:px-20 justify-e items-center flex-grow">
            <div className="flex flex-col items-start w-full sm:w-1/2">
              <p className='text-xl sm:text-2xl'><span className='text-3xl sm:text-5xl '>H</span>ello, I'm a <span className='bg-zinc-700 rounded-md text-white px-1'>Full-Stack Developer.</span></p>
              <p className='text-zinc-500 mt-1 ml-1'>Currently working as a full-time Freelancer</p>
              <p className='mt-8 text-left'>
                A <span className='bg-zinc-700 rounded-md text-white px-1'>self-taught</span> Full-stack developer, working in this feild for 3+ years as a full-time freelancer.
                I make meaningful and delightful digital products that create an equilibrium
                between user needs and business goals.
              </p>
              <div className="my-6 flex flex-row flex-wrap">
                <a href="#project-section" className='px-6 transition-colors py-2 rounded mr-4 hover:text-zinc-700 hover:bg-white border-[3px] border-zinc-700 bg-zinc-700 text-white mb-1'>Explore projects</a>
                <a href="#contact-section" className='px-6 transition-colors py-2 rounded text-zinc-700 border-[3px] border-zinc-700 hover:bg-zinc-700 hover:text-white mb-1'>Hire me</a>
              </div>
              <div className="py-20"></div>
            </div>
          </div>
        </section>
        <section className='relative z-10'>
          <div className="py-2 flex flex-col justify-center items-center w-full bg-zinc-800/90 text-zinc-200 font-poppins">
            <div className="flex flex-col sm:flex-row justify-between items-center font-poppins w-full py-5">
              <div className="flex flex-row items-center text-xl flex-grow justify-center">
                <p className='text-4xl flex flex-row items-center'><span className='text-4xl'>50</span>+</p>
                <span className='hidden sm:block border-[1px] border-zinc-500 h-28 mx-4'></span>
                <div className='flex flex-col items-start font-rubik ml-2 sm:m-0'>
                  <p>Projects</p>
                  <p>completed</p>
                </div>
              </div>
              <div className="flex flex-row items-center text-xl flex-grow justify-center my-8 sm:m-0">
                <p className='text-4xl flex flex-row items-center'><span className='text-4xl'>3</span>+</p>
                <span className='hidden sm:block border-[1px] border-zinc-500 h-28 mx-4'></span>
                <div className='flex flex-col items-start font-rubik ml-2 sm:m-0'>
                  <p>Years of</p>
                  <p>experience</p>
                </div>
              </div>
              <div className="flex flex-row items-center text-xl flex-grow justify-center">
                <p className='text-4xl flex flex-row items-center'><span className='text-4xl'>20</span>+</p>
                <span className='hidden sm:block border-[1px] border-zinc-500 h-28 mx-4'></span>
                <div className='flex flex-col items-start font-rubik ml-2 sm:m-0'>
                  <p>Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='project-section' className='pt-10 py-5 font-poppins text-zinc-700 project-section relative z-10 bg-white'>
          <div className='flex flex-row items-center justify-between mx-12'>
            <div className="flex flex-col text-left w-full">
              <p className='text-2xl font-bold px-10 rounded py-2 text-white bg-zinc-700 w-fit'>Latest Projects</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center px-2 sm:px-10 p-10">
            {
              projects.map(project => {
                return <div className="text-left max-w-[400px] p-2 border-[3px] shadow-lg rounded mx-3 m-2">
                  <div className="flex flex-row justify-between">
                    <p className='text-xl bg-zinc-700 text-white p-1 px-4 rounded flex-grow text-center'>{project.name}</p>

                  </div>
                  <div className="rounded-full p-2 mt-5">
                    <img className='rounded-full shadow-lg project-icon border-2' src={project_bg} alt="" />
                  </div>
                  <p className='mx-1 max-h-[250px] overflow-auto border-2 border-zinc-700 p-1 rounded-md'>
                    <span className='text-3xl'>{project.description[0]}</span>{project.description.substring(1)}
                  </p>
                  <div className="flex flex-row flex-wrap items-center mt-2">
                    {
                      project.stacks.map(stack => {
                        return <div className='transition-colors border-[3px] rounded px-5 py-1 border-zinc-700 hover:text-white hover:bg-zinc-700 cursor-pointer m-1 bg-white text-zinc-700'>{stack}</div>
                      })
                    }

                  </div>
                </div>
              })
            }
          </div>
        </section>
        <section className='w-full bg-zinc-800/90 py-24 relative z-10'> </section>
        <section id='testimonal-section' className='font-poppins pt-10 testimonal-section relative z-10 bg-white'>
          <div className='flex flex-row items-center justify-between mx-12'>
            <div className="flex flex-col text-left w-full">
              <p className='text-2xl font-bold px-10 py-2 text-white bg-zinc-700 w-fit rounded whitespace-nowrap'>Client testimonals</p>
              {/* <p className='text-lg px-2 text-zinc-500 my-1'>Cl</p> */}
            </div>
          </div>

          <div className="flex justify-center mx-10 py-10 ">
            <div className="flex flex-row flex-wrap justify-center m-auto max-w-fit">
              {
                testimonals.map(test => {
                  return <div className="flex flex-col justify-start items-center max-w-[300px] min-w-[300px] m-2 border-2 p-2 rounded-lg shadow-lg py-3">
                    <div className="border-[7px] border-t-zinc-700 border-zinc-700 rounded-full shadow-lg">
                      <img src={client_bg} alt="" className='w-[200px] testi-icon rounded-full' />
                    </div>
                    <p className='my-2 font-roboto italic text-zinc-700'>
                      <FontAwesomeIcon icon={faQuoteLeft} className='mx-1 text-2xl' />{test.description}<FontAwesomeIcon icon={faQuoteRight} className='mx-1 text-2xl' />
                    </p>
                    <p className='font-bold text-lg'>
                      {test.name}
                    </p>
                  </div>
                })
              }
            </div>
          </div>
        </section>
        <section className='w-full bg-zinc-800/90 py-24 relative z-10'> </section>
        <section id='skills-section' className='font-poppins pt-10 skills-section relative z-10 bg-white'>
          <div className='flex flex-row items-center justify-between mx-12'>
            <div className="flex flex-col text-left w-full">
              <p className='text-2xl font-bold px-10 py-2 text-white bg-zinc-700 w-fit rounded'>Languages, Frameworks & Skills</p>
              {/* <p className='text-lg px-2 text-zinc-500 my-1'>Cl</p> */}
            </div>
          </div>

          <div className="flex justify-center mx-10 py-10 pb-20">
            <div className="flex flex-row flex-wrap justify-center items-center">
              {
                skills.map(skill => {
                  return <div className="single-skill rounded-full m-2 flex flex-col items-center justify-center relative border-[7px] border-zinc-800 shadow-lg">
                    <svg style={{ rotate: '90deg' }} id="svg" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                      <circle data-value={565.48 - parseFloat(565.48 * (skill.score / 100)).toFixed(2)} style={{ strokeDashoffset: 565.48 }} strokeWidth='2em' id="perc" r="90" cx="100" cy="100" stroke="rgb(39 39 42)" fill="transparent" strokeDasharray="565.48"></circle>
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <p id="timeMode" className='font-oswald font-bold text-2xl text-zinc-700'>{skill.name}</p>
                      <p data-value={skill.score} id="time-left" className='font-rubik mt-1 text-zinc-200 bg-zinc-800 px-2 rounded'>0%</p>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </section>
        <section className='w-full bg-zinc-800/90 py-24 relative z-10'> </section>
        <section id='contact-section' className='font-poppins pt-10 skills-section relative z-10 bg-white'>
          <div className='flex flex-row items-center justify-between mx-12'>
            <div className="flex flex-col text-left w-full">
              <p className='text-2xl font-bold px-10 py-2 text-white bg-zinc-700 w-fit rounded whitespace-nowrap'>Socials & Contact</p>
              {/* <p className='text-lg px-2 text-zinc-500 my-1'>Cl</p> */}
            </div>
          </div>

          <div className="flex justify-center mx-10 py-10">
            <div className="flex flex-col py-10">
              <div className="flex flex-row items-center text-lg sm:text-xl text-zinc-700 my-2 border-[4px] border-zinc-700 p-2 px-6 shdaow-lg rounded-lg">
                <FontAwesomeIcon className='text-3xl' icon={faEnvelope} />
                <div className="flex flex-col justify-start items-center mx-3">
                  <a rel="noreferrer" target='_blank' href='mailto:rsathishikumar3@gmail.com' className='mx-1 hover:underline'>rsathishikumar3@gmail.com</a>
                </div>
              </div>
              <div className="flex flex-row items-center text-xl text-zinc-700 my-2 border-[4px] border-zinc-700 p-2 px-6 shdaow-lg rounded-lg">
                <FontAwesomeIcon className='text-4xl' icon={faLinkedin} />
                <div className="flex flex-col justify-start items-start mx-3">
                  <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/sat-this-h/' className='mx-1 hover:underline'>LinkedIn</a>
                </div>
              </div>
              <div className="flex flex-row items-center text-xl text-zinc-700 my-2 border-[4px] border-zinc-700 p-2 px-6 shdaow-lg rounded-lg">
                <FontAwesomeIcon className='text-4xl' icon={faGithub} />
                <div className="flex flex-col justify-start items-start mx-3">
                  <a rel="noreferrer" target='_blank' href='https://github.com/Sathishr424' className='mx-1 hover:underline'>GitHub</a>
                </div>
              </div>
              <div className="flex flex-row items-center text-xl text-zinc-700 my-2 border-[4px] border-zinc-700 p-2 px-6 shdaow-lg rounded-lg">
                <FontAwesomeIcon className='text-4xl' icon={faSquareUpwork} />
                <div className="flex flex-col justify-start items-start mx-3">
                  <a rel="noreferrer" target='_blank' href='https://www.upwork.com/freelancers/~01b87d2baf21208fc5' className='mx-1 hover:underline'>UpWork</a>
                </div>
              </div>
              <div className="flex flex-row items-center text-xl text-zinc-700 my-2 border-[4px] border-zinc-700 p-2 px-6 shdaow-lg rounded-lg">
                <FontAwesomeIcon className='text-3xl' icon={faAddressCard} />
                <div className="flex flex-col justify-start items-start mx-3">
                  <button className='mx-1 hover:underline text-left'>Chennai, TamilNadu, India</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full bg-zinc-800/90 py-4 relative z-10'>
          <p className='text-white text-xl'>Made with passion <FontAwesomeIcon className='' icon={faHeart} /> </p>
        </section>
      </main>
    </div>
  );
}

export default App;
