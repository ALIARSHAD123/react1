const Card = (props) => {

  return (
    <div>
      <div className="card">
        <h1>
          {props.user}, {props.age}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          mollitia?
        </p>
        <button>view here</button>
      </div>
    </div>
  );
};

export default Card;
