/**
 * The above function is a simple React component that renders a form with an input field for entering
 * a name and a submit button.
 * @returns The code snippet is a React functional component named `App`. It returns a form with an
 * input field for the user to enter their name and a submit button. When the form is submitted, the
 * `submitHandler` function is called, which prevents the default form submission behavior, logs "Form
 * submitted" along with the current value of the `title` state, and then resets the `title` state
 */
// import { useState } from "react";

// const App = () => {
//   const [title, setTitle] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log("Form submitted", title);
//     setTitle("");
//   };

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           submitHandler(e);
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={title}
//           onChange={(e) => {
//             setTitle(e.target.value);
//           }}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;



import { useState } from "react";

const App = () => {
  const [title, setTitle]  = useState("");
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("Form submitted", title);
    setTitle("");
  }
 
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);

      }}>
        <input type="text" placeholder='Enter your name' value={title} onChange={(e)=>{
          setTitle(e.target.value);
        }}/>
      
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default App


