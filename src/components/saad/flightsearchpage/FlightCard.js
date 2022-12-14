import * as React from "react";

import { data } from "../../data/Data";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Radio from "@mui/material/Radio";
import { Context } from "../../context/Context";
import EconomyCardContainer from "./EconomyCardContainer";
import BusinessCardContainer from "./BusinessCardContainer";
import Itinerary from "./Itinerary";

const FlightCard = () => {
  const [selectedValue, setSelectedValue] = React.useState(false);

  const { state, dispatch } = React.useContext(Context);

  const [showCard, setShowCard] = React.useState({ id: "" });
  const [showEconomy, setEconomy] = React.useState({ id: "" });
  const [showBusiness, setShowBusiness] = React.useState({ id: "" });

  // console.log("Show Card", showCard);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedValue(event.target.value);
  };
  // console.log(selectedValue);

  const legSearch =
    state?.departure.slice(0, 3).toUpperCase() +
    "-" +
    state?.arrival.slice(0, 3).toUpperCase();

  const filteredArr = data.filter((item) => item.legId.includes(legSearch));

  return (
    <div>
      {filteredArr.map((item, i) => (
        <div key={i}>
          <div
            className={`text-[14px] flex ${
              (state?.itinerary?.id1 && showCard.id === i) ||
              (state?.economy?.id1 && showEconomy.id === i) ||
              (state?.business?.id1 && showBusiness.id === i)
                ? "pb-[0rem]"
                : "pb-[1rem]"
            }  `}
          >
            <div
              className={` flex items-center w-[498.41px] ${
                state?.itinerary?.id1 && showCard.id === i
                  ? "h-[120px]"
                  : "h-[105px] hover:shadow-2xl"
              }  px-[10px] py-[20px] bg-[#FFFFFF]  ${
                state?.itinerary?.id1 && showCard.id === i ? "" : "shadow-md"
              } `}
            >
              <div className="w-[277.44px] px-[10px] flex ">
                <div className="w-[114.83px] flex flex-col justify-center">
                  <p className="text-[16px] font-[700]">{item.departureTime}</p>
                  <p className="text-[14px] font-[700] text-[#697886]">
                    {item.departureAirportCode}
                  </p>
                  <p className="text-[10px] font-[700] text-[#697886]">
                    {item.departureAirportCity}
                  </p>
                </div>
                <div className="flex  flex-col justify-between items-center relative">
                  <p className="text-[10px]">Direct</p>
                  <div className="h-[1px] bg-[#878787] w-[150.44px] absolute top-[50%]"></div>
                  <img
                    src="https://www.turkishairlines.com/theme/img/carrierairlines/carriercode_tk.png"
                    alt=""
                  />
                </div>
                <div className="w-[114.83px] flex flex-col items-end justify-center">
                  <p className="text-[16px] font-[700]">{item.arrivalTime}</p>
                  <p className="text-[14px] font-[700] text-[#697886]">
                    {item.arrivalAirportCode}
                  </p>
                  <p className="text-[10px] font-[700] text-[#697886]">
                    {item.arrivalAirportCity}
                  </p>
                </div>
              </div>
              <div className="w-[97.48px] pr-[5px] text-center ">
                <p className="text-[10px] text-[#697886] font-[300]">
                  Flight duration
                </p>
                <p className="text-[#232B38] font-[700]">
                  {item.travelDuration}
                </p>
              </div>
              <div
                onClick={() => {
                  setShowCard({ id: i });
                  // console.log(showCard.id, i);
                  dispatch({
                    type: "itinerary",
                    payload: item,
                  });
                }}
                className="w-[103.48px]  pl-[10px] flex flex-col justify-center items-center"
              >
                <p className="text-[12px] text-[#697886] font-[700]">
                  Itinerary details
                </p>
                {showCard.id === i && state?.itinerary?.id1 ? (
                  <MdKeyboardArrowUp className="mx-auto w-[30px] h-[23px] " />
                ) : (
                  <MdKeyboardArrowDown className="mx-auto w-[30px] h-[23px] " />
                )}
              </div>
            </div>
            <div
              onClick={() => {
                setEconomy({ id: i });
                setSelectedValue("a");
                dispatch({
                  type: "economy",
                  payload: item,
                });
              }}
              className={`w-[220.8px] ml-[10px] pb-[15px] bg-white ${
                state?.economy?.id1 && showEconomy.id === i
                  ? "h-[120px]"
                  : "h-[105px] hover:shadow-2xl"
              } ${
                state?.economy?.id1 && showEconomy.id === i ? "" : "shadow-md"
              }  `}
            >
              <h2 className="bg-[#DFE4ED] w-[220.8px] pl-[10px] text-[12px] h-[22px] flex items-center font-[600]">
                ECONOMY
              </h2>
              <div className="flex items-center justify-between pl-[10px] pr-[2px]">
                <Radio
                  sx={{ marginTop: "1rem" }}
                  checked={
                    state?.economy?.id1 &&
                    showEconomy.id === i &&
                    selectedValue === "a"
                  }
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                <div className="pt-[10px]">
                  <p className="font-[600] text-[10px] text-[#697886]">
                    Per passenger
                  </p>
                  <p className="text-[16px] font-[700]">
                    EUR {item.ecoFlyPrice}
                  </p>
                </div>
                <div>
                  {showEconomy.id === i && state?.economy?.id1 ? (
                    <MdKeyboardArrowUp className="mx-auto w-[30px] h-[23px] " />
                  ) : (
                    <MdKeyboardArrowDown className="mx-auto w-[30px] h-[23px] " />
                  )}
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setShowBusiness({ id: i });
                setSelectedValue("b");
                dispatch({
                  type: "business",
                  payload: item,
                });
              }}
              className={`w-[220.8px] relative  ml-[10px]  pb-[15px] bg-white ${
                state?.business?.id1 && showBusiness.id === i
                  ? "h-[120px]"
                  : "h-[105px] hover:shadow-2xl"
              } ${
                state?.business?.id1 && showBusiness.id === i ? "" : "shadow-md"
              }  `}
            >
              <h2 className="bg-[#F7EAE4] w-[220.8px] pl-[10px] text-[12px] h-[22px] flex items-center font-[600]">
                BUSINESS
              </h2>
              <div className="flex items-center justify-between pl-[10px] pr-[2px]">
                <Radio
                  sx={{ marginTop: "1rem" }}
                  checked={
                    state?.business?.id1 &&
                    showBusiness.id === i &&
                    selectedValue === "b"
                  }
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
                <div className="pt-[10px]">
                  <p className="font-[600] text-[10px] text-[#697886]">
                    Per passenger
                  </p>
                  <p className="text-[16px] font-[700]">
                    EUR {item.businessPrice}
                  </p>
                </div>
                <div>
                  {showBusiness.id === i && state?.business?.id1 ? (
                    <MdKeyboardArrowUp className="mx-auto w-[30px] h-[23px] " />
                  ) : (
                    <MdKeyboardArrowDown className="mx-auto w-[30px] h-[23px] " />
                  )}
                </div>
              </div>
              <p className="text-[#FF0000] absolute bottom-[.3rem] left-[5.3rem] font-[700] text-[12px]">
                4 left at this price
              </p>
            </div>
          </div>
          {showCard.id === i && state?.itinerary?.id1 && (
            <Itinerary
              item={item}
              showPrices={true}
              setSelectedValue={setSelectedValue}
            />
          )}
          {showEconomy.id === i && state?.economy?.id1 && (
            <div className="p-[15px] bg-white mb-[15px] shadow-md">
              <EconomyCardContainer item={item} />
            </div>
          )}
          {showBusiness.id === i && state?.business?.id1 && (
            <div className="p-[15px] bg-white mb-[15px] shadow-md">
              <BusinessCardContainer item={item} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlightCard;
