type GuessedLetter = {
	id: string;
	letter: string;
	isGuessed: boolean;
};

const GuessLetters = ({
	word,
	isGameLost,
}: {
	word: GuessedLetter[];
	isGameLost: boolean;
}) => (
	<div className="flex gap-1 justify-center mt-5 mb-10">
		{word.map((letterObj) => (
			<div
				className={`w-14 h-14 flex justify-center items-center bg-[#323232] border-b border-[#F9F4DA] text-3xl font-bold ${
					isGameLost && !letterObj.isGuessed
						? "text-[#EC5D49]"
						: "text-[#F9F4DA]"
				}`}
				key={letterObj.id}
			>
				{letterObj.isGuessed || isGameLost
					? letterObj.letter.toUpperCase()
					: ""}
			</div>
		))}
	</div>
);

export default GuessLetters;
