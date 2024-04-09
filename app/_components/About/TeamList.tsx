import TeamCard from "../TeamCard";
import { OurTeam } from "@/data";

export type TeamProps = {
    image: string,
    name: string,
    desc: string,
}

const TeamList = () => {

    // console.log(items)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center py-2">
          {OurTeam?.map((item)=>(
              <TeamCard item={item} key={item?.name} />
          ))}
        </div>
    );
}

export default TeamList;