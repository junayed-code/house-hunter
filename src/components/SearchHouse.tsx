"use client";

import { useState } from "react";
import { SearchIcon, CalendarIcon, PeopleIcon } from "./shared/icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SearchHouse() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 max-w-5xl w-full flex flex-col lg:flex-row rounded-md px-5 gap-y-2">
      <div className="relative flex-grow rounded-md lg:rounded-e-none overflow-hidden">
        <SearchIcon className="absolute text-[26px] top-1/2 -translate-y-1/2 left-4 text-slate-500" />
        <input
          id="search"
          type="search"
          name="search"
          // onChange={handleSearch}
          // defaultValue={params.get("search") || ""}
          className="bg-white p-[14px_18px_14px_60px] text-base leading-none border-0 outline-none w-full"
          placeholder="Where do you want to go?"
        />
      </div>
      <div className="relative [&>div]:block">
        <CalendarIcon className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none z-10 -mt-[1px] text-slate-700" />
        <DatePicker
          selected={date}
          onChange={(date: Date) => setDate(date)}
          dateFormat="dd MMM, yyyy"
          className="outline-none p-[9.25px_16px_9.25px_40px] text-lg bg-white text-slate-700 cursor-pointer w-full rounded-md lg:rounded-none"
        />
      </div>
      <div className="flex items-center gap-x-2 px-3 py-[11.25px] flex-grow cursor-pointer bg-white rounded-md lg:rounded-s-none">
        <PeopleIcon className="text-xl text-slate-700" />
        <span>2 Adutls</span>
      </div>
    </div>
  );
}

export default SearchHouse;
