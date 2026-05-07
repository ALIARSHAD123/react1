const App = () => {
  const btnclicked = () => {
    console.log("Button Clicked");
  };

  function mouseEnter() {
    console.log("Mouse Entered");
  }

  function changehub(){
    console.log("user is changing the hub");
  }

  const pageScrolling = (elem) => {
    console.log("Page is Scrolling speed is....." , elem);
    if (elem > 0) {
      console.log("scrolling down");
    } else {
      console.log("scrolling up");
    }
  };

  function btnClicked() {
    console.log("Button Clicked");
  }

  return (
    <>
      <div>
        <button onClick={btnClicked}>Click</button>
      </div>
      <div
        onWheel={(elem) => {
          console.log(elem.deltaY);
          pageScrolling(elem.deltaY);
        }}
      >
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>

      <div>
        <div
          onMouseMove={(elem) => {
            console.log(elem.clientY);
          }}
          className="box"
        ></div>
      </div>

      <h1>HELLO WORLD</h1>

<input
        onChange={function (elem) {
          changehub(elem.target.value);
        }}
        type="text"
        placeholder="Enter Name"
      />

      <input
        onChange={() => {
          console.log("Input to change the hub");
        }}
        type="text"
        placeholder="Enter Name"
      />

      <button onMouseEnter={mouseEnter} onClick={btnclicked}>
        Change User
      </button>

      <button onClick={btnclicked}>visit this</button>

      <button
        onClick={function () {
          console.log("Button Clicked");
        }}
      >
        click me
      </button>

      <button
        onClick={() => {
          console.log("button clicked123");
        }}
      >
        click me
      </button>
    </>
  );
};

export default App;
