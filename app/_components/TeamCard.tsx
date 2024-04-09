import Image from "next/image";
import { shimmer, toBase64 } from "@/utils/shimmer";

export type TeamProps = {
    image: string,
    name: string,
    desc: string,
}


// const shimmer = (w: number, h: number) => `
// <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//   <defs>
//     <linearGradient id="g">
//       <stop stop-color="#333" offset="20%" />
//       <stop stop-color="#222" offset="50%" />
//       <stop stop-color="#333" offset="70%" />
//     </linearGradient>
//   </defs>
//   <rect width="${w}" height="${h}" fill="#333" />
//   <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
//   <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
// </svg>`;

// const toBase64 = (str: string) =>
//   typeof window === "undefined"
//     ? Buffer.from(str).toString("base64")
//     : window.btoa(str);


const TeamCard = ({item}:{item: TeamProps | undefined}) => {
  return (
    <div className="flex flex-col text-center gap-8 border-b sm:border-none rounded-2xl py-2">
      <Image
        src={item?.image || "/placeholder.png"}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        width={390}
        height={480}
        alt="Picture of the author"
        className="w-[350px] h-[450px]"
        style={{
            maxWidth: "100%",
            height: "auto",
          }}
      />
      <div className="flex flex-col justify-center gap-2">
        <p className="text-2xl font-semibold">{item?.name}</p>
        <p className="text-xl  text-gray-500">{item?.desc}</p>
      </div>
    </div>
  );
};

export default TeamCard;
