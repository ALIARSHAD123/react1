import React from "react";

const App = () => {


  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user); // null



  const use= {
    name: "zhangsan",
    age: 18,
    city: "beijing",
  }
  // console.log(user);
  localStorage.setItem("user",JSON.stringify(use));




  localStorage.setItem('name', 'zhangsan')
  localStorage.setItem("age", 18)
  let a = localStorage.getItem("name"); // zhangsan
  let b = localStorage.getItem("age"); // 18
  console.log(a, b);

  localStorage.removeItem("name");
  localStorage.removeItem("age");

  localStorage.clear()
  sessionStorage.clear()
  return  <div>APP</div>;
};

export default App;
