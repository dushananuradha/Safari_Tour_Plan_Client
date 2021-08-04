import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PlanYourTour() {
    const[startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <form onSubmit={sendDate}>
                <h2>You're warmly welcome.. Let me help to assist in planning your safari tour..</h2>
                <label for="sel1">Select your preference</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Available tours</option>
                    <option value="Yala">Yala Safari</option>
                    <option value="Bundala">Bundala Safari</option>
                    <option value="Wilpatthu">Wilpatthu Safari</option>
                </select>
                <label for="sel1">Planned date</label>
                <DatePicker selected={startDate} onChange={(date)=>setStartDate(date)}/>
                <button type="submit" className="btn btn-primary">
                        Submit
                </button>
            </form>
        </div>
    )
}

export default PlanYourTour;
