import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="container mx-auto py-3 sm:py-4 px-2 sm:px-6 lg:px-16 xl:px-32">
      <div className="flex flex-col  gap-8 lg:flex-row bg-lightBlue rounded-3xl md:p-14 px-2 py-6">
        {/* Left */}
        <div className="flex items-center flex-1">
          <div className="flex flex-col xl:gap-10 gap-6 p-4 w-[95%] ">
            <h1 className="text-4xl md:text-6xl font-semibold">
              Maximize your business with us
            </h1>
            <p className="text-gray-500">
              Maximize your business with a variety of services and services
              from us.
            </p>
            {/* buttons */}
            <div className="flex flex-col sm:flex-row center xl:gap-6 gap-3 text-center pt-2">
              <Link href="/contact" className="border-2 border-black bg-black text-white font-semibold py-5 px-12 rounded-md ">Contact Us</Link>
              <Link href="/about" className="border-2 border-black font-semibold py-5 px-12 rounded-md">About</Link>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className=" flex-1 relative flex justify-center items-center">
          <Image
            src="/hero.png"
            width={750}
            height={450}
            alt="Picture of the author"
            className=" object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
