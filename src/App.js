import "./App.css";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      {[1, 3, 5].map((id) => (
        <Posts id={id} />
      ))}
    </>
  );
}

export default App;
