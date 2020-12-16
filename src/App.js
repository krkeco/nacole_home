
import {useState} from 'react'
import { Animate } from "react-simple-animate";
import MainMenu from './components/MainMenu'
import AppsMenu from './components/AppsMenu'
import './App.css'
import logo from './react.png'

const {width, height} = window.screen

const App = () => {
  const [page, setPage] = useState(0)
  const [pause, setPause] = useState(true)
  const goToApps = (page) => {
    setPage(page)
    setPause(true)
  }
  const mobile = height > width ? true : false;

  let content = <MainMenu mobile={mobile} pause={pause} setPause={setPause} goToApps={goToApps}/>
  if(page === 1){
    content = <AppsMenu mobile={mobile} pause={pause} setPause={setPause} goToApps={goToApps}/>
  }
  return (<div className='app'>
    <div className='container'>
      {content}
    </div>

    <img src={logo} className='logo' alt='logo'/>
  </div>)
};
export default App;