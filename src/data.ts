export const programmingData = [
	{
		id: crypto.randomUUID(),
		name: "HTML",
		colorBackground: "#E2680F",
		colorText: "#fff",
	},
	{
		id: crypto.randomUUID(),
		name: "CSS",
		colorBackground: "#328AF1",
		colorText: "#fff",
	},
	{
		id: crypto.randomUUID(),
		name: "Javascript",
		colorBackground: "#F4EB13",
		colorText: "#000",
	},
	{
		id: crypto.randomUUID(),
		name: "React",
		colorBackground: "#2ED3E9",
		colorText: "#000",
	},
	{
		id: crypto.randomUUID(),
		name: "Typescript",
		colorBackground: "#298EC6",
		colorText: "#fff",
	},
	{
		id: crypto.randomUUID(),
		name: "Node.js",
		colorBackground: "#599137",
		colorText: "#fff",
	},
	{
		id: crypto.randomUUID(),
		name: "Python",
		colorBackground: "#FFD742",
		colorText: "#000",
	},
	{
		id: crypto.randomUUID(),
		name: "Ruby",
		colorBackground: "#D02B2B",
		colorText: "#fff",
	},
	{
		id: crypto.randomUUID(),
		name: "Assembly",
		colorBackground: "#2D519F",
		colorText: "#fff",
	},
];

export interface Letter {
	id: string;
	letter: string;
}

export const letters: Letter[] = Array.from({ length: 26 }, (_, i) => ({
	id: crypto.randomUUID(),
	letter: String.fromCharCode(65 + i), // 65 = "A" en ASCII
}));
