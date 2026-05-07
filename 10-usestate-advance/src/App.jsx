import { useState } from "react";

const App = () => {
  const [num, setNum] = useState({ user: "john", age: 20 });

  const [newarr, setNewarr] = useState([1, 2, 3]);

  const [newobj, setNewobj] = useState({ name: "aaouch", age: 20 });

  const [count, setCount] = useState(0);

  const BtnClick = () => {
    setNewobj((prev) => ({ ...prev, age: 50 }));

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);

    const copyarr = [...newarr];
    copyarr.push(4);
    setNewarr(copyarr);

    const newNum = { ...num };
    newNum.user = "doe";
    newNum.age = 30;
    setNum(newNum);
  };
  return (
    <div>
      <h1>{count}</h1>
      <h3>
        {newobj.name}, {newobj.age}
      </h3>
      <h1 onClick={BtnClick}>{newarr}</h1>
      <h2>
        {num.user},{num.age}
      </h2>
      <button onClick={BtnClick}>clicked</button>
    </div>
  );
};

export default App;
