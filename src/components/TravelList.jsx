import { useState } from "react";

function TravelList ({travelPlansData}) {
    const [plans, setPlans] = useState(travelPlansData);

    return (
        <div className="list">
            {plans.map((onePlan, id) => {
                return (
                <div className="card"> 
                   <img src='{onePlan.image}'/>
                   <div className='cardText'>
                   <h4 key="{onePlan.id}">{onePlan.destination}</h4>;
                   <p>{onePlan.description}</p>
                   <p><b>Price:</b> {onePlan.price} €</p>
                   </div> 
                </div>)
            })}
        </div>
    )
}

export default TravelList;