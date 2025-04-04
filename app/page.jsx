import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="hero bg-silver w-screen flex flex-col items-center justify-center">
        <Header />
        <div className="container h-[calc(100vh-60px)]">
          <div className="flex items-center justify-center h-full">hi</div>
        </div>
      </div>
    </>
  );
}
