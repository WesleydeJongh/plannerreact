import React from "react";
import tempList from "./tempListService";


export default function AddButton(props){
    function handleClick(){
        tempList.push({
                 idKey: 10,
                 schipName: 'Fontaineblue9',
                 monteur: 'Gijs9',
                 time: '1e werk9',
                 dag: 'Maandag'
             })
    }

    return(
        <li className="addSign" onClick={handleClick}>
            addSign
        </li>
    )
}



// tempList.push({
//     idKey: 10,
//     schipName: 'Fontaineblue9',
//     monteur: 'Gijs9',
//     time: '1e werk9',
//     dag: 'Maandag'
// })


