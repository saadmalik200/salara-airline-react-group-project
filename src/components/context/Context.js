import { createContext, useReducer } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    flightTab: true,
    checkinTab: false,
    statusTab: false,
    firstDate: "",
    secondDate: "",
    firstDateDay: "",
    secondDateDay: "",
    departure: "",
    arrival: "",
    radio: "One way",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "flight":
        console.log("flight", state);
        return {
          ...state,
          flightTab: true,
          checkinTab: false,
          statusTab: false,
        };
      case "checkIn":
        return {
          ...state,
          flightTab: false,
          checkinTab: true,
          statusTab: false,
        };
      case "status":
        return {
          ...state,
          flightTab: false,
          checkinTab: false,
          statusTab: true,
        };

      case "firstSecondDate":
        return {
          ...state,
          firstDate: action.firstDate,
          secondDate: action.secondDate,
          firstDateDay: action.firstDateDay,
          secondDateDay: action.secondDateDay,
        };

      case "departure":
        return { ...state, departure: action.payload };
      case "arrival":
        return { ...state, arrival: action.payload };

      case "radio":
        return {
          ...state,
          radio: action.payload,
          firstDate: "",
          secondDate: "",
        };

      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
