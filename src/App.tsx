import { useEffect, useState, useRef, useCallback } from "react";
import { programmingData } from "./data";
import Confetti from "react-confetti";
import ProgrammingBlocks from "./components/ProgrammingBlocks";
import GuessLetters from "./components/GuessLetters";
import BoardKeys from "./components/BoardKeys";
import FarewellBanner from "./components/FarewellBanner";
import NewGameButton from "./components/NewGameButton";
import type { GuessedLetter } from "./types";

const getRandom8LetterWord = async () => {
	const placeholderWord = "abcdefgh";

	const res = await fetch(
		"https://api.datamuse.com/words?sp=????????&max=1000"
	);
	if (!res.ok) {
		console.error("Couldn't get the word!");
		return placeholderWord;
	}

	const data = await res.json();

	return (
		data[Math.floor(Math.random() * data.length)]?.word || placeholderWord
	);
};

function App() {
	const [word, setWord] = useState<GuessedLetter[]>([]);
	const [keysPressed, setKeysPressed] = useState<string[]>([]);
	const [lives, setLives] = useState(8);
	const newGameButton = useRef<HTMLButtonElement>(null);

	const isGameWon =
		word.length > 0 && word.every((letter) => letter.isGuessed);

	const isGameLost = lives <= 0;

	const isGameEnded = isGameWon || isGameLost;

	const fetchWord = async () => {
		try {
			const rand = await getRandom8LetterWord();
			console.log("Random word:", rand);
			const randomWord = rand.split("").map((letter: string) => ({
				id: crypto.randomUUID(),
				letter: letter,
				isGuessed: false,
			}));
			setWord(randomWord);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		if (isGameEnded && newGameButton.current) {
			newGameButton.current.focus();
		}
	}, [isGameEnded]);

	useEffect(() => {
		fetchWord();
	}, []);

	const handleKey = useCallback(
		({ letter }: { letter: string }) => {
			const isCorrectLetter = word.some(
				(letterObj) =>
					letterObj.letter.toUpperCase() === letter.toUpperCase()
			);
			setLives((prevLives) =>
				!isCorrectLetter ? prevLives - 1 : prevLives
			);
			setKeysPressed((prevKeysPressed) => [...prevKeysPressed, letter]);
			setWord((prevWord) =>
				prevWord.map((letterObj) =>
					letterObj.letter.toUpperCase() === letter.toUpperCase()
						? { ...letterObj, isGuessed: true }
						: letterObj
				)
			);
		},
		[word]
	);

	const farewell = programmingData
		.filter((_, index) => 8 - lives > index)
		.map((item) => item.name);

	function handleNewGame() {
		setLives(8);
		setKeysPressed([]);
		fetchWord();
	}

	useEffect(() => {
		if (!isGameEnded) {
			const handleKeyDown = (e: KeyboardEvent) => {
				const key = e.key.toUpperCase();
				if (/^[A-Z]$/.test(key) && !keysPressed.includes(key)) {
					handleKey({ letter: key });
				}
			};
			window.addEventListener("keydown", handleKeyDown);
			return () => window.removeEventListener("keydown", handleKeyDown);
		}
	}, [isGameEnded, keysPressed, word, handleKey]);

	return (
		<main
			className="w-2xl bg-[#282726] flex flex-col justify-around items-center p-10 rounded-2xl gap-8 text-center"
			aria-label="Hangman game"
		>
			{isGameWon && <Confetti />}
			<h1 className="text-4xl text-[#F9F4DA]">Assembly: Endgame</h1>
			<p className="text-2xl text-[#8E8E8E]">
				Guess the word in under 8 attempts to keep the programming world
				safe from Assembly!
			</p>
			<FarewellBanner
				farewell={farewell}
				isGameWon={isGameWon}
				isGameLost={isGameLost}
			/>
			<ProgrammingBlocks lives={lives} />
			<GuessLetters word={word} isGameLost={isGameLost} />
			<BoardKeys
				word={word}
				keysPressed={keysPressed}
				isGameEnded={isGameEnded}
				handleKey={handleKey}
			/>
			{isGameEnded && (
				<NewGameButton
					onClick={handleNewGame}
					buttonRef={newGameButton}
				/>
			)}
		</main>
	);
}

export default App;
