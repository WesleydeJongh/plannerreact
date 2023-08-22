import NavBar from "./navBar/navBar";
import CreateBodyPlanner from "./plannerBody/dayContainer";



function App() {
  return (
    <main>
      <header>
        <NavBar />
      </header>
      <div>
        <CreateBodyPlanner />
      </div>
    </main>
  );
}

export default App;


