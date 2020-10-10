const questions = [
  {
    id: 1,
    question: 'question one?',
    type: 'input',
    options: []
  },
  {
    id: 2,
    question: 'question two?',
    type: 'dropdown',
    options: ['one', 'two', 'three', 'four']
  },
  {
    id: 3,
    question: 'question three?',
    type: 'radioButton',
    options: ['one', 'two', 'three', 'four']
  }
]

export  function getQuestions () {
  return questions;
}