import React,{useState,useEffect} from 'react';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {

  const heroData=[
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indugle",text2:"your passions"},
    {text1:"Give in to",text2:" your passions"},

  ]


  const [heroCount,setHeroCount]=useState(0);
  const [playStatus,setPlayStatus]=useState(false);

  
  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{
        return count === 2? 0 : count+1;
      })
    },5000)
  })

  return (
    <div className="App">
     <Background  heroCount={heroCount} playStatus={playStatus}/>
     <Navbar/>
     <Hero setPlayStatus={setPlayStatus} heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus}/>
    </div>
  );
}

export default App;
