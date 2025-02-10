import { Card } from "./Card";
import hairLoss from "@/assets/hairloss.png";
import erec from "@/assets/erec-photo.png";

export const Cards = () => {
  return (
    <section
      className="w-full bg-white px-6 md:px-[160px] py-8 md:py-0"
      aria-labelledby="cards-heading"
    >
      <h2
        id="cards-heading"
        className="font-sans text-[20px] md:text-[40px] font-normal leading-tight tracking-[-0.03em] text-center text-primary md:pt-[70px]"
      >
        What we can help with
      </h2>

      <Card
        number="01"
        imageSrc={hairLoss}
        altText="Hair loss, a common condition affecting many people, with potential treatments"
        title="Hair Loss"
        subtitle={["Hair loss needn’t be", "irreversible. We can help!"]}
        description={[
          "We’re working around the clock to bring you a",
          "holistic approach to your wellness. From top to",
          "bottom, inside and out.",
        ]}
        imageOrder="left"
      />

      <Card
        number="02"
        imageSrc={erec}
        altText="Erectile dysfunction, a condition that affects many people, with various treatment options available"
        title="Erectile dysfunction"
        subtitle={[
          "Erections can be a tricky",
          "thing. But no need to feel",
          "down!",
        ]}
        description={[
          "We’re working around the clock to bring you a",
          "holistic approach to your wellness. From top to",
          "bottom, inside and out.",
        ]}
        imageOrder="right"
      />
    </section>
  );
};
