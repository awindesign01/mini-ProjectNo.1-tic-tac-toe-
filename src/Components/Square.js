import React from "react";

const Square = ({ val, chooseSquare }) => {
	return (
		<nav
			className="h-full w-[33%] bg-red-300 rounded-lg cursor-pointer grid place-items-center text-5xl text-white"
			onClick={chooseSquare}
		>
			{val}
		</nav>
	);
};

export default Square;
