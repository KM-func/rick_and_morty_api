import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/stylesheets/style.scss";
import CharacterContainer from "./CharacterList/CharacterList";

export default function App() {
  return (
    <div className="App">
      <header className="p-2 py-3 text-center three_sided_border w-50 rounded-bottom pt-3">
        <h1 className="text-center text-strong"> RICK AND MORTY API </h1>
      </header>
      <CharacterContainer/>
      <div className="footer border-top border-secondary px-5 text-center">
          <h3 className="text-muted mt-5">Created by Karl Mark Funcion</h3>
      </div>
    </div>
  );
}
