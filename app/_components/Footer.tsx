import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-footer text-white mt-10 lg:mr-28 mr-10 h-max">
      <div className="flex flex-col  lg:flex-row justify-evenly gap-12 xl:px-36 px-10 lg:pt-24 pt-10 pb-8 h-full">
        <div className="flex items-center flex-col justify-between">
          <Image
            src="/footer-logo.svg"
            width={300}
            height={200}
            alt="Picture of the author"
            className="w-[155px] h-[50px]"
          />
          <div>
            <p className="text-white">All Rights Reserved</p>
            <p className="text-white text-sm">
              Made with
              <a href="https://github.com/MiladJoodi/Nexus"> ❤️</a>
            </p>
          </div>
        </div>

        <div className="flex gap-16">
          {/* About links */}
          <div className="flex flex-col gap-8">
            <h4 className="uppercase footer_title text-xl outline-offset-8 relative">
              About
            </h4>
            <ul className="flex flex-col gap-4 text-lg">
              <li>About</li>
              <li>What we do</li>
              <li>Works</li>
              <li>Testimonial</li>
            </ul>
          </div>

          {/* Follow links */}
          <div className="flex flex-col gap-8">
            <h4 className="uppercase footer_title text-xl outline-offset-8 relative">
              Follow us
            </h4>
            <ul className="flex flex-col gap-4 text-lg">
              <li>Dribbble</li>
              <li>Instagram</li>
              <li>Behance</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>

        <Image
          src="/footer image.svg"
          width={300}
          height={200}
          alt="Picture of the author"
          className="w-[250px] h-[250px]"
        />
      </div>
    </div>
  );
};

export default Footer;
