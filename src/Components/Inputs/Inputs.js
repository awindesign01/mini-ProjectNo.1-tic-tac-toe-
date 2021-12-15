export const Inputs1 = ({ Value1, setValue1 }) => {
	return (
		<form className="w-full h-20 flex justify-between items-center">
			<nav className="w-[13%] h-full display_center">
				<nav className="rounded-xl w-[90%] h-2/4 border-2 border-solid border-gray-300 display_center">
					<p className="text-gray-600 font-bold">1</p>
				</nav>
			</nav>
			<nav className="w-[13%] h-full display_center">
				<nav
					className="rounded-xl w-[90%] h-2/4 border-2 border-solid border-gray-300"
					style={{ backgroundColor: `#${Value1}` }}
				></nav>
			</nav>
			<nav className="w-[40%] h-full display_center">
				<input
					type="text"
					name="colorName"
					id="input_color_name"
					className="px-4 rounded-xl w-full h-2/4 border-2 border-solid border-gray-300 text-gray-600 font-bold uppercase not-italic tracking-[2px] placeholder:text-[10px] placeholder:text-gray-300"
					placeholder="enter withed #"
					maxLength="6"
					onChange={(event) => setValue1(event.target.value.toUpperCase())}
					value={Value1}
				/>
			</nav>
			<nav className="w-[13%] h-full display_center">
				<nav className="rounded-xl w-[90%] h-2/4 border-2 border-solid border-gray-300 display_center">
					<p className="text-sm text-gray-600 font-bold">0%</p>
				</nav>
			</nav>
		</form>
	);
};

export const Inputs2 = ({ Value2, setValue2 }) => {
	return (
		<form className="w-full h-20 flex justify-between items-center">
			<nav className="w-[13%] h-full display_center">
				<nav className="rounded-xl w-[90%] h-2/4 border-2 border-solid border-gray-300 display_center">
					<p className="text-gray-600 font-bold">2</p>
				</nav>
			</nav>
			<nav className="w-[13%] h-full display_center">
				<nav
					className="rounded-xl w-[90%] h-2/4 border-2 border-solid border-gray-300"
					style={{ backgroundColor: `#${Value2}` }}
				></nav>
			</nav>
			<nav className="w-[40%] h-full display_center">
				<input
					type="text"
					name="colorName"
					id="input_color_name"
					className="px-4 rounded-xl w-full h-2/4 border-2 border-solid border-gray-300 text-gray-600 font-bold uppercase not-italic tracking-[2px] placeholder:text-[10px] placeholder:text-gray-300"
					placeholder="enter withed #"
					maxLength="6"
					value={Value2}
					onChange={(event) => setValue2(event.target.value.toUpperCase())}
				/>
			</nav>
			<nav className="w-[13%] h-full display_center">
				<nav className="rounded-xl w-[90%] h-2/4 border-2 border-solid border-gray-300 display_center">
					<p className="text-sm text-gray-600 font-bold">50%</p>
				</nav>
			</nav>
		</form>
	);
};

export const Inputs3 = ({ Value3, setValue3 }) => {
	return (
		<form className="w-full h-20 flex justify-between items-center">
			<nav className="w-[13%] h-full display_center">
				<nav className="rounded-xl w-[90%] h-2/4 border-2 border-solid border-gray-300 display_center">
					<p className="text-gray-600 font-bold">3</p>
				</nav>
			</nav>
			<nav className="w-[13%] h-full display_center">
				<nav
					className="rounded-xl w-[90%] h-2/4 border-2 border-solid border-gray-300"
					style={{ backgroundColor: `#${Value3}` }}
				></nav>
			</nav>
			<nav className="w-[40%] h-full display_center">
				<input
					type="text"
					name="colorName"
					id="input_color_name"
					className="px-4 rounded-xl w-full h-2/4 border-2 border-solid border-gray-300 text-gray-600 font-bold uppercase not-italic tracking-[2px] placeholder:text-[10px] placeholder:text-gray-300"
					placeholder="enter withed #"
					maxLength="6"
					value={Value3}
					onChange={(event) => setValue3(event.target.value.toUpperCase())}
				/>
			</nav>
			<nav className="w-[13%] h-full display_center">
				<nav className="rounded-xl w-[90%] h-2/4 border-2 border-solid border-gray-300 display_center">
					<p className="text-sm text-gray-600 font-bold">100%</p>
				</nav>
			</nav>
		</form>
	);
};
