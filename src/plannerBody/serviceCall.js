import React from "react";

export default function CreateListOfSeriveCalls(props){
    
    const array = props.content.map((i) => {
        if(i.dag === props.dayOftheWeek){
            return(
                    <li className="serviceCall">
                        <ul>
                            <li className="schipName commonStyling">
                                {i.schipName}
                            </li>
                            <li className="plannedMechanic commonStyling">
                                {i.monteur}
                            </li>
                            <li className="timeText commonStyling">
                                {i.time}
                            </li>
                        </ul>
                    </li>  
            )
        } else {
            
        }
    })
    return array
}

