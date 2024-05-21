import { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./booking/Booking";
import ConfirmedBooking from "./booking/ConfirmedBooking";
import Header from "./headers/MainHeader";
import {updateTimes, initialState, submitAPI} from "./../helpers/booking"

const Contant = () => {
    const [state, dispatch] = useReducer(updateTimes, initialState);
    const navigate = useNavigate();
    function submitForm (formData: any) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }
    return (
        <main>
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/booking" element={<Booking availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm}/>} />
            <Route path="/confirmed" element={<ConfirmedBooking/> } />
        </Routes>
    </main>
    )
}
export default Contant