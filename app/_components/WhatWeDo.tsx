import Image from "next/image";
import WhatWeDoItem from "./WhatWeDoItem";

const weDo = [
    {
        image: "/a.svg",
        title: "UI/UX Design",
        desc: "We can make your website or application design better with this service",
        color: "bg-liver"
    },
    {
        image: "/b.svg",
        title: "Website Dev",
        desc: "Make your business more leverage by having an optimal website and we are ready to help",
        color: "bg-lightGreen"
    },
    {
        image: "/c.svg",
        title: "Branding & Product",
        desc: "We can also help you un the affairs of product branding so that your products can be riveting",
        color: "bg-lightGreen2"
    },
]

const WhatWeDo = () => {
  return (
    <div className="container mx-auto py-3 mt-12 sm:py-4 lg:py-12 px-4 md:px-6 lg:px-16 xl:px-32">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl text-center">What we do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center lg:p-14 p-2 py-24 lg:py-32  lg:rounded-[75px] rounded-3xl text-center bg-pinkLight">
          {/* item */}
          {weDo.map((item)=>(
              <WhatWeDoItem item={item} key={item.title} />
          ))}

        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
