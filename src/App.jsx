import { useState } from "react";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Employee from "./components/Employee";


function App() {
  const [page, setPage] = useState("home");

  const [employees] = useState([
    { id: 1, name: "Somchai", dept: "IT" },
    { id: 2, name: "Madee", dept: "Finance" },
    { id: 3, name: "Pladaw", dept: "Store" }
  ]);

  return (
    <div className="app-container">
  <Menu currentPage={page} onChangePage={setPage} />

      <div className="app-body">
        {page === "home" && <Home />}
        {page === "employee" && <Employee employeescom={employees} />}
      </div>
    </div>
  );
}

export default App;