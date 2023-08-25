// Nav bar
import NavBar from "./navBar/navBar";

// Main body, planner area
import CreateBodyPlanner from "./plannerBody/dayContainer";
import tempList from "./plannerBody/tempListService";



function App() {
  return (
    <main>
      <header>
        <NavBar />
      </header>
      <div>
        <CreateBodyPlanner content={tempList}/>
      </div>
    </main>
  );
}

export default App;


