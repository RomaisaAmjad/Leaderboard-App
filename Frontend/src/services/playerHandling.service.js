import API from '../configs/axios';

export async function createPlayer(values, setPlayers, resetForm, setTopPlayers) {
  const token = localStorage.getItem('token');

  try {
    const response = await API.post('/api/leaderboard', values, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setPlayers((prev) => {
      const updated = [...prev, response.data];
      const topThree = [...updated]
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
      setTopPlayers(topThree);

      return updated;
    });

    resetForm();
  } catch (error) {
    console.error('Error creating player:', error.response?.data || error.message);
    alert('Could not create player');
  }
}

export async function deletePlayer(id, setPlayers, setTopPlayers) {
  const token = localStorage.getItem('token');

  try {
    await API.delete(`/api/leaderboard/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setPlayers((prev) => {
      const updated = prev.filter((player) => player.id !== id);

      const topThree = [...updated]
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
      setTopPlayers(topThree);

      return updated;
    });
  } catch (error) {
    console.error('Error deleting player:', error.response?.data || error.message);
    alert('Could not delete player');
  }
}
