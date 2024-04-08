import Image from "next/image";
import Navlink from "./Navlink";

const headerLinks = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "About",
    url: "/about"
  },
  {
    title: "Works",
    url: "/works"
  },
  {
    title: "Contact",
    url: "/contact"
  },
]

const Header = () => {
  // { params }: { params: string }
  return (
    <div className=" container mx-auto py-3 sm:py-4 px-4 sm:px-6 lg:px-32 flex flex-col sm:flex-row justify-between items-center gap-2">
      {/* logo */}
      <div>
        <Image
          src="/logo.svg"
          width={300}
          height={200}
          alt="Picture of the author"
          className="w-[155px] h-[50px]"
        />
      </div>

      {/*  */}
      <div className="flex gap-3 md:gap-6 text-lg">
        {headerLinks.map((link)=>(
          <Navlink item={link} key={link.title}  />
        ))}
      </div>
    </div>
  );
};

export default Header;
