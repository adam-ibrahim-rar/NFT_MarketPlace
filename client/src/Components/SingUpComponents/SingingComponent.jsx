import liu from "../../Images/liu.jpg";
export default function SingUpShape(props) {
  return (
    <div className="flex  gap-15  w-6xl mx-auto pb-0.5 ">
      <img src={liu} alt="" className="w-[610px] object-cover rounded-xl" />
      <props.form />
    </div>
  );
}
