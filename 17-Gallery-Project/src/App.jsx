import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [page, setpage] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`,
    );
    setUserData(response.data);
  };

  useEffect(function () {
    getData();
  }, [page]);

  let printUserdata = <h2 className="text-gray-400 absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2">Loading....</h2>;

  if (userData.length > 0) {
    printUserdata = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
         <Cards elem = {elem}/>
        </div>
      );
    });
  }

  return (
    <div className="h-screen overflow-auto bg-black p-8 text-white">
      <h1 className="fixed text-2xl">{page}</h1>
      <div className="flex flex-wrap gap-4 py-3">{printUserdata}</div>

      <div className="flex justify-center  gap-4 items-centerp-5">
        <button
          className="bg-amber-400 cursor-pointer active:scale-95 text-black rounded px-4 py-2"
          onClick={() => {
            if (page > 1) {
              setpage(page - 1);
              setUserData([])
            }
          }}
          >
          Prev
        </button>
        <h4>page {page}</h4>
        <button
          className="bg-amber-400 cursor-pointer active:scale-95 text-black rounded px-4 py-2"
          onClick={() => {
            setpage(page + 1);
            setUserData([])
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
