/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useHistory } from "react-router-dom";
import "./Comp_Styles.css";

function Home() {
    const history = useHistory();
    return (
        <div>
            <h1>Are you searching for the wildlife tours and safari in Sri Lanka?</h1> 
            <h2>This is the right place ...</h2>
            <p>Travelling into the jungles of Sri Lanka with camps set deep within the national parks is yet an undiscovered treasure, whether you select 
                to stay and observe wildlife in your camp under a tree reading a book and sipping a drink of your choice waiting for them to appear, or 
                taking a short walk to the best spots within the area under the guidance of our experts. Tented Safari camping in Sri Lanka is an ideal way 
                to savour the splendour of the island from one of the many spots available for such wildlife safari camps. The game reserves of Sri Lanka 
                are best savoured from such a camp than trudging up and down from a hotel! You may select a tour from a wide range of tours or enjoy one 
                tailor made just for you. Observing nature and its diversity is best done in our opinion in one such camps, whether its fauna, flora, 
                bird watching or even interacting with the local indigenous people “Veddha’s”.</p>
            <img className="img_home_elephant" src="./images/elephant.jpg"/>
            <button type="button" className="btn btn-success" onClick={()=>history.push('/PlanYourTour')}>Plan Your Tour</button>
        </div>
    )
}

export default Home;
