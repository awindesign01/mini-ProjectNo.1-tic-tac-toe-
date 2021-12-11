import "./App.css";
import ColorGradient from "./Components/ColorGradient/ColorGradient";
import InputColor from "./Components/InputColor/InputColor";
import Header from "./Layout/Header";

function App() {
	return (
		<section className="App container">
			<Header />
      <ColorGradient />
      <InputColor />
		</section>
	);
}

export default App;
