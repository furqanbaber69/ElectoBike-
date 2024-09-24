"use client";
import { Calendar } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import { useState } from "react";

const CalendarComponent = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentMonth.setMonth(currentMonth.getMonth() + 1)
    );
    setCurrentMonth(nextMonth);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="md:w-full md:h-auto block md:px-[120px] ">
      <div className="bg-[url(/images/calculatorbg.png)] md:w-[1200px] md:h-[622px] flex items-center justify-center">
        {/* Left content */}
        <div className="md:w-[472px] md:h-[380px] flex flex-col items-start justify-between p-4">
          <h4 className="text-[48px] font-semibold leading-[56px]">
            <span className="text-primary">Book</span> Your Test{" "}
            <span className="text-primary">Ride.</span>
          </h4>
          <p className="text-[18px] font-[400] leading-[24px] text-neutral200">
            Don't just imagine the ride of your dreams, feel it for yourself
            with a test ride! Book now and experience the exhilaration, comfort,
            and performance of our cutting-edge vehicles. From the sleek curves
            to the responsive handling.
          </p>
          <button className="bg-primary text-neutral200 w-[168px] h-[48px] md:py-2 rounded-md">
            Book Your Ride
          </button>
        </div>

        {/* Right side - Calendar */}
        <div className="md:flex justify-center md:items-center md:w-[472px] md:h-[380px] rounded-lg ">
          <Calendar
            aria-label="Date (No Selected Date)"
            defaultValue={parseDate(currentMonth.toISOString().split("T")[0])}
            onSelectChange={handleDateChange}
            isSingleMonth={true}
            width="100%"
            height="100%"
            className="bg-neutral800 text-white px-10 py-10 rounded-lg "
            renderCell={({ date, isSelected }) => (
              <div
                className={`px-2 py-2 ${
                  isSelected
                    ? "!bg-primary text-white !rounded-full"
                    : "bg-transparent"
                } !flex !items-center !justify-center`}
              >
                {date.day}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
