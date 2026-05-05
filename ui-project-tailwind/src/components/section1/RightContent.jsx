import RightCard from "./RightCard";


const RightContent = (props) => {
  return (
    <div id="right" className="h-full w-2/3 p-5 flex rounded-4xl overflow-x-auto  gap-5">
      {props.users.map(function (elem, idx) {
        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />;
      })}
    </div>
  );
}; 

export default RightContent;
