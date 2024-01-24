// import logo from './logo.svg';
// import { ReactDOM } from 'react-dom';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Clock from "./comoponents/Clock";
import Layout from './comoponents/Layout';
import Timer from './comoponents/Timer';
import Stopwatch from './comoponents/Stopwatch';
// import Alarm from './comoponents/Alarm';
function App() {
  return (
    <div className="App">
      <h1>React-Clock</h1>
      <BrowserRouter>
      <Layout></Layout>
      <div className='routing'>
      <Routes>
       
          <Route index element={<Clock></Clock>}></Route>
          <Route path='/timer'element={<Timer/>}></Route>
          <Route path='/stopwatch' element={<Stopwatch/>}></Route>
          {/* <Route path='/alarm' element={<Alarm/>}></Route> */}
          
      
      </Routes>
      </div>
      </BrowserRouter>
      {/* <Layout></Layout> */}
    </div>
  );
}

export default App;
