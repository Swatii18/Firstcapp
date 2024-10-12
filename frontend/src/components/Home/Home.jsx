import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen bg-pink-800">
      <nav className="w-full bg-white p-5 flex justify-between ">
        <div className="p-8 w-1/4 border-pink-400 text-black uppercase font-bold justify-center flex">Logo</div>
        <div className="p-8 w-2/4 border-pink-400 flex justify-between ">
          <div className="text-black uppercase font-bold">About</div>
          <div className="text-black uppercase font-bold">Contact Us</div>
          <div className="text-black uppercase font-bold">Recent activity</div>
        </div>

      </nav>
<div className="w-full flex justify-center items-center mt-4 ">
  <p className="text-4xl font-semibold text-white ">Connect, Chat, Conquer: Where Every Message Matters!</p>
</div>
    </div>
  
  )
}

export default Home