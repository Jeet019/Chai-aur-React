import { useState } from "react"

export default function App() {
  const [color,setColor]= useState("olive")
  return (
   <div className="w-full h-screen duratio-200"
   style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick={()=> setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
         style={{backgroundColor:"red"}}>
          Red
        </button>
        <button 
        onClick={()=> setColor("orange")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
         style={{backgroundColor:"orange"}}>
          Orange
        </button>
        <button
        onClick={()=> setColor("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
         style={{backgroundColor:"blue"}}>
          Blue
        </button>
        <button
        onClick={()=> setColor("pink")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
         style={{backgroundColor:"pink"}}>
          Pink
        </button>
        <button
        onClick={()=> setColor("black")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
         style={{backgroundColor:"black"}}>
          Black
        </button>
        <button
        onClick={()=> setColor("yellow")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
         style={{backgroundColor:"yellow"}}>
          Yellow
        </button>
        <button
        onClick={()=> setColor("royalBlue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
         style={{backgroundColor:" RoyalBlue"}}>
           RoyalBlue 
        </button>
        <button
        onClick={()=> setColor("LavenderBlush")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
         style={{backgroundColor:"LavenderBlush"}}>
          LavenderBlush
        </button>
        <button
        onClick={()=> setColor("Tomato")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
         style={{backgroundColor:"Tomato"}}>
          Tomato 
        </button>
        <button
        onClick={()=> setColor("LemonChiffon")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
         style={{backgroundColor:"LemonChiffon"}}>
           LemonChiffon
        </button>
        <button
        onClick={()=> setColor("FireBrick")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
         style={{backgroundColor:"FireBrick"}}>
           FireBrick 
        </button>
        <button
        onClick={()=> setColor("HotPink")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
         style={{backgroundColor:" HotPink"}}>
           HotPink 
        </button>
        
      </div>
    
    </div>
        
   </div>
  )
}