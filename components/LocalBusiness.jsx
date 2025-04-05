import Image from "next/image";
import Typography from "./ui/Typography";
import { MEMBERS, CLUBS, EVENTS_BOOKING, PAYMENT } from "@/constants";

const LocalBusiness = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2 px-8">
          <Typography.h2 className="mb-4">
            <div className="max-w-[14ch]">Helping a local</div>
            <span className="text-primary">business reinvent itself</span>
          </Typography.h2>
          <Typography.body2 className="mb-4">
            We reached here with our hard work and dedication
          </Typography.body2>
        </div>
        <div className="w-full md:w-1/2 px-8">
          <div className="card-container grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
            <div className="card flex items-center gap-4">
              <Image src={MEMBERS} alt="members" width={45} height={45} />
              <div className="flex flex-col gap-2">
                <Typography.h3>2,245,341</Typography.h3>
                <Typography.body2>Members</Typography.body2>
              </div>
            </div>
            <div className="card flex items-center gap-4">
              <Image src={CLUBS} alt="clubs" width={45} height={45} />
              <div className="flex flex-col gap-2">
                <Typography.h3>46,328</Typography.h3>
                <Typography.body2>Clubs</Typography.body2>
              </div>
            </div>
            <div className="card flex items-center gap-4">
              <Image
                src={EVENTS_BOOKING}
                alt="events-booking"
                width={45}
                height={45}
              />
              <div className="flex flex-col gap-2">
                <Typography.h3>828,867</Typography.h3>
                <Typography.body2>Events Bookings</Typography.body2>
              </div>
            </div>
            <div className="card flex items-center gap-4">
              <Image src={PAYMENT} alt="payment" width={45} height={45} />
              <div className="flex flex-col">
                <Typography.h3>1,926,436</Typography.h3>
                <Typography.body2>Payments</Typography.body2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LocalBusiness;
