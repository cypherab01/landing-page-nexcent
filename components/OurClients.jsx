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
      <Typography.h2 className="text-center mb-4">Our Clients</Typography.h2>
      <Typography.body2 className="text-center mb-4">
        We have been working with some Fortune 500+ clients
      </Typography.body2>
      <div className="flex flex-wrap justify-around items-center gap-8 w-full my-8">
        <Image
          src={CLIENT1}
          alt="Client 1"
          width={48}
          height={48}
          className="hover:scale-110 transition-all duration-300 "
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
    </section>
  );
};
export default OurClients;
