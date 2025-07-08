export default function LeaderBoard({ topPlayers }) {
  return (
    <div className="p-4 bg-white rounded shadow max-w-md mx-auto my-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">🏆 Top 3 Players</h2>
      <ul className="space-y-2">
        {topPlayers.map((player, index) => (
          <li key={player.id} className="flex justify-between font-medium">
            <span>
              #{index + 1} {player.name}
            </span>
            <span>{player.score} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
