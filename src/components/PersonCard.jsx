function PersonCard({ name, dept}) {
  return (
    <div className="person-card">
      <h4 className="font-medium">{name}</h4>
      <p className="text-sm text-gray-600">แผนก: {dept}</p>
    </div>
  );
}

export default PersonCard;