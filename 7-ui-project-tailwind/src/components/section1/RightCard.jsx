import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-[45  0px] w-1/3 shrink-0 rounded-2xl flex relative overflow-hidden">
      <img className=" h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent id={props.id} tag={props.tag} color={props.color} />
    </div>
  );
};
export default RightCard;
