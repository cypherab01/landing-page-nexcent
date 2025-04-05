import {
  MEMBERSHIP,
  NATIONAL_ASSOCIATIONS,
  CLUBS_AND_GROUPS,
} from "@/constants";
import Image from "next/image";
import Typography from "@/components/ui/Typography";

const CommunityCard = ({ icon, title, alt }) => (
  <div className="p-6 rounded-md flex flex-col gap-4 items-center max-w-[300px] mx-auto shadow-xs">
    <div className="relative mb-4">
      <Image
        src={icon}
        alt={alt}
        width={48}
        height={48}
        className="object-contain"
      />
      <div className="absolute left-4 top-0 w-[50px] h-[49px] -z-10 bg-tint-500 rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl"></div>
    </div>
    <Typography.h3 className="text-center max-w-[10ch] mx-auto">
      {title}
    </Typography.h3>
    <Typography.body3 className="text-center">
      Our membership management software provides full automation of membership
      renewals and payments
    </Typography.body3>
  </div>
);

const Community = () => {
  return (
    <section className="my-12">
      <div className="flex flex-col items-center mb-8 text-center">
        <Typography.h2 className="inline-block max-w-[24ch] mx-auto mb-4">
          Manage your entire community in a single system
        </Typography.h2>
        <Typography.body2 className="inline-block mb-4">
          Who is Nexcent suitable for?
        </Typography.body2>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-12">
        <div className="md:self-start">
          <CommunityCard
            icon={MEMBERSHIP}
            title="Membership Organisations"
            alt="Membership"
          />
        </div>
        <div className="md:self-center">
          <CommunityCard
            icon={NATIONAL_ASSOCIATIONS}
            title="National Associations"
            alt="National Associations"
          />
        </div>
        <div className="md:self-end">
          <CommunityCard
            icon={CLUBS_AND_GROUPS}
            title="Clubs And Groups"
            alt="Clubs And Groups"
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
