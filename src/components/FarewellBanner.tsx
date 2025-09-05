const FarewellBanner = ({
	farewell,
	isGameWon,
	isGameLost,
}: {
	farewell: string[];
	isGameWon: boolean;
	isGameLost: boolean;
}) => (
	<div className="w-full h-20">
		{(farewell.length > 0 || isGameWon || isGameLost) && (
			<div className="w-full h-full bg-[#7A5EA7] p-2 flex justify-around items-center text-2xl font-bold text-[#F9F4DA]">
				{isGameWon ? (
					<div className="flex flex-col justify-around items-center">
						<p>You win!</p>
						<p>Well done! 🎉</p>
					</div>
				) : isGameLost ? (
					<div className="flex flex-col justify-around items-center">
						<p>Game over!</p>
						<p>You lose! Better start learning Assembly 😭</p>
					</div>
				) : (
					<p>“Farewell {farewell.join(" & ")}” 🫡</p>
				)}
			</div>
		)}
	</div>
);

export default FarewellBanner;
