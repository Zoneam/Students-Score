import React from 'react'

export default function Score({score}){
    return(
        <h5 style={{color: score.score>70?'green':'red'}}><strong>Date:</strong>{score.date} <strong  >Score:</strong>{score.score}</h5>
    )
}