import React from "react";
import "../../Utilities/Utilities.css";

const InputColor = () => {
	const [Value, setValue] = React.useState();

	return (
		<section className="w-full h-[75vh]">
			<nav className="mx-auto w-11/12 md:w-4/5 h-1/2">
				<nav className="w-full h-20 flex justify-between items-center">
					<nav className="w-[13%] h-full display_center">
						<nav className="rounded-full w-[90%] h-2/4 border-2 border-solid border-gray-300 display_center">
							<p className="text-gray-600 font-bold">1</p>
						</nav>
					</nav>
					<form className="w-[40%] h-full display_center">
						<input
							type="text"
							name="colorName"
							id="input_color_name"
							className="px-4 rounded-full w-full h-2/4 border-2 border-solid border-gray-300 text-gray-600 font-bold uppercase not-italic tracking-[2px] placeholder:text-gray-300"
							placeholder="#FF2351"
							maxLength="7"
							value={Value}
							onChange={(event) => setValue(event.target.value.toUpperCase())}
						/>
					</form>
					<nav className="w-[13%] h-full display_center">
						<nav className="rounded-full w-[90%] h-2/4 border-2 border-solid border-gray-300"></nav>
					</nav>
					<nav className="w-[13%] h-full display_center">
						<nav className="rounded-full w-[90%] h-2/4 border-2 border-solid border-gray-300 display_center">
							<p className="text-gray-600 font-bold">0%</p>
						</nav>
					</nav>
				</nav>
			</nav>
			<nav className="mx-auto w-11/12 md:w-4/5 h-1/2 bg-blue-500"></nav>
		</section>
	);
};

export default InputColor;
