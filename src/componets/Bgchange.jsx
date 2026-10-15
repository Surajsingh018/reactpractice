import { useState } from "react"

const Bgchange = () => {
  const [color, setColor] = useState('white')
  const handleBgChange = (newColor) => {
    setColor(newColor);
  }
  return (
    <div className=" h-screen gap-2" style={{ backgroundColor: color }}>
     <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={() => handleBgChange('red')}>Red</button>
      <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={() => handleBgChange('green')}>Green</button>
       <button className="bg-yellow-500 text-white py-2 px-4 rounded" onClick={() => handleBgChange('yellow')}>Yellow</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => handleBgChange('blue')}>Blue</button>
    </div>
  )
}

export default Bgchange
