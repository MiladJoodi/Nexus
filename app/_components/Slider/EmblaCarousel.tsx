"use client";
import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: any;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

 
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla p-6 lg:p-8 flex flex-col gap-6">
      {/* slider header */}
      <div className="flex flex-col lg:flex-row justify-between">
        <p className="text-2xl text-center lg:text-left">What our clients are saying</p>
        <div className="hidden xl:flex gap-4">
          <button onClick={onPrevButtonClick} disabled={prevBtnDisabled} className="bg-liver flex justify-center items-center px-5 py-3 cursor-pointer">
            <Image
              src="/arrow.svg"
              width={38}
              height={10}
              alt="arrow"
              className="rotate-180"
            />
          </button>
          <button onClick={onNextButtonClick} disabled={nextBtnDisabled} className="bg-liver flex justify-center items-center px-5 py-3 cursor-pointer">
            <Image
              src="/arrow.svg"
              width={38}
              height={10}
              alt="arrow"
              className=""
            />
          </button>
        </div>
      </div>
      {/* slider header */}

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item: any, index: number) => (
            <div className="embla__slide p-5" key={index}>
              <div className="h-[300px] border bg-white p-10 flex flex-col rounded-xl gap-6 justify-between">
                <p className="text-sm leading-6">{item?.desc}</p>
                <div className="flex items-center gap-2">
                  <Image
                    src={item?.image}
                    width={54}
                    height={54}
                    alt="Picture of the author"
                    className=" object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg">{item?.name}</span>
                    <span className="text-sm text-gray-500">{item?.job}</span>
                  </div>
                </div>
              </div>

              {/* <div className="embla__slide__number">{index + 1}</div> */}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default EmblaCarousel;
