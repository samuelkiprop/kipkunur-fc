import Goal_Keeper from "../assets/images/goalnet.png";
import Defender from "../assets/images/defender.png";
import Midfielder from "../assets/images/midfielder.png";
import Striker from "../assets/images/striker.png";

interface PlayersProps {
  players: Players;
}

interface Player {
  first_name: string;
  last_name: string;
  sir_name: string;
  position: string;
}

interface Players {
  Defenders: Player[];
  Goal_Keepers: Player[];
  Midfilders: Player[];
  Strikers: Player[];
}

const positionImages: { [key: string]: string } = {
  Defenders: Defender,
  Goal_Keepers: Goal_Keeper,
  Midfilders: Midfielder,
  Strikers: Striker,
};

export const Players: React.FC<PlayersProps> = ({ players }) => {
  return (
    <section className="bg-yellow p-10 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(players).map(([position, players]) => (
          <div
            key={position}
            className="flex flex-col items-center bg-primary p-4 rounded-lg"
          >
            <img src={positionImages[position]} alt={`${position} icon`} className="w-16 h-16" />
            <h2 className="text-lg font-bold mb-2 text-center">{position}</h2>
            <ul className="">
              {players.map((player: Player) => (
                <li key={`${player.first_name}-${player.last_name}`}>
                  {player.first_name} {player.last_name} {player.sir_name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Players;
