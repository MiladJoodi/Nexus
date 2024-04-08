import Image from "next/image";
import ImageSkeleton from "./ImageSkeleton";

type TeamProps = {
    image: string,
    name: string,
    desc: string,
}

const TeamCard = ({item}:{item: TeamProps | undefined}) => {
  return (
    <div className="flex flex-col text-center gap-8">
      <Image
        src={item?.image || ""}
        width={390}
        height={480}
        alt="Picture of the author"
        className="w-[350px] h-[450px]"
      />
      <div className="flex flex-col justify-center gap-2">
        <p className="text-2xl font-semibold">{item?.name}</p>
        <p className="text-xl  text-gray-500">{item?.desc}</p>
      </div>
    </div>
  );
};

export default TeamCard;
