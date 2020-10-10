import React from 'react'

function Summary({questions, answers}) {
  return (
    questions.map(question =>(
      <div key={question.id}>
        <h2>{question.question}</h2>
        Ans: <strong>{answers[question.id]}</strong>
      </div>
    ))
  )
}

export default Summary;