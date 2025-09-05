import type { RefObject } from "react";

const NewGameButton = ({
	onClick,
	buttonRef,
}: {
	onClick: () => void;
	buttonRef: RefObject<HTMLButtonElement | null>;
}) => (
	<button
		className="bg-blue-300 px-10 py-3 rounded-lg"
		onClick={onClick}
		ref={buttonRef}
	>
		New Game
	</button>
);

export default NewGameButton;
