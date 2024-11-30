import Search from "./Search";
import { Place } from "./SearchResult";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import moment from "moment";

export function FlightSearch() {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const [source, setSource] = useState<Place>({
    city: "s1",
    code: "s1",
    airport: "s1",
  });
  const [isChoosingSource, setIsChoosingSource] = useState(false);
  const onChoosingSource = (source: Place) => {
    setSource(source);
    setIsChoosingSource(false);
  };
  const onChoosingSourceDropdown = () => {
    setIsChoosingDate(false);
    setIsChoosingDestination(false);
    setIsChoosingSource(true);
  };

  const [destination, setDestination] = useState<Place>({
    city: "d1",
    code: "d1",
    airport: "d1",
  });
  const [isChoosingDestination, setIsChoosingDestination] = useState(false);
  const onChoosingDestination = (destination: Place) => {
    setDestination(destination);
    setIsChoosingDestination(false);
  };
  const onChoosingDestinationDropdown = () => {
    setIsChoosingDate(false);
    setIsChoosingSource(false);
    setIsChoosingDestination(true);
  };

  const [isChoosingDate, setIsChoosingDate] = useState(false);
  const onChoosingDate = (date: Date): any => {
    setSelectedDate(date);
    setIsChoosingDate(false);
  };
  const onChoosingDateDropdown = () => {
    setIsChoosingSource(false);
    setIsChoosingDestination(false);
    setIsChoosingDate(true);
  };

  return (
    <div className="p-md shadow-gradient rounded-[50px] shadow border border-gray-200 bg-white">
      <div className="flex items-center justify-between">
        <div className="">
          <button
            className="w-[200px] hover:bg-slate-100 py-sm rounded-[50px] font-bold"
            onClick={onChoosingSourceDropdown}
          >
            {source?.city} ({source?.code})
          </button>
          {isChoosingSource && (
            <div className="absolute">
              <Search onChoosingPlace={onChoosingSource}></Search>
            </div>
          )}
        </div>
        <div>
          <span className="text-3xl">
            <IoIosArrowRoundForward />
          </span>
        </div>
        <div className="">
          <button
            className="w-[200px] hover:bg-slate-100 py-sm rounded-[50px] font-bold"
            onClick={onChoosingDestinationDropdown}
          >
            {destination?.city} ({destination?.code})
          </button>
          {isChoosingDestination && (
            <div className="absolute">
              <Search onChoosingPlace={onChoosingDestination}></Search>
            </div>
          )}
        </div>
        <div className="border-l-2 border-dotted border-gray-200">
          <button
            className="w-[250px] hover:bg-slate-100 py-sm rounded-[50px] font-bold"
            onClick={onChoosingDateDropdown}
          >
            {selectedDate
              ? moment(selectedDate).format("ddd, DD MMM")
              : "Select date"}
          </button>
          {isChoosingDate && (
            <div className="absolute">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={(date: any) => onChoosingDate(date)}
              />
            </div>
          )}
        </div>

        <div className="bg-sky-500 p-lg rounded-full h-[50px] w-[50px]">
          <button className="text-white">
            <IoSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
