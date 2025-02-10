import { StaticImageData } from "next/image";
import Image from "next/image";

interface CardProps {
  number: string;
  imageSrc: string | StaticImageData;
  altText: string;
  title: string;
  subtitle: string[];
  description: string[];
  imageOrder?: "left" | "right";
}

export const Card = ({
  number,
  imageSrc,
  altText,
  title,
  subtitle,
  description,
  imageOrder = "left",
}: CardProps) => {
  const isReverseOrder = imageOrder === "right";

  return (
    <div
      className={`relative flex flex-col ${
        isReverseOrder ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 md:gap-[123px] py-[40px] md:py-[90px] justify-center`}
    >
      <div className="absolute font-sans text-[#F3F7F4] text-[120px] md:text-[450px] font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 select-none">
        {number}
      </div>

      <div className="relative w-[150px] md:w-[370px] aspect-[150/200] md:aspect-[370/445] z-10">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div
        className={`relative w-full md:w-1/2 z-10 flex flex-col text-primary text-center md:text-left ${
          isReverseOrder ? "md:items-end" : "md:justify-center"
        }`}
      >
        <div>
          <h3 className="text-sm font-semibold tracking-[0.1em] uppercase mb-4">
            {title}
          </h3>
          <h4 className="font-sans text-xl md:text-[28px] font-semibold mb-6 leading-tight">
            {subtitle.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h4>
          <p className="text-sm md:text-base leading-relaxed">
            {description.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
