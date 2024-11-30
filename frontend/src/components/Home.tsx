import { FlightSearch } from "./FlightSearch";
import { Header } from "./Header";
import logo from "/logo.png";
export function Home() {
  return (
    <div className="flex flex-col ">
      <div>
        <Header></Header>
      </div>
      <div className="relative w-full order-1 h-[200px]">
        <img
          className="absolute rounded-[50px] top-[-40px]"
          src={process.env.PUBLIC_URL + "home-img.avif"}
        ></img>
      </div>
      <div className="w-3/4 mx-auto relative z-1">
        <div className="">
          <div>Oneway</div>
          <FlightSearch></FlightSearch>
        </div>
      </div>
    </div>
  );
}
