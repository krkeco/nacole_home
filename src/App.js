
import {useState} from 'react'
import MainMenu from './components/MainMenu'
import AppsMenu from './components/AppsMenu'
import './App.css'
import logo from './react.png'

const App = () => {
  const [page, setPage] = useState(0)
  const goToApps = (page) => {
    setPage(page)
  }
  let content = <MainMenu goToApps={goToApps}/>
  if(page === 1){
    content = <AppsMenu goToApps={goToApps}/>
  }
  return (<div className='app'>
    <div className='container'>
      {content}
      <img src={logo} className='logo' alt='logo'/>
    </div>
  </div>)
};
export default App;