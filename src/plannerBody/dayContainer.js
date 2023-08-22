import React from "react";
import createListOfSeriveCalls from "./serviceCall";



export default function CreateBodyPlanner(){
    const daysOfWeekArray = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];

    const CompleteWeek = daysOfWeekArray.map((i) =>{ {/*FOR every (i in daysOfWeekArray), every i is a list - with every serviceCall a list element*/}
        return(
                 <ul id={i}> {/*ID, so navBar can link to it. */}
                    {i} {/* top of the dayContainer add the name of the day.*/}
                    {createListOfSeriveCalls(i)} {/* call the list of service entries, add the 'day' into the function call to filter*/}
                    <li className="addSign">
                        addSign
                    </li>
                </ul>
        )
    })


    return (
        <div className="plannerBody">
                {CompleteWeek}
        </div>
        )
}


