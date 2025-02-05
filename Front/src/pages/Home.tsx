import Footer from "@/common/Footer";
import Header from "../common/Header";
import Body from "../components/Body";

export default function Home() {
  const userName = "Lamintsoa ANDRIAMIHAJA";
  return (
    <div className="flex flex-col w-full h-full items-center bg-white">
      <Header userName={userName} />
      <div className="w-full xl:mt-24 lg:mt-24 md:mt-24 sm:mt-20 justify-center text-center xs:mt-20">
        <h1
          className="text-dynamic-5xl font-bold"
          style={{ fontFamily: "Roboto Flex, sans-serif" }}
        >
          <span className="text-black">Hello, {userName}, </span>{" "}
          <span className="text-gray-500">Start planning today</span>
        </h1>
      </div>
      <div className="flex justify-center w-full xl:mt-8 lg:mt-5 md:mt-4 sm:mt-4 xs:mt-4">
        <Body />
      </div>
      <div className="absolute  bottom-4 left-4">
        <span className="sm:hidden">xs</span>
        <span className="hidden sm:block md:hidden">sm</span>
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block xl:hidden">lg</span>
        <span className="hidden xl:block md:hidden">xl</span>
      </div>
      <Footer userName={userName} />
    </div>
  );
}
