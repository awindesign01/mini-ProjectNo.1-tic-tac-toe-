import "../Utilities/Utilities.css";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
	return (
		<section className="header w-full h-[10vh] flex justify-between items-center">
			<nav className="ml-4 w-1/2 h-full flex justify-start items-center">
				<h1 className=" text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
					GRADISM
				</h1>
			</nav>
			<nav className="mr-4 w-1/2 h-full flex justify-end items-center">
				<button>
					<HiMenuAlt3 className="text-3xl text-red-500" />
				</button>
			</nav>
		</section>
	);
};

export default Header;
