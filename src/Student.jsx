import React from "react";
import Score from "./Score.jsx"
import { CCard, CCardHeader, CCardBody, CBadge } from '@coreui/react';
export default function Student({students}){
    return(
            students.map((st,idx) => {
                return (
            
                            <CCard key={idx} style={{ width: "400px", flexdirection:"row", margin:"35px" }}>
                            <h1><CBadge color="warning" shape="rounded-pill">{st.name}</CBadge></h1>
                            <CCardBody>
                                <blockquote className="blockquote mb-0">
                                <p>{st.bio}</p>
                                <footer className="blockquote-footer">
                                    {
                                        st.scores.map((score,index)=> <Score key={index} score={score}/>)
                                    }
                                </footer>
                                </blockquote>
                            </CCardBody>
                            </CCard>
                 
                )
            })
    )
}