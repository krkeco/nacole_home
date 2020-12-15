
import { Animate, AnimateGroup } from "react-simple-animate";
import Card from './components/Card'
import './App.css'
import logo from './logo.svg'

const App = () => (
  <div className='app'>
    <div className='container'>
      <AnimateGroup play>
        <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
          <Card name="KC" x={'20vw'} y={'25vh'}/>
        </Animate>
        <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={1}>
        <Card name="Hannah" href='https://hannah.na-cole.com' x={'40vw'} y={'65vh'}/>
        </Animate>
        <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={2}>
        <Card name="Callings" href='http://tco.na-cole.com' x={'70vw'} y={'40vh'}/>
        </Animate>
      </AnimateGroup>
      {/* <img src={logo} className='logo' alt='logo'/> */}
    </div>
  </div>
);
export default App;