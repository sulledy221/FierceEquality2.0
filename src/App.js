import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import * as flags from "./components/flags";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Footer />
      <flags></flags>
    </div>
  );
}

export default App;
