import { letters } from "../data";
import type { GuessedLetter } from "../types";

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
	<div
		className="flex gap-2 flex-wrap justify-center w-xl"
		role="group"
		aria-label="Keyboard to guess the word"
	>
		{letters.map((item) => {
			const isCorrectLetter = word.some(
				(letterObj) =>
					letterObj.letter.toUpperCase() ===
						item.letter.toUpperCase() && letterObj.isGuessed
			);

			const isInKeysPressed =
				!isCorrectLetter && keysPressed.includes(item.letter);

			return (
				<button
					key={item.id}
					className={`flex justify-center items-center rounded font-bold w-12 h-12 text-2xl border-2 border-[#D7D7D7] ${
						isCorrectLetter
							? "bg-[#10A95B] cursor-not-allowed"
							: isInKeysPressed
							? "bg-[#EC5D49] cursor-not-allowed"
							: "bg-[#FCBA29]"
					}`}
					onClick={() => handleKey({ letter: item.letter })}
					disabled={isGameEnded || isInKeysPressed}
					aria-label={`Press this key to guess if the key ${
						item.letter
					} is one of the letters of the word to guess. Currently is ${
						isCorrectLetter || isInKeysPressed
							? "pressed"
							: "not pressed"
					}`}
					aria-pressed={isCorrectLetter || isInKeysPressed}
				>
					{item.letter}
				</button>
			);
		})}
	</div>
);

export default BoardKeys;
