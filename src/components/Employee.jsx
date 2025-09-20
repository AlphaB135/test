import PersonList from "./PersonList";

function Employee({ employees }) {
  return (
    <div className="right-panel">
      <PersonList employees={employees} />
    </div>
  );
}

export default Employee;