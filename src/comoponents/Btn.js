import React from 'react'
import './compo.css';
const Btn = (props) => {
  return (
<div>
    {(props.status===0)?
    <button className="stp_container-button stp_container-button-green" onClick={props.start}>Start</button>:""
    }
    {(props.status===1)?
    <div>
    <button className="stp_container-button stp_container-button-red" onClick={props.Stop}>Stop</button>
    <button className="stp_container-button stp_container-button-blue" onClick={props.Reset}>Reset</button>
       </div>:''
}
{(props.status===2)?
    <div>
    <button className="stp_container-button stp_container-button-yellow" onClick={props.Resume}>Resume</button>
    <button className="stp_container-button stp_container-button-blue" onClick={props.Reset}>Reset</button>
       </div>:''
}

</div>
  );
}
export default Btn;
