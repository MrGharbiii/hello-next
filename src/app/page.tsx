"use client";
import Image from "next/image";
type buttonProps = {
	onClick: () => void;
};
export default async function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			To Do List
			<label htmlFor="title">To do Title</label>
			<textarea name="title" id="title" />
			<label htmlFor="name">Description</label>
			<textarea name="description" id="" />
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button
				onClick={() => {
					console.log("zeda");
				}}
			>
				Submit
			</button>
		</div>
	);
}
