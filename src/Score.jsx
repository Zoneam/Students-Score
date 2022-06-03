import React from 'react'

export default function Score({score}){
    return(
        <h5>{score.date} {score.score}</h5>
    )
}