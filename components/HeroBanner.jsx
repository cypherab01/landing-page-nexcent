import Typography from "@/components/ui/Typography";
import Image from "next/image";
import { ILLUSTRATION } from "@/constants";

const HeroBanner = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-12 items-center justify-between h-full gap-4 md:gap-8 py-8">
      <div className="w-full col-span-12 md:col-span-7 order-2 md:order-1">
        <div className="flex justify-center md:justify-start flex-col gap-6">
          <Typography.h1 className="text-[40px] md:text-[68px] leading-[50px] md:leading-[78px] text-center md:text-left max-w-[24ch] mx-auto">
            Lessons and insights{" "}
            <span className="text-primary">from 8 years</span>
          </Typography.h1>

          <Typography.body2 className="text-center md:text-left max-w-md mx-auto md:mx-0">
            Where to grow your business as a photographer: site or social media?
          </Typography.body2>

          <div className="flex justify-center md:justify-start">
            <button className="bg-primary text-silver px-6 py-3 rounded-md cursor-pointer hover:bg-primary/90 transition-colors ">
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
        <Image
          src={ILLUSTRATION}
          alt="Hero Banner"
          width={395}
          height={407}
          className="object-contain w-full max-w-[300px] md:max-w-[395px] h-auto"
          priority
        />
      </div>
    </div>
  );
};
export default HeroBanner;
