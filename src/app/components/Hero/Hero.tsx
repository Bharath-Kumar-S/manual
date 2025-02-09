import Image from "next/image";
import bg from "@assets/bgbanner.png";
import icon from "@assets/icon.png";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="relative w-full min-h-[500px] md:min-h-[750px]">
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 flex items-center justify-start px-6 sm:px-10 md:px-[138px] text-white">
        <div className="max-w-lg mb-24 md:mb-40 mt-20 md:mt-0">
          <div className="mb-4 md:mb-44 mt-0 md:mt-[30px] relative w-[32px] h-[32px] md:w-[50px] md:h-[50px]">
            <Image
              src={icon}
              alt="Symbol Icon"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h1 className="font-sans text-2xl sm:text-4xl md:text-7xl font-medium text-left text-[#0B3B3C] leading-tight">
            <span className="block">Be good</span>
            <span className="block">to yourself</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 text-left text-[#0B3B3C] leading-relaxed">
            <span className="block md:inline">
              We’re working around the clock{" "}
            </span>
            <span className="block md:inline">
              to bring you a holistic approach{" "}
            </span>
            <span className="block md:inline">to your wellness. </span>
            <span className="block md:inline">From top to bottom, </span>
            <span className="block md:inline">inside and out.</span>
          </p>
          <Link href="/quiz">
            <button className="uppercase mt-8 px-8 py-4 text-xs sm:text-sm bg-[#7E0707] text-white hover:bg-[#aa3333] transition-colors duration-200 font-sans font-bold tracking-[0.15em] rounded-none">
              Take the quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
