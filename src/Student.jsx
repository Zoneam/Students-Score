import React from "react";
import Score from "./Score.jsx"
import { CCard, CCardHeader, CCardBody } from '@coreui/react';
export default function Student({students}){
    return(
            students.map((st,idx) => {
                return (
                    <>
                            <CCard>
                            <CCardHeader>{st.name}</CCardHeader>
                            <CCardBody>
                                <blockquote className="blockquote mb-0">
                                <p>{st.bio}</p>
                                <footer className="blockquote-footer">
                                    {
                                        st.scores.map((score,index)=> <Score score={score}/>)
                                    }
                                </footer>
                                </blockquote>
                            </CCardBody>
                            </CCard>
                    </>
                )
            })
    )
}