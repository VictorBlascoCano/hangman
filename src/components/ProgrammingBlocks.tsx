import { programmingData } from "../data";

const ProgrammingBlocks = ({ lives }: { lives: number }) => (
	<div className="flex w-96 gap-1 flex-wrap justify-center">
		{programmingData.map((item, index) => {
			const isDead = 8 - lives > index;
			return (
				<div
					className="flex justify-center items-center relative"
					key={item.id}
				>
					<div
						className={`px-2 py-1 rounded font-bold ${
							isDead ? "opacity-10" : ""
						}`}
						style={{
							backgroundColor: item.colorBackground,
							color: item.colorText,
						}}
					>
						{item.name}
					</div>
					{isDead && <span className="absolute">💀</span>}
				</div>
			);
		})}
	</div>
);

export default ProgrammingBlocks;
