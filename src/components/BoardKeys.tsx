import { letters } from "../data";

type GuessedLetter = {
	id: string;
	letter: string;
	isGuessed: boolean;
};

const BoardKeys = ({
	word,
	keysPressed,
	isGameEnded,
	handleKey,
}: {
	word: GuessedLetter[];
	keysPressed: string[];
	isGameEnded: boolean;
	handleKey: ({ letter }: { letter: string }) => void;
}) => (
	<div className="flex gap-2 flex-wrap justify-center w-xl">
		{letters.map((item) => {
			const isCorrectLetter = word.some(
				(letterObj) =>
					letterObj.letter.toUpperCase() ===
						item.letter.toUpperCase() && letterObj.isGuessed
			);
			return (
				<button
					key={item.id}
					className={`flex justify-center items-center rounded font-bold w-12 h-12 text-2xl border-2 border-[#D7D7D7] ${
						isCorrectLetter
							? "bg-[#10A95B] cursor-not-allowed"
							: keysPressed.includes(item.letter)
							? "bg-[#EC5D49] cursor-not-allowed"
							: "bg-[#FCBA29]"
					}`}
					onClick={() => handleKey({ letter: item.letter })}
					disabled={isGameEnded}
				>
					{item.letter}
				</button>
			);
		})}
	</div>
);

export default BoardKeys;
