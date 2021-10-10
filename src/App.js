import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Posts />
      <Footer />
    </div>
  );
}

export default App;
