import React from "react";
import { useContext } from "react";
import { data } from "../../data/Data";
import { Context } from "../../context/Context";
import Barcode from "../../images/barcode.png";

const BoardingPass = () => {
  const { state, dispatch } = useContext(Context);

  const filterSearch = data.filter(
    (item) => +item.flightNumber == +state?.flightNumber
  )[0];

  return (
    <div className="flex flex-col justify-center relative items-center h-screen bg-[#232B38]">
      <h1 className="text-white text-[32px] absolute top-[5rem]">
        Your boarding pass is ready!
      </h1>
      <div className="h-[400px] w-[900px] rounded-xl bg-white relative">
        <div className="bp-header h-[50px] bg-[#BB3219] rounded-tl-lg rounded-tr-lg flex items-center px-3">
          <div className="leading-4">
            <p className="text-white font-[600]">SALARA</p>
            <p className="text-white font-[600]">AIRLINES</p>
          </div>
          <div
            className="search-nav-logo absolute left-[5.3rem]"
            style={{ padding: "13px 25px 12px 14px" }}
          >
            <img
              className="search-nav-img w-[35px] h-[35px]"
              src="https://www.turkishairlines.com/theme/img/logo-top-white-small-current.png"
              alt=""
            />
          </div>
          <div>
            <p className="text-white font-[600] absolute left-[11rem] top-[.8rem]">
              BOARDING PASS | BİNİŞ KARTI
            </p>
          </div>
          <div>
            <p className="text-white text-[10px] font-[600] absolute right-[18rem] top-[1.1rem]">
              A STAR ALLIANCE MEMBER TM
            </p>
          </div>
          <div className="leading-4">
            <div>
              <p className="text-white font-[600] text-[14px] absolute right-[6.2rem] top-[.3rem]">
                SALARA
              </p>
              <p className="text-white font-[600] text-[14px] absolute right-[6rem] top-[1rem]">
                AIRLINES
              </p>
            </div>
            <div
              className="search-nav-logo absolute right-[2.4rem] top-[-.7rem]"
              style={{ padding: "13px 25px 12px 14px" }}
            >
              <img
                className="search-nav-img w-[30px] h-[30px]"
                src="https://www.turkishairlines.com/theme/img/logo-top-white-small-current.png"
                alt=""
              />
            </div>

            <div>
              <p className="text-white font-[600] text-[11px] absolute right-[2rem] top-[2rem]">
                BOARDING PASS | BİNİŞ KARTI
              </p>
            </div>
          </div>
        </div>
        <div className="bp-body w-[700px] relative border-r-2 border-black">
          <div className="absolute left-[3rem] top-5">
            <img className="h-[280px]" src={Barcode} alt="" />
          </div>
          <div className="absolute top-3 left-[11rem] font-[600]">
            NAME: {state?.passengerFirstName.toUpperCase()}{" "}
            {state?.passengerLastName.toUpperCase()}
          </div>
          <div className="flex gap-[1.9rem] absolute top-9 right-[8.7rem]">
            <p>TK {state?.selectedflightobject?.flightNumber}</p>
            <p>
              {state?.firstDate.slice(3)} {state?.firstDate.slice(0, 3)}{" "}
              {state?.firstDateDay.slice(0, 3)}
            </p>
            <p>{state?.selectedflightobject?.departureTime}</p>
            <p>{state?.selectedflightobject?.departureAirportCode}</p>
            <p>{state?.selectedflightobject?.arrivalAirportCode}</p>
          </div>
          <div className="border-2 border-black h-[80px] w-[100px] flex justify-center items-center flex-col absolute top-20 left-[10.5rem]">
            <p className="text-[12px]">GATE/KAPI</p>
            <p className="text-[28px] font-[600]">
              {state?.selectedflightobject?.departureAirportGateNumber}
            </p>
          </div>
          <div className="border-2 border-black h-[80px] w-[150px] flex justify-center items-center flex-col absolute top-20 left-[19rem]">
            <p className="text-[12px]">BOARDING TIME</p>
            <p className="text-[12px]">BINIS SAATI</p>
            <p className="text-[28px] font-[600]">
              {state?.selectedflightobject?.departureBoardingTime}
            </p>
          </div>
          <div className="border-2 border-black h-[80px] w-[100px] flex justify-center items-center flex-col absolute top-20 left-[30.7rem]">
            <p className="text-[12px]">SEAT/KOLTUK</p>
            <p className="text-[28px] font-[600]">{state?.seatNumberDisplay}</p>
          </div>
          <div className="text-[28px] font-[600] absolute top-[11rem] left-[19.5rem]">
            <p className="tracking-widest">
              {state?.selectedflightobject?.arrivalAirportCity}
            </p>
          </div>
          <div className="flex ">
            <p className="font-[600] absolute top-[14.5rem] left-[10.5rem]">
              ET 2351297391015/1
            </p>
            <p className="text-[12px] absolute top-[14.5rem] left-[20.5rem]">
              GROUP:
            </p>
            <p className="text-[28px] absolute top-[13.5rem] left-[23.5rem]">
              B
            </p>
          </div>
          <div className="flex gap-3 absolute top-[15.8rem] left-[10.2rem] text-[14px]">
            <p>SEC</p>
            <p>NO:083</p>
            <p>BAG:0/0</p>
            <p>AGT: SR/P</p>
            <p>0:TK{state?.selectedflightobject?.flightNumber}</p>
          </div>
          <div className="absolute top-[18rem] left-[10.2rem] text-[10px]">
            <p>
              BOARDING ENDS 15MIN BEFORE DEPARTURE/UCAGA KABUL KALKIS SAATIME
              15DK KALA BITER.
            </p>
          </div>
          <div className="absolute top-[19.5rem] left-[13.8rem] text-[11px]">
            <p className="font-[600]">
              PLEASE WATCH SCREENS FOR GATE NUMBER AND BOARDING TIME.
            </p>
            <p>
              KAPI NUMARASI VE İNİŞ SAATLERİ İÇİN LÜTFEN EKRANLARI İZLEYİNİZ.
            </p>
          </div>
          <div className="side-body">
            <div>
              <p className="absolute top-3 left-[43rem] text-[10px] w-[10rem] font-[700]">
                NAME / ISIM
              </p>
              <p className="absolute top-[1.5rem] left-[43rem] w-[20rem]">
                {state?.passengerFirstName.toUpperCase()}{" "}
                {state?.passengerLastName.toUpperCase()}
              </p>
            </div>
            <div className="absolute top-[3.5rem] left-[43rem] w-[10rem]">
              <p className="text-[10px] font-[700]">FROM / NEREDEN</p>
              <p>{state?.selectedflightobject?.departureAirportCity}</p>
            </div>
            <div className="absolute top-[6rem] left-[43rem]">
              <p className="text-[10px] font-[700]">TO / NEREYE</p>
              <p>{state?.selectedflightobject?.arrivalAirportCity}</p>
            </div>
            <div className="flex gap-3 absolute top-[9.5rem] left-[43rem]">
              <p className="text-[10px] font-[600]">FLIGHT</p>
              <p className="text-[10px] font-[600]">CLASS</p>
              <p className="text-[10px] font-[600]">DATE</p>
              <p className="text-[10px] font-[600]">TIME</p>
            </div>
            <div className="flex">
              <p className="text-[10px] absolute top-[10.3rem] left-[43rem]">
                UÇUŞ
              </p>
              <p className="text-[10px] absolute top-[10.3rem] left-[46.3rem]">
                SINIF
              </p>
              <p className="text-[10px] absolute top-[10.3rem] left-[49.4rem]">
                TARİH
              </p>
              <p className="text-[10px] absolute top-[10.3rem] left-[52.1rem]">
                SAAT
              </p>
            </div>
            <div className="flex gap-2 absolute top-[11rem] left-[43rem] font-[600] w-[15rem]">
              <p>TK</p>
              <p>{state?.selectedflightobject?.flightNumber}</p>
              <p>Y</p>
              <p>{state?.firstDate}</p>
              <p>{state?.selectedflightobject?.departureTime}</p>
            </div>
            <div>
              <div className="border-2 border-black h-[60px] w-[90px] flex justify-center items-center gap-2 absolute top-[12.5rem] left-[43rem]">
                <p className="text-[12px]">GROUP</p>
                <p className="text-[26px]">B</p>
              </div>
              <div className="border-2 border-black h-[60px] w-[85px] flex justify-center items-center flex-col absolute top-[12.5rem] left-[49.2rem]">
                <p className="text-[10px] absolute top-[.4rem]">SEAT/KOLTUK</p>
                <p className="text-[28px] font-[600] absolute top-[.9rem]">
                  {state?.seatNumberDisplay}
                </p>
              </div>
              <div className="flex gap-4 absolute top-[16.9rem] left-[43.5rem]">
                <p className="text-[10px]">0/0</p>
                <p className="text-[10px]">083</p>
                <p className="text-[10px]">SR/P</p>
              </div>
              <div className="absolute top-[18.3rem] left-[43.5rem]">
                <p className="font-[600]">ET2351297391015/1</p>
              </div>
              <div className="absolute top-[20rem] left-[43.5rem] w-[10rem]">
                <p className="text-[10px]">A STAR ALLIANCE MEMBER</p>
              </div>
            </div>
            <span className="h-[348px] border-l-2 border-gray-400 border-dashed absolute right-[3rem]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardingPass;
