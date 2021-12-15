import React from "react";
import "../../Utilities/Utilities.css";
import ColorGradient from "../ColorGradient/ColorGradient";
import { Inputs1, Inputs2, Inputs3 } from "../Inputs/Inputs";

const InputColor = () => {
	const [Value1, setValue1] = React.useState("");
	const [Value2, setValue2] = React.useState("");
	const [Value3, setValue3] = React.useState("");

	// const total = [Value1, Value2, Value3];

	return (
		<section className="w-full h-[75vh]">
			<ColorGradient Value1={Value1} Value2={Value2} Value3={Value3} />
			<nav className="mx-auto w-11/12 md:w-2/5 h-1/2">
				<Inputs1 Value1={Value1} setValue1={setValue1} />
				<Inputs2 Value2={Value2} setValue2={setValue2} />
				<Inputs3 Value3={Value3} setValue3={setValue3} />
			</nav>
			<nav className="mx-auto p-10 w-11/12 md:w-2/5 h-1/2 text-white text-lg font-bold bg-gray-800 rounded-xl">
				<p>
					background: <br />
					<span className="mr-2"></span>linear-gradient(
					<br />
					<span className="mr-4"></span>90deg ,<br />
					<span className="mr-4"></span>{Value1} 0% ,<br />
					<span className="mr-4"></span>{Value2} 50% ,<br />
					<span className="mr-4"></span>{Value3} 100% ,<br />
					);
				</p>
			</nav>
		</section>
	);
};

export default InputColor;
