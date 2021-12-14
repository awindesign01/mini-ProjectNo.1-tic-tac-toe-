const item = [
	{ number: 1, percentage: "0%", type: "text" },
	{ number: 2, percentage: "50%", type: "text" },
	{ number: 3, percentage: "100%", type: "text" },
];

const Inputs = ({ Value, setValue }) => {
	return (
		<>
			{item.map((i) => (
				<form className="w-full h-20 flex justify-between items-center">
					<nav className="w-[13%] h-full display_center">
						<nav className="rounded-xl w-[90%] h-2/4 border-2 border-solid border-gray-300 display_center">
							<p className="text-gray-600 font-bold">{i.number}</p>
						</nav>
					</nav>
					<nav className="w-[13%] h-full display_center">
						<nav
							className="rounded-xl w-[90%] h-2/4 border-2 border-solid border-gray-300"
							style={{ backgroundColor: `#${Value}` }}
						></nav>
					</nav>
					<form className="w-[40%] h-full display_center">
						<input
							type={i.type}
							name="colorName"
							id="input_color_name"
							className="px-4 rounded-xl w-full h-2/4 border-2 border-solid border-gray-300 text-gray-600 font-bold uppercase not-italic tracking-[2px] placeholder:text-[10px] placeholder:text-gray-300"
							placeholder="enter withed #"
							maxLength="6"
							value={Value}
							onChange={(event) => setValue(event.target.value.toUpperCase())}
						/>
					</form>
					<nav className="w-[13%] h-full display_center">
						<nav className="rounded-xl w-[90%] h-2/4 border-2 border-solid border-gray-300 display_center">
							<p className="text-sm text-gray-600 font-bold">{i.percentage}</p>
						</nav>
					</nav>
				</form>
			))}
		</>
	);
};

export default Inputs;
