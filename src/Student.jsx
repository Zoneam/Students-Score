import React from "react";
import Score from "./Score.jsx"

export default function Student({students}){
    return(
            students.map((st,idx) => {
                return (
                    <>
                        <h1>{st.name}</h1>
                        <h4>{st.bio}</h4>
                        {
                        st.scores.map((score,index)=> <Score score={score}/>)
                    }
                    </>
                )
            })
    )
}