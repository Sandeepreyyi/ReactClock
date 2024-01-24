import React,{useState} from 'react'
import './compo.css'
import Btn from './Btn';
const Timer = () => {

  const [time,setTime]=useState({ms:0,s:0,m:0,h:0});
  const [interv,setInterv]=useState();
  const [status,setStatus]=useState(0);
  var [sec,setdata]=useState(0);
  var [min,setMdata]=useState(0);
  var [hr,setHdata]=useState(0);
  function getSdata(val)
  {
    sec=setdata(val.target.value);

  }
  function getMdata(val)
  {
    min=setMdata(val.target.value);

  }
  function getHdata(val)
  {
    hr=setHdata(val.target.value);

  }
  var updateMs=time.ms,updateS=sec,updateM=min,updateH=hr;

  const start=()=>{
    run();
    setInterv(setInterval(run,10));

  }
  const run=()=>{

    setStatus(1);
    if(updateM===60)
    {
      updateH++;
      updateM=0;
    }
    if(updateS===0 && updateM>0)
    {
      updateM--;
      updateS=60;
    }
    if(updateMs===0 && updateS>0 )
    {
     
        updateS--;
        updateMs=100;
    
     
    }
    if(updateMs>0)
    {
    updateMs--;
    }
    return setTime({ms:updateMs,s:updateS,m:updateM,h:updateH})
  }
const Reset=(()=>
{
  clearInterval(interv);
  setTime({ms:0,s:sec,m:min,h:hr})
  setStatus(0)
})
const Stop=(()=>
{
  clearInterval(interv);
  setStatus(2);
})
const Resume=(()=>
{
  start();
})


  return (
    <div className='stp'>
      <div className='container'>
      <div className='stp_container'>
        <div className='time_disply'>
        <span>{time.h<10 ? "0"+time.h:time.h}</span>&nbsp;:&nbsp;<span>{time.m<10 ? "0"+time.m:time.m}</span>&nbsp;:&nbsp;<span>{time.s<10?"0"+time.s:time.s}</span>&nbsp;:&nbsp;<span>{time.ms<10?"0"+time.ms:time.ms}</span>&nbsp;
        </div>
        <div className='inputs'>
        <span className='inp'><input type="number" placeholder='hours' onChange={getHdata}/></span>
        <span className='inp'><input type="number" placeholder='min' onChange={getMdata}/></span>
      
        <span className='inp'><input type="number" placeholder='sec' onChange={getSdata}/></span>
        </div>
        <div>
        <Btn status={status} start={start} Stop={Stop} Reset={Reset} Resume={Resume}/>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Timer