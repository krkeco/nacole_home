
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
      <AnimateGroup play={pause}>
      <Animate start={{ transform: 'scale(0)',margin:'10vw',marginTop:'5vw' }} end={{ opacity: 1,transform: 'scale(1)',margin:0 }} sequenceIndex={0}>
        <Card onClick={()=>togglePause('http://tco.na-cole.com')} name="Callings" x={'20vw'} y={'25vh'}/>
      </Animate>
      <Animate start={{ transform: 'scale(0)',margin:'5vw',marginTop:'15vw' }} end={{ opacity: 1,transform: 'scale(1)',margin:0 }} sequenceIndex={1}>
      <Card onClick={()=>togglePause('http://krkeco-jeopardy.s3-website-us-west-1.amazonaws.com')} name="Jeopardy" x={'10vw'} y={'65vh'}/>
      </Animate>
      <Animate start={{ transform: 'scale(0)',margin:'10vw',marginTop:'8vw' }} end={{ opacity: 1,transform: 'scale(1)',margin:0 }} sequenceIndex={2}>
      <Card onClick={goAppGo} name="OtherStuff" x={'20vw'} y={'40vh'}/>
      </Animate>
    </AnimateGroup>
    
    );
}
export default MainMenu;