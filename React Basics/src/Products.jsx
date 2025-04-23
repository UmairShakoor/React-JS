import React, { useState } from 'react'

function Products({age,data}) {
  let [a,b] = useState(true);
  return (
    <div className="w-full h-60 text-white bg-black p-5">
      <h1>{age}</h1>
      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
      <h4 className={`${a === false ? "bg-white text-black" : "bg-white"}`}>{a === false ? "hello" : "hey"}</h4>
      <button onClick={()=>{b(!a)}}>Change</button>
    </div>
  )
}

export default Products