import Image from "next/image";
import About from "../_components/About/About";
import TeamList from "../_components/About/TeamList";
import OurMoment from "../_components/About/OurMoment";
const AboutPage = () => {

  return (
    <div className="container mx-auto py-3 mt-2 sm:py-4 lg:py-8 px-4 md:px-6 lg:px-16 xl:px-32">

      <div className="relative flex flex-col gap-8 justify-items-center items-center xl:p-32 p-12 py-20 xl:py-52 lg:py-32 lg:rounded-[75px] rounded-[85px] text-center bg_yellow">
        <h4 className="lg:text-5xl text-3xl font-semibold max-w-[400px]">
          Get to know more <span className="text-liver">about us</span>
        </h4>
        <p className="text-gray-500 font-light text-xl text-center max-w-[800px]">
          We are an agency engaged in the creative industry and business, we are
          ready to help you to improve your business performance together with
          our great team
        </p>

        <Image
          src="/about/img_ellipse_11.png"
          width={300}
          height={200}
          alt="Picture of the author"
          className="w-[100px] h-[100px] absolute lg:top-14 lg:left-14 top-2 left-2"
        />
        <Image
          src="/about/img_ellipse_12.png"
          width={300}
          height={200}
          alt="Picture of the author"
          className="w-[100px] h-[100px] absolute bottom-2 left-4"
        />
        <Image
          src="/about/img_ellipse_13.png"
          width={300}
          height={200}
          alt="Picture of the author"
          className="w-[100px] h-[100px] absolute top-32 right-0"
        />
        <div className="w-[15px] h-[15px] bg-[#c63973] rounded-full absolute right-14 top-14 lg:right-48 shadow-lg"></div>
        <div className="w-[15px] h-[15px] bg-[#f5ab67] rounded-full absolute top-32 lg:top-24 left-3 lg:left-64 shadow-lg"></div>
      </div>

      <TeamList />
      <OurMoment />
    </div>
  );
};

export default AboutPage;
