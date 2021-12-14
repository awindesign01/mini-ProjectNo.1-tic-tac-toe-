import React from "react";
import "../../Utilities/Utilities.css";
import ColorGradient from "../ColorGradient/ColorGradient";
import Inputs from "../Inputs/Inputs";

const InputColor = () => {
	const [Value, setValue] = React.useState([]);

	return (
		<section className="w-full h-[75vh]">
			<ColorGradient Value={Value} />
			<nav className="mx-auto w-11/12 md:w-2/5 h-1/2">
				<Inputs Value={Value} setValue={setValue} />
			</nav>
			<nav className="mx-auto p-10 w-11/12 md:w-2/5 h-1/2 text-white text-lg font-bold bg-gray-800 rounded-xl">
				<p>
					background: <br />
					<span className="mr-2"></span>linear-gradient(
					<br />
					<span className="mr-4"></span>90deg ,<br />
					<span className="mr-4"></span>#ef4444 0% ,<br />
					<span className="mr-4"></span>#facc15 50% ,<br />
					<span className="mr-4"></span>#facc15 100% ,<br />
					);
				</p>
			</nav>
		</section>
	);
};

export default InputColor;
