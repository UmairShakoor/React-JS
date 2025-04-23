import React, { useState } from 'react';
import Products from "./Products";

function App() {
  var [a,b] = useState(69);
  
 return (
    // <div className="text-3xl font-bold underline p-5">
    //   Sigma
      <Products age="15" data={{name:"Umair",age:"15"}}/>
    // </div>

    // <div className='w-full h-screen bg-black text-white p-5'>
    //   <h1>{a}</h1>
    //   <button onClick={()=>b(a+1)} className='bg-white w-20 text-black m-2 p-1 rounded-[10px]'>Click</button>
    // </div>
 )
}

export default App;