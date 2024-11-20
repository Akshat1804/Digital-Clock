//CHATGPT CODE

// import React, { useState, useEffect } from 'react';

// function DigitalClock() {
//   // State to store the current time
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   // Effect to update time every second
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     // Cleanup function to clear the interval when the component unmounts
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array ensures this effect runs only once when the component mounts

//   return (
//     <div style={{ textAlign: 'center', fontSize: '50px', marginTop: '50px' }}>
//       <h1>{time}</h1>
//     </div>
//   );
// }

// export default DigitalClock;




// OWN CODE



import { RiArrowDropDownLine } from '@remixicon/react';
import React, { useState } from 'react';

const DigitalClock = () => {

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  const [timeZone, setTimeZone] = useState(new Date().toLocaleDateString());
  setInterval(() => {
    setTimeZone(new Date().toLocaleDateString());
  }, 1000);
  
 


  return (
    <div className=' h-screen w-full mx-auto  rounded bg-orange-50'>
      <nav className='flex items-center justify-space-between w-full h-[10%] bg-red-100'>
        <h1 className='w-[50%] ml-6 text-2xl font-medium cursor-default '>Time Zone</h1>
        <h1 className=' w-[90%] text-end mr-6 text-xl font-medium cursor-pointer '>INDIA</h1>
        <RiArrowDropDownLine className=' text-end mr-14 text-2xl font-medium cursor-pointer ' />
      </nav>
      <div className='w-full h-[90%] flex-col justify-center items-center '>
      <h1 className='text-slate-900 text-7xl font-bold text-center pt-[15%] cursor-default'>{time}</h1>
      <h1 className='text-slate-600 font-bold text-center pt-[20px] underline cursor-default'>{timeZone}</h1>
      </div>
    </div>
  );
}

export default DigitalClock;
