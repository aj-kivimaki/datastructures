import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="app">
        <main className="main">
          <h2>Datastructures</h2>
          <Link to="/sort">
            <h3>Bubble / Selection Sort</h3>
          </Link>
          <Link to="/queue">
            <h3>Queue</h3>
          </Link>
          <Link to="/stack">
            <h3>Stack</h3>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;
