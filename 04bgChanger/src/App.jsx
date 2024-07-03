import { useState } from "react"

function App() {
  const [color, setColor] = useState("#74c69d")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg rounded-3xl px-3 py-2" style={{backgroundColor:"#d8f3dc"}}>
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500">Red</button>
          <button onClick={() => setColor("gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'Gray'}}>Gray</button>
          <button onClick={() => setColor("#bde0fe")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-400">Blue</button>
          <button onClick={() => setColor("#06d6a0")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-300">Green</button>
          <button onClick={() => setColor("violet")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-violet-400">Violet</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-300">Pink</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-400">Purple</button>
          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white">White</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
