import { useEffect } from "react";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          {/* Show only on desktop */}
          <h1 className="absolute top-[30%] right-[10%] hidden md:block">
            <span className="text-[#EAF2FA] mb-6 block">
              {hero.firstName} <br />
            </span>
            <span className="text-dark_primary m-12">{hero.middleName} </span>
            <br />
            <span className="text-[#EAF2FA] mt-6 block">{hero.LastName} </span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
                ${i === 1 && " flex-row-reverse text-right"}`}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Show only on mobile, below the image */}
        <h1 className="mt-6 md:hidden text-center text-dark_primary font-light">
            {hero.firstName}{" "}
          <span className="text-[#EAF2FA]">{hero.middleName} </span><br/>
            {hero.LastName}
        </h1>

        {/* sec col */}
        <div className="md:h-[50rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
