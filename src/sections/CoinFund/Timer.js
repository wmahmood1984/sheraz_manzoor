import React, { useEffect,useState } from 'react'

export default function Timer(props) {
    const [seconds, setSeconds] = useState(60);
    const stakeTime = props.time;
    var currentTimeinSeconds = new Date().getTime() / 1000
    var differenceTimeinSeconds = Math.trunc(stakeTime - currentTimeinSeconds)
  
    var DaysRemaining = Math.trunc((differenceTimeinSeconds /60 /60/24))
    var HoursRemaining = Math.trunc((differenceTimeinSeconds /60 /60)-(DaysRemaining*24))
    var MinutesRemaining = Math.trunc((differenceTimeinSeconds /60 )-(DaysRemaining*24*60)-(HoursRemaining*60))
    var SecondsRemaining = Math.trunc((differenceTimeinSeconds )-(DaysRemaining*24*60*60)-(HoursRemaining*60*60)-(MinutesRemaining*60))
    
   

    useEffect(() => {
        let interval = null;
        
          interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
          }, 1000);

        return () => clearInterval(interval);
      }, [ seconds]);
    
    return (
        
            <div style={{fontSize:"60px", display:"flex",width:"800px"}}>
            {stakeTime !=0 ? <div style={{flex:"1", fontSize:"30px"}}>
            <span>{DaysRemaining} Days     </span>
            <span>{HoursRemaining} Hours     </span>
            <span>{MinutesRemaining} Minutes     </span>
            <span>{SecondsRemaining} Seconds    </span>
            </div>:
            <div></div>
            }
        </div>
        
    )
}
