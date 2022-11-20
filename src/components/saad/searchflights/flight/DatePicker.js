import React, { useContext, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Context } from "../../../context/Context";

const DatePickerFunc = () => {
  const { state, dispatch } = useContext(Context);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // const firstDate = startDate?.toString().slice(4, 10);
  // const secondDate = endDate?.toString().slice(4, 10);

  const firstDate = startDate?.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const secondDate = endDate?.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const firstDateDay = startDate?.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const secondDateDay = endDate?.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const onChangeSingle = (dates) => {
    const start = dates;
    setStartDate(start);
  };
  // console.log(state);

  useEffect(() => {
    dispatch({
      type: "firstSecondDate",
      firstDate: firstDate,
      secondDate: secondDate,
      startDate: startDate,
      endDate: endDate,
      firstDateDay: firstDateDay,
      secondDateDay: secondDateDay,
    });
  }, [
    firstDate,
    secondDate,
    startDate,
    endDate,
    firstDateDay,
    secondDateDay,
    dispatch,
  ]);

  // const calcDays = moment(endDate).diff(startDate, "days");

  return (
    <div>
      {state?.radio === "One way" ? (
        <DatePicker
          wrapperClassName="datePicker"
          onChange={onChangeSingle}
          startDate={startDate}
          selectsStart
          inline
        />
      ) : (
        <DatePicker
          wrapperClassName="datePicker"
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          monthsShown={2}
        />
      )}
    </div>
  );
};

export default DatePickerFunc;
