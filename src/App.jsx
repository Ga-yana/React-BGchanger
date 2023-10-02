import { useState } from "react"

function Choice({background, textColor, showText, colorClick}){
  
  return (
    <p className="px-3 py-1.5 rounded-2xl shadow-md text-white cursor-pointer" onClick={colorClick}
        style={{
          backgroundColor:background,
          color: textColor
        }}>{showText}</p>
  )
}

function App() {
  const [color, setColor]= useState("olive")
  
  function handleClick(thisColor){
    setColor(thisColor)
  }

  return (
    <div className="w-full h-screen duration-200"
    style={{
      backgroundColor: color
    }}
    >
      <div className="p-2 bg-white rounded-xl flex gap-6 justify-center mx-10">
        <Choice background={"#ff0000"} textColor={"#ffffff"} showText="Red" colorClick={()=>handleClick("#ff0000")}/>
        <Choice background={"#6aa84f"} textColor={"#ffffff"} showText="Green" colorClick={()=>handleClick("#6aa84f")}/>
        <Choice background={"#9fc5e8"} textColor={"#ffffff"} showText="Blue" colorClick={()=>handleClick("#9fc5e8")}/>
        <Choice background={"#849c09"} textColor={"#ffffff"} showText="Olive" colorClick={()=>handleClick("#849c09")}/>
        <Choice background={"#999999"} textColor={"#ffffff"} showText="Gray" colorClick={()=>handleClick("#999999")}/>
        <Choice background={"#ffe599"} textColor={"#ffffff"} showText="Yellow" colorClick={()=>handleClick("#ffe599")}/>
        <Choice background={"#ea9999"} textColor={"#ffffff"} showText="Pink" colorClick={()=>handleClick("#ea9999")}/>
        <Choice background={"#a64d79"} textColor={"#ffffff"} showText="Purple" colorClick={()=>handleClick("#a64d79")}/>
        <Choice background={"#b4a7d6"} textColor={"#000000"} showText="Lavender" colorClick={()=>handleClick("#b4a7d6")}/>
        <Choice background={"#ffffff"} textColor={"#000000"} showText="White" colorClick={()=>handleClick("#ffffff")}/>
        <Choice background={"#000000"} textColor={"#ffffff"} showText="Black" colorClick={()=>handleClick("#000000")}/>
      </div>
    </div>
  )
}

export default App
