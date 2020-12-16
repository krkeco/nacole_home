
import { Animate, AnimateGroup } from "react-simple-animate";
import {useState} from 'react'
import Card from './Card'
import '../App.css'

const MainMenu = ({goToApps, pause, setPause}) => {

  const togglePause = (href) => {
    setPause(!pause);
    window.location = href;
  }
  const goAppGo = () =>{
    setPause(!pause);
    setTimeout(()=>goToApps(0),1000);
  }
    return (
      <AnimateGroup >
      <Animate play={pause} duration={0.2} start={{ transform: 'scale(0)',marginLeft:'10vw',marginTop:'5vw' }} end={{ opacity: 1,transform: 'scale(1)',margin:0 }} delay={0}>
        <Card onClick={()=>togglePause('http://tco.na-cole.com')} name="Callings" x={'23vw'} y={'20vh'}/>
      </Animate>
      <Animate play={pause} duration={0.2} start={{ transform: 'scale(0)',marginTop:'5vw' }} end={{ opacity: 1,transform: 'scale(1)',margin:0 }} delay={.15}>
      <Card onClick={()=>togglePause('http://krkeco-jeopardy.s3-website-us-west-1.amazonaws.com')} name="Jeopardy" x={'0'} y={'55vh'}/>
      </Animate>
      <Animate play={pause} duration={0.2} start={{ transform: 'scale(0)',marginLeft:'5vw',marginTop:'10vw' }} end={{ opacity: 1,transform: 'scale(1)',margin:0 }} delay={.3}>
      <Card onClick={()=>togglePause('http://krkeco-jeopardy.s3-website-us-west-1.amazonaws.com')} name="Jeopardy" x={'5vw'} y={'65vh'}/>
      </Animate>
      <Animate play={pause} duration={0.2} start={{ transform: 'scale(0)',marginLeft:'8vw',marginTop:'5vw' }} end={{ opacity: 1,transform: 'scale(1)',margin:0 }} delay={.45}>
      <Card onClick={goAppGo} small name="Return..." x={'10vw'} y={'55vh'}/>
      </Animate>
    </AnimateGroup>
    
    );
}
export default MainMenu;