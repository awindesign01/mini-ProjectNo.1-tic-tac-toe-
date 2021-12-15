import React from "react";

const ColorGradient = ({ Value1, Value2, Value3 }) => {
	return (
		<section
			className="color_gradient mx-auto rounded-2xl w-11/12 md:w-2/5 h-[15vh] shadow-lg"
			style={{ backgroundImage: `linear-gradient(90deg, #${Value1}, #${Value2}, #${Value3})` }}
		></section>
	);
};

export default ColorGradient;
