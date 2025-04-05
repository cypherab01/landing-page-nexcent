import Typography from "@/components/ui/Typography";
import Image from "next/image";
import { PANA } from "@/constants";

const Pana = () => {
  return (
    <section className="my-16">
      <div className="container mx-auto">
        <div className="flex items-center justify-around flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/5">
            <Image
              src={PANA}
              alt="Learn More"
              width={440}
              height={328}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
          <div className="w-full md:w-3/5 pr-8">
            <Typography.h2 className="mb-4 max-w-[25ch]">
              How to design your site footer like we did
            </Typography.h2>
            <Typography.body3 className="pr-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </Typography.body3>
            <button className="mt-6 px-6 py-2 bg-primary text-silver rounded-md hover:bg-primary/80 transition-colors duration-300 font-medium cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pana;
