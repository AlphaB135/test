import PersonCard from "./PersonCard";

function PersonList({ employees }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-md bg-[#d7f0f3] rounded-lg shadow p-4">
        <div>
          {employees.map(employee => (
            <PersonCard key={employee.id} name={employee.name} dept={employee.dept} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonList;