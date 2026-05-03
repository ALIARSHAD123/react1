// import './index.css'

const card = () => {
  const user = " anyone";
  return (
    <div className="cardready">
      <div className="card">
        <h1>Lorem, ipsum dolor {user}.</h1>
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod fuga
          totam dolorem?{user}
        </h2>
      </div>
    </div>
  );
};

export default card;
