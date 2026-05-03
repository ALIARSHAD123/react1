import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user = "Aman" age ={23}/>
      <Card user = "Ammar" age ={20}/>
      <Card user = "raw" age ={2}/>
    </div>
  );
};

export default App;
