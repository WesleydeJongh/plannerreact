import React from "react";
import tempList from "./tempListService";



export default function CreateBodyPlanner(){
    return(
        <div className="plannerBody">
             <ul id="Maandag"> {/*ID monday, so navBar can link to it. */}
                Maandag
                <li className="serviceCall">
                    <li className="schipName commonStyling">
                        {tempList[0].schipName}
                    </li>
                    <li className="plannedMechanic commonStyling">
                        {tempList[0].monteur}
                    </li>
                    <li className="timeText commonStyling">
                        {tempList[0].time}
                    </li>
                </li>

                <li className="serviceCall">
                    <li className="schipName commonStyling">
                        {tempList[1].schipName}
                    </li>
                    <li className="plannedMechanic commonStyling">
                        {tempList[1].monteur}
                    </li>
                    <li className="timeText commonStyling">
                        {tempList[1].time}
                    </li>
                </li>

                <li className="serviceCall">
                    <li className="schipName commonStyling">
                        {tempList[2].schipName}
                    </li>
                    <li className="plannedMechanic commonStyling">
                        {tempList[2].monteur}
                    </li>
                    <li className="timeText commonStyling">
                        {tempList[2].time}
                    </li>
                </li>

                <li className="serviceCall">
                    <li className="schipName commonStyling">
                        {tempList[3].schipName}
                    </li>
                    <li className="plannedMechanic commonStyling">
                        {tempList[3].monteur}
                    </li>
                    <li className="timeText commonStyling">
                        {tempList[3].time}
                    </li>
                </li>

                <li className="addSign">
                    addSign
                </li>
            </ul>

            <ul id="Dinsdag"> {/*ID monday, so navBar can link to it. */}
                Dinsdag
                <li className="serviceCall">
                    <li className="schipName commonStyling">
                        {tempList[0].schipName}
                    </li>
                    <li className="plannedMechanic commonStyling">
                        {tempList[0].monteur}
                    </li>
                    <li className="timeText commonStyling">
                        {tempList[0].time}
                    </li>
                </li>

                <li className="serviceCall">
                    <li className="schipName commonStyling">
                        {tempList[1].schipName}
                    </li>
                    <li className="plannedMechanic commonStyling">
                        {tempList[1].monteur}
                    </li>
                    <li className="timeText commonStyling">
                        {tempList[1].time}
                    </li>
                </li>

                <li className="serviceCall">
                    <li className="schipName commonStyling">
                        {tempList[2].schipName}
                    </li>
                    <li className="plannedMechanic commonStyling">
                        {tempList[2].monteur}
                    </li>
                    <li className="timeText commonStyling">
                        {tempList[2].time}
                    </li>
                </li>

                <li className="serviceCall">
                    <li className="schipName commonStyling">
                        {tempList[3].schipName}
                    </li>
                    <li className="plannedMechanic commonStyling">
                        {tempList[3].monteur}
                    </li>
                    <li className="timeText commonStyling">
                        {tempList[3].time}
                    </li>
                </li>
                
                <li className="addSign">
                    addSign
                </li>
            </ul>
        </div>
    )
}


