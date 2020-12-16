
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
    setTimeout(()=>goToApps(1),800);
  }
    return (
      <AnimateGroup play={pause}>
      <Animate duration={0.2} start={{ opacity: 0,transform: 'translateY(-400px)' }} end={{ opacity: 1,transform: 'translateY(0)' }} sequenceIndex={0}>
        <Card bgColor="#2dd" onClick={()=>togglePause()} name="KC" x={'20vw'} y={'25vh'}/>
      </Animate>
      <Animate duration={0.2} start={{ opacity: 0,transform: 'translateY(-400px)' }} end={{ opacity: 1,transform: 'translateY(0)' }} sequenceIndex={1}>
      <Card bgColor="#927" onClick={()=>togglePause('https://hannah.na-cole.com')} name="Hannah" x={'10vw'} y={'65vh'}/>
      </Animate>
      <Animate duration={0.2} start={{ opacity: 0,transform: 'translateY(-400px)' }} end={{ opacity: 1,transform: 'translateY(0)' }} sequenceIndex={2}>
      <Card bgColor="#dd2" onClick={goAppGo} name="Apps"  x={'20vw'} y={'40vh'}/>
      </Animate>
    </AnimateGroup>
    
    );
}
export default MainMenu;