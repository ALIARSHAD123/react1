import { MoveRight } from "lucide-react";
const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="flex flex-col items-center font-semibold rounded-full w-10 h-10 p-2 bg-amber-50 justify-center">
        {props.id +1}
      </h2>
      <p className=" leading-5 text-white text-sm pt-20 mb-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit incidunt
        voluptas maxime harum doloremque?
      </p>
      <div className="flex justify-between">
        <button className={`text-white px-4 py-2 rounded-full`} style={{ backgroundColor: props.color }}>
          {props.tag}
        </button>
        <button  style={{backgroundColor:props.color}} className="text-white px-4 py-2 rounded-full">
          <MoveRight size={10} />
        </button>
      </div>
    </div>
  );
};

export default RightCardContent;
