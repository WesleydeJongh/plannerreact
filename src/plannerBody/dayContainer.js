import React from "react";
import CreateListOfSeriveCalls from "./serviceCall";
import AddButton from "./addServiceCall";


export default function CreateBodyPlanner(props){
    
    const daysOfWeekArray = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];

    const CompleteWeek = daysOfWeekArray.map((i) =>{ {/*FOR every (i in daysOfWeekArray), every i is a list - with every serviceCall a list element*/}
        return(
                 <ul id={i}> {/*ID, so navBar can link to it. */}
                    {i} {/* top of the dayContainer add the name of the day.*/}
                    <CreateListOfSeriveCalls dayOftheWeek={i}  content={props.content} />
                    <AddButton content={props.content} />
                </ul>
        )
    })

    console.log(CompleteWeek) 
    return (
        <div className="plannerBody">
                {CompleteWeek}
        </div>
        )
}




