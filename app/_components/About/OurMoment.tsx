import Image from "next/image";

const OurMoment = () => {
  return (
    <div className="container mx-auto py-3 mt-2 sm:py-4 lg:py-8 px-4 md:px-6 lg:px-16 xl:px-8">
      <h4 className="text-3xl">Our Moment</h4>
      {/* Gallery */}
      <div className="mt-2 grid grid-cols-3 grid-rows-3 gap-4 align-content-between h-[500px]">
      
        <div className="relative">
          <Image
            src="/about/moment/img_rectangle_29-min.png"
            fill
            alt="Picture of the author"
            className="rounded-xl object-cover shadow hover:shadow-lg cursor-pointer transition-all duration-200"
          />
        </div>

        <div className="relative row-span-2 col-start-1 row-start-2">
          <Image
            src="/about/moment/img_rectangle_30-min.png"
            fill
            alt="Picture of the author"
            className="rounded-xl object-cover shadow hover:shadow-lg cursor-pointer transition-all duration-200"
          />
        </div>

        <div className="relative row-span-2 col-start-2 row-start-1">
          <Image
            src="/about/moment/img_rectangle_31-min.png"
            fill
            alt="Picture of the author"
            className="rounded-xl object-cover shadow hover:shadow-lg cursor-pointer transition-all duration-200"
          />
        </div>
        
        <div className="relative col-start-2 row-start-3">
          <Image
            src="/about/moment/img_mask_group-min.png"
            fill
            alt="Picture of the author"
            className="rounded-xl object-cover shadow hover:shadow-lg cursor-pointer transition-all duration-200"
          />
        </div>

        <div className="relative col-start-3 row-start-1">
          <Image
            src="/about/moment/img_kelly_sikkema_c-min.png"
            fill
            alt="Picture of the author"
            className="rounded-xl object-cover shadow hover:shadow-lg cursor-pointer transition-all duration-200"
          />
        </div>

        <div className="relative col-start-3 row-start-2">
          <Image
            src="/about/moment/img_woman_sitting_o-min.png"
            fill
            alt="Picture of the author"
            className="rounded-xl object-cover shadow hover:shadow-lg cursor-pointer transition-all duration-200"
          />
        </div>

        <div className="relative col-start-3 row-start-3">
          <Image
            src="/about/moment/img_mask_group_206x374-min.png"
            fill
            alt="Picture of the author"
            className="rounded-xl object-cover shadow hover:shadow-lg cursor-pointer transition-all duration-200"
          />
        </div>


        
      </div>
    </div>
  );
};

export default OurMoment;
