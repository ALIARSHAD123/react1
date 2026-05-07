import { useState } from "react";
import CounterApp from "./components/counterapp";
const App = () => {
  const [a, setA] = useState(140);
  const [username, setUsername] = useState("jjnJohn");
  const [userArray, setUserArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  function ChangeNum() {
    setA(a + 1);
    setUsername("aman");
    setUserArray([30, 40, 50, 60, 70, 80, 90, 100]);
  }

  return (
    <>
        <CounterApp />




      <div>
        <h1>
          value of a is {a} <br /> {userArray} <br />
          username of user is {username}
        </h1>
        <button onClick={ChangeNum}>CLICK</button>
      </div>
    </>
  );
};

export default App;
