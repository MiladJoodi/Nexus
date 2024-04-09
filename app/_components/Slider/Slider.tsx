import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
// import '../css/sandbox.css'
import "./css/embla.css";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const clientComments = [
  {
    name: "John Richard",
    job: "Businessman",
    image: "/a.png",
    desc: "I am very satisfied with the work on the Nexus team. good service, satisfying work results and can also increase my business turnover. Thank you so much to the Nexus team.",
  },
  {
    name: "Andrew Smith",
    job: "Founder Ulala",
    image: "/b.png",
    desc: "since branding with the oracle team i feel my business has a very fast and good development, everything also always goes through a process of discussion that is really valid",
  },
  {
    name: "Steve John",
    job: "CEO rumahku",
    image: "/c.png",
    desc: "I can say, this team is indeed extraordinarily perfect. I will do a lot of teamwork with this team next time. I do not hesitate to cooperate because the results are very satisfying",
  },
  ,
  {
    name: "Andrew Smith",
    job: "Founder Ulala",
    image: "/b.png",
    desc: "since branding with the oracle team i feel my business has a very fast and good development, everything also always goes through a process of discussion that is really valid",
  },
  {
    name: "Steve John",
    job: "CEO rumahku",
    image: "/c.png",
    desc: "I can say, this team is indeed extraordinarily perfect. I will do a lot of teamwork with this team next time. I do not hesitate to cooperate because the results are very satisfying",
  },
];

const Slider = () => {
  return (
    <div className="h-[550px] slider_bg  relative mt-9">
        <span className="red_circle bg-liver absolute hidden lg:block"></span>

      <EmblaCarousel slides={clientComments} options={OPTIONS} />
    </div>
  );
};

export default Slider;
