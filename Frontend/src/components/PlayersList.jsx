import React from "react";
import { deletePlayer } from "../services/playerHandling.service";

export default function PlayersList({ players, setPlayers, setTopPlayers }) {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this player?")) {
      deletePlayer(id, setPlayers, setTopPlayers);
    }
  };

  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold mt-6">Players List</h2>
      <ul className="mt-4 space-y-2">
        {players.map((player) => (
          <li
            key={player.id}
            className="bg-gray-100 px-4 py-2 rounded shadow-md flex justify-between items-center"
          >
            <span>
              {player.name} - {player.score}
            </span>
            <button
              onClick={() => handleDelete(player.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
