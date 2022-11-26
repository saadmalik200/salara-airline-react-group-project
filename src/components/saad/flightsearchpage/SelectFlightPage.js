import React, { useContext, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Context } from "../../context/Context";
import SearchNav from "../../lala/header/SearchNav";
import { FiEdit } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Itinerary from "./Itinerary";
import { MdArrowForwardIos } from "react-icons/md";
import slctbtn from "../../images/slctbtn.png";

const SelectFlightPage = () => {
  const { state, dispatch } = useContext(Context);

  const [showItinerary, setShowItinerary] = useState(false);

  //   console.log(state?.selectedflightobject);
  const navigate = useNavigate();
  return (
    <div>
      <SearchNav />
      <div className="px-[15px] pt-[30px] pb-[5px] w-[1024px] mx-auto mb-[20px] ">
        <div className="flex items-center gap-3 mb-[10px]">
          <p className="bg-[#E81932] text-[#FFFFFF] text-[14px] pt-[7px] text-center pb-[5px] w-[222.23px] font-[700] leading-[15px] ">
            OUTBOUND FLIGHT
          </p>
          <span className="border-l border-2 border-gray-500 w-[2px] h-[26px] mx-[10px] bg-gray-500"></span>
          <div className=" flex items-center text-[#0665E4] font-[500] text-[15px] ">
            <FiEdit className="h-[26px] w-[26px]" />
            <p
              onClick={() => navigate(-1)}
              className="cursor-pointer  ml-[5px] mt-[2px] font-[500] hover:underline"
            >
              Change flight
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[28px] font-[300]">
            {state?.departure} to {state?.arrival} on {state?.firstDateDay},{" "}
            {state?.startDate?.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
      <div className="px-[15px]  pb-[5px] w-[1024px] mx-auto mb-[20px] ">
        <div className="flex gap-1 text-[16px] text-[#99A5B4] font-[700]">
          <p>Fare rules</p>
          <MdKeyboardArrowDown className=" w-[30px] h-[23px] " />
        </div>
      </div>

      {/* Itinerary Part */}

      <div className="px-[15px]  pb-[5px] pt-[15px] w-[1024px]  mx-auto mb-[20px] flex items-center ">
        <div className="flex shadow h-[105px]">
          <div className="flex items-center px-[10px] py-[20px] relative ">
            <FaCheckCircle className="absolute left-[-15px] top-[2.4rem] text-[#51a351] w-[30px] h-[32px]" />
            <div className="w-[358.57px] px-[10px] flex ">
              <div className="w-[169.3px] flex flex-col justify-center">
                <p className="text-[16px] font-[700]">
                  {state?.selectedflightobject?.departureTime}
                </p>
                <p className="text-[14px] font-[700] text-[#697886]">
                  {state?.selectedflightobject?.departureAirportCode}
                </p>
                <p className="text-[10px] font-[700] text-[#697886]">
                  {state?.selectedflightobject?.departureAirportCity}
                </p>
              </div>
              <div className="flex  flex-col justify-between items-center relative">
                <p className="text-[10px]">Direct</p>
                <div className="h-[1px] bg-[#878787] w-[230.44px] absolute top-[50%]"></div>
                <img
                  src="https://www.turkishairlines.com/theme/img/carrierairlines/carriercode_tk.png"
                  alt=""
                />
              </div>
              <div className="w-[169.3px] flex flex-col items-end  justify-center">
                <p className="text-[16px] font-[700]">
                  {state?.selectedflightobject?.arrivalTime}
                </p>
                <p className="text-[14px] font-[700] text-[#697886]">
                  {state?.selectedflightobject?.arrivalAirportCode}
                </p>
                <p className="text-[10px] font-[700] text-[#697886]">
                  {state?.selectedflightobject?.arrivalAirportCity}
                </p>
              </div>
            </div>
            <div className="w-[126.52px] pr-[5px] text-center ">
              <p className="text-[10px] text-[#697886] font-[300]">
                Flight duration
              </p>
              <p className="text-[#232B38] font-[700]">
                {state?.selectedflightobject?.travelDuration}
              </p>
            </div>

            <div
              onClick={() => {
                setShowItinerary(!showItinerary);
              }}
              className=" border-l border-r  border-gray-300 py-[17px] w-[241.04px] justify-center flex items-center gap-2 text-[12px] font-[700] "
            >
              <p>ECONOMY</p>
              <p>ExtraFly</p>
            </div>
          </div>
          <div
            onClick={() => {
              setShowItinerary(!showItinerary);
            }}
            className="w-[237.85px] hover:underline pl-[10px] ml-[10px] flex  justify-end items-center"
          >
            <p className="text-[14px] text-[#697886] font-[700]">
              Itinerary details
            </p>
            {showItinerary ? (
              <MdKeyboardArrowUp className=" w-[30px] h-[23px] " />
            ) : (
              <MdKeyboardArrowDown className=" w-[30px] h-[23px] " />
            )}
          </div>
        </div>
      </div>

      <div className=" pb-[5px] w-[1024px] mx-auto mb-[30px] ">
        {showItinerary && (
          <Itinerary item={state?.selectedflightobject} showPrices={false} />
        )}
      </div>

      <div className="px-[15px]  pb-[5px] w-[1024px] mx-auto mb-[20px] flex gap-[10px] ">
        <div>
          <img
            src="https://cdn.turkishairlines.com/m/717eafaa0fc3c36a/original/Ekstra-koltuk-guncel-gorsel.jpg"
            alt=""
          />
        </div>
        <div className="py-[10px] w-[689.4px] pl-[20px] bg-[#f9f9f9]">
          <h4 className="text-[16px] font-[700]">
            More personal space with the extra seat
          </h4>
          <p className="text-[12px] mt-[10px] font-[500]">
            Don't miss the extra seat opportunity that will be valid on all your
            flights!
          </p>

          <div className="text-[12px] mt-[10px] font-[300] flex items-center gap-3">
            <div className="flex items-center">
              <FaCheckCircle className="text-[#51a351]  mr-[5px]" />
              <p>Double your comfort</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-[#51a351]  mr-[5px]" />

              <p>Increase your baggage allowance for free</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-[#51a351]  mr-[5px]" />

              <p>Choose your seat for free</p>
            </div>
          </div>
          <hr className="mt-[15px] mb-[10px]" />
          <div className="h-[39.7px] flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#E2001B]">
              <p className="text-[14px] font-[700]">Terms and Conditions</p>
              <MdArrowForwardIos />
            </div>
            <div>
              <img src={slctbtn} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectFlightPage;
