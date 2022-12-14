import React, { useContext, useState } from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
// import { useForm } from "react-hook-form";
import DatePickerFunc from "./DatePicker";
import { AiOutlineArrowRight } from "react-icons/ai";
import dates from "../../../images/booking.svg";
import { Context } from "../../../context/Context";
import { useNavigate } from "react-router-dom";

const CityDate = () => {
  const { state, dispatch } = useContext(Context);
  // console.log(state.departure, state.arrival);
  // handle event
  const navigate = useNavigate();

  const [showDate, setShowDate] = useState(false);

  // console.log(state);

  return (
    <div>
      {" "}
      <div className="flex gap-3 items-end mt-4 my-3">
        {/* departure section */}
        <div>
          <div>
            <div className="relative">
              <p className="font-bold text-[#647280] text-[11px] uppercase">
                flying from
              </p>
              <select
                onChange={(e) =>
                  dispatch({
                    type: "departure",
                    payload: e.target.value,
                    plane: false,
                  })
                }
                className={`w-[187.49px] relative h-[66px] text-right text-[16px] font-bold pr-[.5rem] rounded-lg ${" focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                defaultValue="Select Airport"
              >
                <option value="Select Airport" disabled hidden>
                  Select Airport
                </option>
                <option className=" text-left" value="Berlin">
                  {" "}
                  <p>Berlin Airport (BER)</p>
                </option>
                <option className=" text-left" value="Bremen">
                  {" "}
                  Bremen Airport (BRE)
                </option>
                <option className=" text-left" value="Munich">
                  {" "}
                  Munich Airport (MUN)
                </option>
                <option className=" text-left" value="Hamburg">
                  {" "}
                  Hamburg Airport (HAM)
                </option>
                <option className=" text-left" value="Istanbul">
                  {" "}
                  Istanbul Airport (IST)
                </option>
              </select>
              {state?.departure === "" && state?.showPlaneDeparture && (
                <FaPlaneDeparture className="text-2xl absolute left-5 top-10 " />
              )}
            </div>
          </div>
        </div>

        {/* arrival section */}
        <div>
          <div>
            <div className="relative">
              <p className="font-bold text-[11px] text-[#647280] uppercase">
                flying to
              </p>
              <select
                onChange={(e) =>
                  dispatch({
                    type: "arrival",
                    payload: e.target.value,
                    plane: false,
                  })
                }
                className={`w-[187.49px] relative h-[66px] text-right text-[16px] font-bold pr-[.5rem] rounded-lg ${" focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                defaultValue="Select Airport"
              >
                <option value="Select Airport" disabled hidden>
                  Select Airport
                </option>
                <option className=" text-left" value="Berlin">
                  {" "}
                  <p>Berlin Airport (BER)</p>
                </option>
                <option className=" text-left" value="Bremen">
                  {" "}
                  Bremen Airport (BRE)
                </option>
                <option className=" text-left" value="Munich">
                  {" "}
                  Munich Airport (MUN)
                </option>
                <option className=" text-left" value="Hamburg">
                  {" "}
                  Hamburg Airport (HAM)
                </option>
                <option className=" text-left" value="Istanbul">
                  {" "}
                  Istanbul Airport (IST)
                </option>
              </select>
              {state?.arrival === "" && state?.showPlaneArrival && (
                <FaPlaneArrival className="text-2xl absolute left-5 top-10 " />
              )}
            </div>
            <div></div>
          </div>
        </div>

        {/* date section */}
        <div className="flex space-x-2  ">
          {/* departure section */}
          <div onClick={() => setShowDate((prev) => !prev)}>
            <div>
              <div className="relative">
                <p className="font-bold text-[#647280] text-[11px] uppercase">
                  select date
                </p>
              </div>
              <div className="flex gap-[3rem] items-center rounded-[8px] w-[187px] h-[66px] bg-[#EFEFEF]">
                {state?.firstDate ? (
                  state?.radio !== "One way" ? (
                    <div className="flex  gap-3 justify-center pl-5">
                      <div>
                        <p className="text-[18px] font-bold">
                          {state?.firstDate}
                        </p>
                        <p className="text-[12px] text-center font-bold">
                          {" "}
                          {state?.firstDateDay}
                        </p>
                      </div>
                      <p className="text-[18px] font-bold">-</p>
                      <div>
                        <p className="text-[18px] font-bold">
                          {" "}
                          {state?.secondDate}
                        </p>
                        <p className="text-[12px] text-center font-bold">
                          {" "}
                          {state?.secondDateDay}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col   justify-center mx-auto">
                      <p className="text-[18px] font-bold">
                        {state?.firstDate}
                      </p>
                      <p className="text-[12px] text-center font-bold">
                        {" "}
                        {state?.firstDateDay}
                      </p>
                    </div>
                  )
                ) : (
                  <div className="flex pl-5 items-center justify-center gap-10">
                    <img className="w-[24px]" src={dates} alt={dates} />
                    <p className="text-[18px] font-bold">Date</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            style={{ zIndex: 5 }}
            className={`absolute top-[14rem] ${
              state?.radio === "One way" ? "left-[25rem]" : "left-[17rem]"
            } `}
          >
            {showDate && <DatePickerFunc />}
          </div>
        </div>

        {/* passenger section */}
        <div className="flex space-x-2">
          {/* adult section */}
          <div className="w-[175px] ">
            <div>
              <div className="relative">
                <p className="font-bold text-[#647280] text-[11px] uppercase">
                  {" "}
                  Passengers
                </p>
                <select className="w-full h-[66px] rounded-lg text-2xl pl-20">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <GiPerson className="text-2xl absolute left-5 top-10 " />
              </div>
              {/* <div>Error</div> */}
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/flightsearch")}
          className="flex cursor-pointer bg-[#E81932] rounded-[5px] px-[10px] w-[147.98px] h-[66px] items-center justify-between"
        >
          <p className="text-[14px] text-white font-[700]">Search flight</p>
          <AiOutlineArrowRight
            className="text-[1.4rem] font-bold"
            style={{ fill: "white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CityDate;
