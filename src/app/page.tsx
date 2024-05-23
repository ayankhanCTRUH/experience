import Image from "next/image";
import Link from "next/link";
import Button from "./Components/Button";

interface ExperienceType {
  imgUrl: string;
  heading: string;
  link: string
}

const Home = () => {

  const experiencesData: ExperienceType[] = [
    {
      imgUrl: "/images/dashboard/apple-store.webp",
      heading: "Apple Store",
      link: "https://appstore.ctruh.com/"
    },
    {
      imgUrl: "/images/dashboard/82e.webp",
      heading: "82E",
      link: "https://65b0f6a56744877861f82f7e--strong-trifle-a5da9b.netlify.app/"
    },
    {
      imgUrl: "/images/dashboard/GMC.webp",
      heading: "GMC",
      link: "https://gmcauto.ctruh.org/"
    },
    {
      imgUrl: "/images/dashboard/leap.png",
      heading: "Leap",
      link: "https://65e979255a96b3c6bbf1c8d5--peppy-parfait-052561.netlify.app/"
    },
    {
      imgUrl: "/images/dashboard/aaseyaverse.webp",
      heading: "Aaseya",
      link: "https://65e97b6fc55aadc73dcaba62--beautiful-kelpie-12acb9.netlify.app/"
    },
    {
      imgUrl: "/images/dashboard/real-estate.png",
      heading: "Real-estate",
      link: "https://ctruh-realestate-v1.netlify.app/"
    },
    // {
    //   imgUrl: "/images/dashboard/1bhk-apartment.webp",
    //   heading: "1bhk Apartment",
    //   link: "https://poc.ctruh.org/apartment/"
    // },
    // {
    //   imgUrl: "/images/dashboard/bike-configurator.webp",
    //   heading: "Bike Configurator",
    //   link: "https://poc-bike-configurator-ctruh-mobile.netlify.app/"
    // }
  ]
  return (
    <div className="mt-8 h-screen relative rounded-[24px] px-5 flex flex-col gap-5 max-w-[1440px] m-auto">
      <h4 className="dark:text-[--white-color] font-normal text-4xl non-italic leading-8">
        Welcome to Ctruh Experiences
      </h4>
      <p className="text-xl font-light text-[--background-color] dark:text-[#a9a9a9] w-[80%] leading-normal">
        Easily access all our active experiences with a click of a button
      </p>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 w-full mb-8">
          {experiencesData.map(data =>
            <div
              key={data.heading}
              className="experienceCard relative flex-col gap-3 flex p-5 text-2xl rounded-2xl cursor-pointer snap-start"
            >
              <Image
                src={data.imgUrl}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-[180px] rounded-[16px] object-cover"
              />
              <div className="flex flex-col gap-5 md:flex-row justify-between items-center mt-[10px] px-[12px] text-[16px] rounded-[8px]">
                <h1 className="opacity-[0.8] text-xl">{data.heading}</h1>
                <Link href={data.link} target="_blank">
                  <Button
                    content={"Enter Experience"}
                    type={"primary"}
                    size="small"
                    style={{
                      width: 140,
                      fontSize: 12,
                      padding: "8px 0",
                      display: "inline-block",
                    }}
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
