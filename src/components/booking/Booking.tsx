import {FormEventHandler, Dispatch, memo} from "react"
import BookingForm from "./BookingForm";

type BookingProps = {
    availableTimes: string[]
    dispatch: Dispatch<string>
    submitForm: FormEventHandler<HTMLFormElement>
}

const Booking = memo(function Booking({
    availableTimes,
    dispatch,
    submitForm
}: BookingProps) {
    return (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    )
})

export default Booking;