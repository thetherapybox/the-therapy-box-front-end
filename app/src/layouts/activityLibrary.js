import React from "react"


/* 
    Feed this dummy data in, and we will hook it up to the actual data later.
    
*/
const EXAMPLE_DATA = [
        {
            img: "http://placekitten.com/g/328/194",
            activityBoxID: 1,
            title: "A Kitten Tour Of New Zealand",
            subTitle: "A Very Special Cativity Box",
            tags: [
                "cat",
                "kitten"
            ]
        },
        {
            img: "http://placekitten.com/g/328/194",
            activityBoxID: 2,
            title: "A Meowly Tour Of New Zealand",
            subTitle: "A Very Unique Cativity Box",
            tags: [
                "meowpocalypse",
                "cat"
            ]
        }
    ]


export default function ActivityLibrary() {

    /* 
        Design:
        https://www.figma.com/proto/IQSLstsDcsIhljMamKyJnJ/TherapyBox?node-id=970%3A903&scaling=min-zoom
        
        1. Build the layout using EXAMPLE_DATA.map() to build the repeatable components.
        2. Use Card and Typography components stylized to build the individual
        component that will repeat.
    */

    console.log(EXAMPLE_DATA)

    return (
        <div>Activity Library</div>
    )
}