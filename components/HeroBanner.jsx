import Typography from "@/components/ui/Typography";
import Image from "next/image";
import { ILLUSTRATION } from "@/constants";

const HeroBanner = () => {
  return (
    <section className="container mx-auto py-16 md:py-24 px-4 md:px-0 bg-silver">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="flex flex-col gap-6">
            <Typography.h1 className="text-center md:text-left font-bold">
              <span className="block mb-2">Lessons and insights</span>
              <span className="text-primary">from 8 years</span>
            </Typography.h1>

            <Typography.body2 className="text-gray text-center md:text-left">
              Where to grow your business as a photographer: site or social
              media?
            </Typography.body2>

            <div className="flex justify-center md:justify-start mt-4">
              <button className="bg-primary text-white px-8 py-3 rounded-md font-medium shadow-sm hover:bg-shade-100 transition-colors duration-300">
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src={ILLUSTRATION}
            alt="Business Growth Illustration"
            width={500}
            height={500}
            className="object-contain w-full max-w-[350px] md:max-w-[500px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
