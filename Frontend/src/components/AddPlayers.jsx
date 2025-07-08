import React, { useState } from 'react';
import { validatePlayerInput } from '../validators/playerInput.validator';
import { createPlayer } from '../services/playerHandling.service';

const AddPlayers = ({ setPlayers, setTopPlayers }) => {
  const [formData, setFormData] = useState({ name: '', score: 0 });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === 'score' ? parseInt(e.target.value || 0) : e.target.value,
    });
  };

  const handleAddPlayer = async (e) => {
    e.preventDefault();

    const { error: validationError } = validatePlayerInput(formData);

    if (validationError) {
      setError(validationError.message);
      return;
    }

    try {
      await createPlayer(formData,setPlayers,() => setFormData({ name: '', score: 0 }),setTopPlayers);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to add player. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleAddPlayer}
      className="space-y-4 max-w-md mx-auto p-4 bg-white rounded shadow"
    >
      <h2 className="text-xl font-semibold text-center">Add New Player</h2>

      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label>Score:</label>
        <input
          type="number"
          name="score"
          value={formData.score}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      {error && <p className="text-red-700 text-sm">{error}</p>}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Player
      </button>
    </form>
  );
};

export default AddPlayers;
