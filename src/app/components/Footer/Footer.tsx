import Image from "next/image";
import icon from "@assets/icon.png";
import facebook from "@assets/facebook.png";
import google from "@assets/google.png";
import twitter from "@assets/twitter.png";

const footerLinks = [
  {
    title: "Product",
    links: ["Popular", "Trending", "Guided", "Products"],
  },
  {
    title: "Company",
    links: ["Press", "Mission", "Strategy", "About"],
  },
  {
    title: "Info",
    links: ["Support", "Customer Service", "Get Started"],
  },
];

const socialIcons = [
  { src: facebook, alt: "Facebook" },
  { src: google, alt: "Google" },
  { src: twitter, alt: "Twitter" },
];

const FooterLinkSection = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => (
  <div>
    <h4 className="font-bold text-primary mb-6 uppercase text-xs tracking-widest">
      {title}
    </h4>
    <ul className="space-y-5 text-base font-normal leading-[30px] text-primary">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="hover:text-primary/70 transition-colors">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcons = () => (
  <div>
    <h4 className="font-bold text-primary mb-6 uppercase text-xs tracking-widest">
      Follow Us
    </h4>
    <div className="flex flex-wrap gap-3 md:gap-4">
      {socialIcons.map(({ src, alt }) => (
        <a
          key={alt}
          href="#"
          className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition-opacity"
        >
          <Image
            src={src}
            alt={alt}
            className="w-4 h-4 md:w-5 md:h-5 object-contain"
          />
        </a>
      ))}
    </div>
  </div>
);

export const Footer = () => {
  return (
    <footer className="bg-[#E8EFE9] pt-16">
      <div className="container mx-auto px-6 sm:px-10 md:px-[160px]">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="relative w-8 h-8 md:w-12 md:h-12">
              <Image src={icon} alt="Logo" fill className="object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {footerLinks.map((section) => (
              <FooterLinkSection key={section.title} {...section} />
            ))}
            <SocialIcons />
          </div>
        </div>

        <div className="border-t mt-12 md:mt-20 border-primary text-center">
          <p className="text-base py-12 text-primary">
            © 2021 Manual. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
