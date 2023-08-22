import React from "react";
import tempList from "./tempListService";


export default function createListOfSeriveCalls(day){
    const array = tempList.map((i) => {
        if(i.dag === day){
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
        } 
    })
    return array
}