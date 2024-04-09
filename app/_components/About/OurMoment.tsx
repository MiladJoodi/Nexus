import Image from "next/image";

const OurMoment = () => {
  return (
    <div className="container mx-auto py-3 mt-2 sm:py-4 lg:py-8 px-4 md:px-6 lg:px-16 xl:px-32">
      <h4>Our Moment</h4>
      {/* Gallery */}
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
      
      
        <div className="">
          <Image
            src="/about/moment/img_rectangle_29-min.png"
            width={700}
            height={500}
            alt="Picture of the author"
            className=" "
          />
        </div>

        <div className="row-span-2 col-start-1 row-start-2">
          <Image
            src="/about/moment/img_rectangle_30-min.png"
            width={700}
            height={500}
            alt="Picture of the author"
            className=" "
          />
        </div>

        <div className="row-span-2 col-start-2 row-start-1">
          <Image
            src="/about/moment/img_rectangle_31-min.png"
            width={700}
            height={500}
            alt="Picture of the author"
            className=""
          />
        </div>
        
        <div className="col-start-2 row-start-3">
          <Image
            src="/about/moment/img_woman_sitting_o-min.png"
            width={700}
            height={500}
            alt="Picture of the author"
            className=" "
          />
        </div>

        <div className="col-start-3 row-start-1">
          <Image
            src="/about/moment/img_woman_sitting_o-min.png"
            width={700}
            height={500}
            alt="Picture of the author"
            className=" "
          />
        </div>

        <div className="col-start-3 row-start-2">
          <Image
            src="/about/moment/img_woman_sitting_o-min.png"
            width={700}
            height={500}
            alt="Picture of the author"
            className=" "
          />
        </div>

        <div className="col-start-3 row-start-3">
          <Image
            src="/about/moment/img_woman_sitting_o-min.png"
            width={700}
            height={500}
            alt="Picture of the author"
            className=" "
          />
        </div>


        
      </div>
    </div>
  );
};

export default OurMoment;
