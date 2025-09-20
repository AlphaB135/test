import logo from "../assets/react.svg";

function Home() {
  return (
    <div className="left-panel">
      <h3 className="text-white text-xl mb-4">Atsadawut Khunthong</h3>
      <img src={logo} alt="logo" width={120} className="mx-auto" />
    </div>
  );
}

export default Home;