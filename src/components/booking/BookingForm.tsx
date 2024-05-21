import { FormEventHandler, Dispatch, useState } from "react"

type BookingFormProps = {
    availableTimes: string[]
    dispatch: Dispatch<string>
    submitForm: FormEventHandler<HTMLFormElement>
}

const occasions = [
  "Birthday",
  "Anniversary"
]

const BookingForm = ({
    availableTimes,
    dispatch,
    submitForm    
}: BookingFormProps) => {
    const [occasion, setOccasion] = useState<string>("");
    const [guests, setGuests] = useState<number>(0);
    const [date, setDate] = useState<string>("");
    const [times, setTimes] = useState<string>("")
 
    const handleSumbit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (occasion.length === 0 || !occasions.find((o) => o === occasion)) {
          alert("Set Occasion")
          return;
        }
        if (!guests) {
          alert("Set guests")
          return;
        }
        if (!date || date.length === 0) {
          alert("Set Date")
          return;
        }
        if (!times || times.length === 0) {
          alert("Set Times")
          return;
        }
        submitForm(e);
    }
 
    const handleChange = (value: string) => {
     setDate(value || "");
     dispatch(value);
    }
 
   return (
     <header>
       <section>
         <form onSubmit={handleSumbit}>
           <fieldset>
             <div>
               <label htmlFor="book-date">Choose Date</label>
               <input id="book-date" value={date}
                      onChange={(e) => handleChange(e.target.value)}
                      type="date" required/>
             </div>
             <div>
               <label htmlFor="book-time">Choose Time</label>
               <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                    <option value="">Select a Time</option>
                    {availableTimes.map(availableTime => <option key={availableTime}>{availableTime}</option>)}
               </select>
             </div>
             <div>
               <label htmlFor="book-guests">Number of Guests</label>
               <input id="book-guests" min="1" value={guests}
                      onChange={(e) => {setGuests(Number(e.target.value || 0))}} type={"number"}
                      placeholder="0"
                      max={10}
                      required />
             </div>
             <div>
               <label htmlFor="book-occasion">Occasion</label>
               <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                 <option value="">Select an Option</option>
                 {occasions.map(o => <option key={o}>{o}</option>)}
               </select>
             </div>
             <div>
               <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"}/>
             </div>
           </fieldset>
         </form>
       </section>
     </header>
   );
}

export default BookingForm