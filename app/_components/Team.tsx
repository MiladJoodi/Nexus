import Image from "next/image";
import Link from "next/link";
import TeamCard from "./TeamCard";

const OurTeam = [
    {
        name: "Sarah Jae",
        image: "/03.png",
        desc: "Branding Specialist"
    },
    {
        name: "John Doe",
        image: "/02.png",
        desc: "Product Designer"
    },
    ,
    {
        name: "Samantha",
        image: "/01.png",
        desc: "SEO Specialist"
    },
]

const Team = () => {
  return (
    <div className="container mx-auto py-3 mt-16 sm:py-4 px-4 sm:px-6 lg:px-16 xl:px-32">
      <div className="flex flex-col gap-4">
        {/* title */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl">Meet our team</h2>
          <Link href="/" className="text-liver text-lg">
            View all
          </Link>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center py-2">
          {OurTeam.map((item,index)=>index<4 &&(
              <TeamCard item={item} key={item?.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
