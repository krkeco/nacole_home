
import { Animate, AnimateGroup } from "react-simple-animate";
import {useState} from 'react'
import Card from './Card'
import '../App.css'

const MainMenu = ({goToApps, pause, setPause, mobile}) => {

  const togglePause = (href) => {
    setPause(!pause);
    window.location = href;
  }
  const goAppGo = () =>{
    setPause(!pause);
    setTimeout(()=>{
        goToApps(0)
    },1000);
  }

  let coord = [
    18,2,15,5
  ]
  if(mobile === true){
    coord = [
      0,0,0,0
    ]
  }
    return (
      <AnimateGroup >
      <Animate play={pause} duration={0.2} start={{ transform: 'scale(0)',marginLeft:'10vw',marginTop:'5vh' }} end={{ opacity: 1,transform: 'scale(1)',margin:0 }} delay={0}>
        <Card
        bgColor="#bb6"
        onClick={()=>togglePause('http://tco.na-cole.com')} 
        name="Callings" 
        x={`${coord[0]}vw`}
        y={'20vh'}/>
      </Animate>
      <Animate play={pause} duration={0.2} start={{ transform: 'scale(0)',marginTop:'5vh' }} end={{ opacity: 1,transform: 'scale(1)',margin:0 }} delay={.15}>
      <Card
        bgColor="#bb6"
        onClick={()=>togglePause('http://krkeco-jeopardy.s3-website-us-west-1.amazonaws.com')} 
        name="Jeopardy" 
        x={`${coord[1]}vw`}
        y={'55vh'}/>
      </Animate>
      <Animate play={pause} duration={0.2} start={{ transform: 'scale(0)',marginLeft:'5vw',marginTop:'10vh' }} end={{ opacity: 1,transform: 'scale(1)',margin:0 }} delay={.3}>
      <Card
        bgColor="#bb6"
        onClick={goAppGo} 
        name="Hmmm..." 
        x={`${coord[2]}vw`}
        y={'65vh'}/>
      </Animate>
      <Animate play={pause} duration={0.2} start={{ transform: 'scale(0)',marginLeft:'8vw',marginTop:'5vh' }} end={{ opacity: 1,transform: 'scale(1)',margin:0 }} delay={.45}>
      <Card
        bgColor="#bb6"
        onClick={goAppGo}
        small name="Return..." 
        x={`${coord[3]}vw`}
        y={'55vh'}/>
      </Animate>
    </AnimateGroup>
    
    );
}
export default MainMenu;