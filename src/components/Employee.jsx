import PersonList from "./PersonList";

function Employee({ employeescom }) {
  return (
    <div className="right-panel">
      <PersonList employeeslist={employeescom} />
    </div>
  );
}

export default Employee;