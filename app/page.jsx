import Header from "@/components/Header";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen hero bg-silver">
        <Header />
        <div className="container h-[calc(100vh-60px)]">
          <div className="flex items-center justify-center h-full">
            <Button label="Get Started" size="normal" variant="tertiary" />
          </div>
        </div>
      </div>
    </>
  );
}
