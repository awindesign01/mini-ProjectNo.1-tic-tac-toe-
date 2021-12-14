import React from "react";

const ColorGradient = ({ Value }) => {
	return (
		<section
			className="color_gradient mx-auto rounded-2xl w-11/12 md:w-2/5 h-[15vh] shadow-lg"
			style={{ backgroundColor: `#${Value}` }}
		></section>
	);
};

export default ColorGradient;
