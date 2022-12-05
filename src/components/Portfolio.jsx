import React from "react";
import spotify from '../assets/portfolio/spotify.png'
import holiday from '../assets/portfolio/holiday.png'
import quiz from '../assets/portfolio/quiz.png'
import team from '../assets/portfolio/team.png'
import netflix from '../assets/portfolio/netflix.png'
import port from '../assets/portfolio/port.png'


const Portfolio = () => {

 

const portfolios = [
  {
    id:1,
    src:netflix,
    title: 'Netflix Clone',
    link:'https://github.com/HarryLumb/Crudflix-AdvancedJS'
    
  },
  {
    id:2,
    src:holiday,
    title:'Travel Landing Page',
    link:'https://github.com/HarryLumb/Bootstrap-Holiday-Page-'
  },
  {
    id:3,
    src:team,
    title:'Random Team Generator',
    link:'https://github.com/HarryLumb/M2-Solo-project-Team-Generator'
  },
  {
    id:4,
    src:quiz,
    title:'Functioning Quiz',
    link:'https://github.com/HarryLumb/Quiz'
  },
  {
    id:5,
    src:port,
    title:'Vanilla JS Portfolio',
    link:'https://github.com/HarryLumb/M1-D5-PORTFOLIO'
  },
  {
    id:6,
    src: spotify,
    title:'Spotify Clone',
    link:'https://github.com/HarryLumb/Spotify-Clone/tree/main/BUILD-WEEK-2'
  }
  
]

  
  return (
  
  <div name="Portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white justify-center ">

<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full border-solid border-gray">
  <div className="pb-8">
    <p className="text-4xl font-bold inline border-b-4 border-gray-500"> Portfolio </p>
    <p className="py-6">Here are some of my projects..</p>
  </div>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

{
  portfolios.map(({id, src, title, link}) =>{
    return (
      <div>
      <div className="text-center font-bold border-solid ">{title}</div>
    <div  key={id} className="shadow-md shadow-gray-600 rounded-lg ">
      <img  className="rounded-t-md duration-200 hover:scale-105 h-40 w-100 object-fill  " src={src} alt="" />
      
      <div className="flex items-center justify-center">
        {/* <button className="w-1/2 px-4 py-2 m-1 duration-200 hover:scale-105 border-solid border-2 border-blue-300 rounded-md">Demo</button> */}
        
        <button  className="w-full px-4 py-2 m-1 duration-200 hover:scale-105 border-solid border-2 border-blue-300 rounded-md"> <a href={link}> Code</a></button>
        
      </div>
    </div>
    </div>
    
      
    )
  })
}
</div>
</div>

  </div>
  )
};

export default Portfolio;
