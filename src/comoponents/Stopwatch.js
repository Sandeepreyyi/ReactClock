import React, { useState } from 'react'
import './compo.css'
import Btn from './Btn';
const Stopwatch = () => {

  const [time,setTime]=useState({ms:0,s:0,m:0,h:0});
  const [interv,setInterv]=useState();
  const [status,setStatus]=useState(0);
  var updateMs=time.ms,updateS=time.s,updateM=time.m,updateH=time.h;
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
    if(updateS===60)
    {
      updateM++;
      updateS=0;
    }
    if(updateMs===100)
    {
      updateS++;
      updateMs=0;
    }
    updateMs++;
    return setTime({ms:updateMs,s:updateS,m:updateM,h:updateH})
  }
const Reset=(()=>
{
  clearInterval(interv);
  setTime({ms:0,s:0,m:0,h:0})
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
        </div><div>
        <Btn status={status} start={start} Stop={Stop} Reset={Reset} Resume={Resume}/>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Stopwatch
