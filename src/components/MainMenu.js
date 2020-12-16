
import { Animate, AnimateGroup } from "react-simple-animate";
import {useState} from 'react'
import Card from './Card'
import '../App.css'

const MainMenu = ({goToApps}) => {

  const [pause, setPause] = useState(true)
  const togglePause = (href) => {
    setPause(!pause);
    window.location = href;
  }
  const goAppGo = () =>{
    setPause(!pause);
    setTimeout(()=>goToApps(1),1000);
  }
    return (
      <AnimateGroup play={pause}>
      <Animate start={{ opacity: 0,transform: 'translateY(-400px)' }} end={{ opacity: 1,transform: 'translateY(0)' }} sequenceIndex={0}>
        <Card onClick={()=>togglePause()} name="KC" x={'20vw'} y={'25vh'}/>
      </Animate>
      <Animate start={{ opacity: 0,transform: 'translateY(-400px)' }} end={{ opacity: 1,transform: 'translateY(0)' }} sequenceIndex={1}>
      <Card onClick={()=>togglePause('https://hannah.na-cole.com')} name="Hannah" x={'10vw'} y={'65vh'}/>
      </Animate>
      <Animate start={{ opacity: 0,transform: 'translateY(-400px)' }} end={{ opacity: 1,transform: 'translateY(0)' }} sequenceIndex={2}>
      <Card onClick={goAppGo} name="Apps"  x={'20vw'} y={'40vh'}/>
      </Animate>
    </AnimateGroup>
    
    );
}
export default MainMenu;