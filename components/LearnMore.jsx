import Typography from "@/components/ui/Typography";
import Image from "next/image";
import { MOBILE_LOGIN } from "@/constants";

const LearnMore = () => {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src={MOBILE_LOGIN}
            alt="Learn More"
            width={440}
            height={328}
            className="object-cover w-full h-auto"
            priority
          />
        </div>
        <div className="w-full md:w-1/2">
          <Typography.h2 className="mb-4 text-3xl md:text-4xl font-bold">
            The unseen of spending three years at Pixelgrade
          </Typography.h2>
          <Typography.body3 className="leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </Typography.body3>
          <button className="mt-6 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors duration-300 font-medium cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
