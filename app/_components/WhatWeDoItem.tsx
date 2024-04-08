import Image from "next/image";

type WeDoTypes = {
  image: string;
  title: string;
  desc: string;
  color: string;
};

const WhatWeDoItem = ({item}:{item: WeDoTypes}) => {
  return (
    <div className="flex flex-col justify-center items-center w-[90%]  gap-4 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <div className={`shadow-lg rounded-lg p-2 w-[46px] h-[46px] ` +item?.color}>
        <Image src={item.image} width={30} height={30} alt="icon" className=" " />
      </div>
      <span className="text-black-900 sm:text-[21px] md:text-[23px] text-[25px] font-bold">
        {item?.title}
      </span>
      <p className="text-sm">
        {item?.desc}
      </p>
    </div>
  );
};

export default WhatWeDoItem;
