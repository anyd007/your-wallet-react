import useDate from "./config/useDate";

function App() {
  const { fullDate, fullTime, getCurrentDay } = useDate();
  return (
    <div className="App">
    <h1>testy daty</h1>
    <h2>{fullDate}</h2>
    <h2>{fullTime}</h2>
    <h2>{getCurrentDay}</h2>
    </div>
  );
}

export default App;
