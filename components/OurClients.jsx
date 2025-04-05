import Image from "next/image";
import Typography from "./ui/Typography";
import {
  CLIENT1,
  CLIENT2,
  CLIENT3,
  CLIENT4,
  CLIENT5,
  CLIENT6,
  CLIENT7,
} from "@/constants";

const OurClients = () => {
  return (
    <section className="my-12">
      <Typography.h2 className="text-center">Our Clients</Typography.h2>
      <Typography.body2 className="text-center">
        We have been working with some Fortune 500+ clients
      </Typography.body2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 p-8 place-items-center content-center">
        <Image
          src={CLIENT1}
          alt="Client 1"
          width={48}
          height={48}
          className="hover:scale-110 transition-all duration-300"
        />
        <Image
          src={CLIENT2}
          alt="Client 2"
          width={48}
          height={48}
          className="hover:scale-110 transition-all duration-300"
        />
        <Image
          src={CLIENT3}
          alt="Client 3"
          width={48}
          height={48}
          className="hover:scale-110 transition-all duration-300"
        />
        <Image
          src={CLIENT4}
          alt="Client 4"
          width={48}
          height={48}
          className="hover:scale-110 transition-all duration-300"
        />
        <Image
          src={CLIENT5}
          alt="Client 5"
          width={48}
          height={48}
          className="hover:scale-110 transition-all duration-300"
        />
        <Image
          src={CLIENT6}
          alt="Client 6"
          width={48}
          height={48}
          className="hover:scale-110 transition-all duration-300"
        />
        <Image
          src={CLIENT7}
          alt="Client 7"
          width={48}
          height={48}
          className="hover:scale-110 transition-all duration-300"
        />
      </div>

      <div className="flex justify-center flex-col gap-4 my-8">
        <Typography.h2 className="text-center max-w-[24ch] mx-auto">
          Manage your entire community in a single system
        </Typography.h2>
        <Typography.body2 className="text-center">
          Who is Nexcent suitable for?
        </Typography.body2>
      </div>
    </section>
  );
};
export default OurClients;
