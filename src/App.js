import React from "react";
import "./App.css";
import Square from "./Components/Square";
import { Pattern } from "./Pattern";

function App() {
	const [Board, setBoard] = React.useState(["", "", "", "", "", "", "", "", ""]);
	const [Player, setPlayer] = React.useState("X");
	const [Result, setResult] = React.useState({ winner: "none", state: "none" });

	React.useEffect(() => {
		checkWin();
		checkiftie();
		if (Player === "X") {
			setPlayer("O");
		} else {
			setPlayer("X");
		}
	}, [Board]);
	React.useEffect(() => {
		if (Result.state !== "none") {
			alert(`Game win Player: ${Result.winner}`);
		}
		resturnGame();
	}, [Result]);

	const chooseHandler = (e) => {
		setBoard(
			Board.map((val, index) => {
				if (index === e && val === "") {
					return Player;
				}
				return val;
			}),
		);
	};

	const checkWin = () => {
		Pattern.forEach((i) => {
			const firstPlayer = Board[i[0]];
			if (firstPlayer === "") return;
			let findWinner = true;
			i.forEach((ind) => {
				if (Board[ind] !== firstPlayer) {
					findWinner = false;
				}
			});
			if (findWinner) {
				setResult({ winner: Player, state: "win" });
			}
		});
	};

	const checkiftie = () => {
		let filled = true;
		Board.forEach((i) => {
			if (i === "") {
				filled = false;
			}
		});
		if (filled) {
			setResult({ winner: "no one", state: "Tie" });
		}
	};

	const resturnGame = () => {
		setBoard(["", "", "", "", "", "", "", "", ""]);
		setPlayer("X");
	};

	return (
		<section className="App container grid place-items-center">
			<nav className="p-4 board w-[600px] h-[600px] bg-red-500 shadow-lg shadow-red-300 rounded-lg">
				<nav className="w-full h-full flex flex-col justify-between">
					<nav className="row h-[33%] flex justify-between items-center">
						<Square
							val={Board[0]}
							chooseSquare={() => {
								chooseHandler(0);
							}}
						/>
						<Square
							val={Board[1]}
							chooseSquare={() => {
								chooseHandler(1);
							}}
						/>
						<Square
							val={Board[2]}
							chooseSquare={() => {
								chooseHandler(2);
							}}
						/>
					</nav>
					<nav className="row h-[33%] flex justify-between items-center">
						<Square
							val={Board[3]}
							chooseSquare={() => {
								chooseHandler(3);
							}}
						/>
						<Square
							val={Board[4]}
							chooseSquare={() => {
								chooseHandler(4);
							}}
						/>
						<Square
							val={Board[5]}
							chooseSquare={() => {
								chooseHandler(5);
							}}
						/>
					</nav>
					<nav className="row h-[33%] flex justify-between items-center">
						<Square
							val={Board[6]}
							chooseSquare={() => {
								chooseHandler(6);
							}}
						/>
						<Square
							val={Board[7]}
							chooseSquare={() => {
								chooseHandler(7);
							}}
						/>
						<Square
							val={Board[8]}
							chooseSquare={() => {
								chooseHandler(8);
							}}
						/>
					</nav>
				</nav>
			</nav>
		</section>
	);
}

export default App;
