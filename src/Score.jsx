import React from 'react'
import { CCard, CCardHeader, CCardBody, CBadge } from '@coreui/react';

export default function Score({score}){
    return(
        <h5><strong>Date:</strong><CBadge color="info" shape="rounded-pill">{score.date}</CBadge> <strong  >Score:</strong><CBadge color={score.score>70?'success':'danger'} shape="rounded-pill">{score.score}</CBadge></h5>
    )
}
