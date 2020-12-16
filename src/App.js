
import {useState} from 'react'
import { Animate } from "react-simple-animate";
import MainMenu from './components/MainMenu'
import AppsMenu from './components/AppsMenu'
import './App.css'
import logo from './react.png'

const App = () => {
  const [page, setPage] = useState(0)
  const [pause, setPause] = useState(true)
  const goToApps = (page) => {
    setPage(page)
    setPause(true)
  }
  let content = <MainMenu  pause={pause} setPause={setPause} goToApps={goToApps}/>
  if(page === 1){
    content = <AppsMenu pause={pause} setPause={setPause} goToApps={goToApps}/>
  }
  return (<div className='app'>
    <div className='container'>
      {content}
      <Animate play duration={10} start={{ opacity: 0}} end={{ opacity: 1}}>
        <img src={logo} className='logo' alt='logo'/>
      </Animate>
    </div>
  </div>)
};
export default App;