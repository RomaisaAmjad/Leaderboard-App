import React from 'react'
import Navbar from '../components/Navbar'
import LeaderBoard from '../components/LearderBoard' 
import PlayersList from '../components/PlayersList'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className='bg-gray-300 min-h-screen'>
       <Navbar />
       <LeaderBoard />
       <PlayersList />
       <Footer />
    </div>
  )
}


