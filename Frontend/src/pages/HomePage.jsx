import React from 'react'
import { useState, useEffect } from 'react';
import AddPlayers from '../components/AddPlayers';
import Navbar from '../components/Navbar'
import LeaderBoard from '../components/LearderBoard' 
import PlayersList from '../components/PlayersList'
import Footer from '../components/Footer'
import API from '../configs/axios';

export default function HomePage() {
  const [players, setPlayers] = useState([]);
  const [topPlayers, setTopPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get('/api/leaderboard');
      setPlayers(res.data);
      setTopPlayers(res.data.slice(0, 3));
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-300 min-h-screen">
      <Navbar />
      <LeaderBoard topPlayers={topPlayers} />
      <AddPlayers
        setPlayers={setPlayers}
        setTopPlayers={setTopPlayers}
      />
      <PlayersList
        players={players}
        setPlayers={setPlayers}
        setTopPlayers={setTopPlayers}
      />
      <Footer />
    </div>
  );
}

