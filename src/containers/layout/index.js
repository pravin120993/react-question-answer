import React, { Component } from "react";
import Question from "../../components/question";
import Summary from "../../components/summary";
import { getQuestions } from "../../data/questions";
import Answer from '../../components/answer'
class Layout extends Component {
  state = {
    questions: [],
    currentQuestion: 0,
    done: false,
    answers: {},
    notValid: false,
  };
  componentDidMount() {
    this.setState({ questions: getQuestions() });
  }
  ansCallback = (e) => {
    const { questions, currentQuestion, answers } = this.state;
    this.setState({
      ...this.state, 
      answers: {
        ...answers, 
        [questions[currentQuestion].id]: e.currentTarget.value
      },
      notValid: !e.currentTarget.value
    })
  }
  next = () => {
    const { currentQuestion, questions, answers } = this.state;
    if(!answers[questions[currentQuestion].id]) {
      this.setState({...this.state, notValid: true});
      return;
    }
    if(currentQuestion < questions.length - 1)
      this.setState({ ...this.state, currentQuestion: currentQuestion + 1 });
    else
      this.setState({ ...this.state, done: true });
  }
  render() {
    const { questions, currentQuestion, done, notValid, answers } = this.state;
    return (
      questions.length > 0 && (
        <div>
          {
            done ? (
              <Summary questions={questions} answers={answers}/>
            ) : (
              <div>
                <Question question={questions[currentQuestion].question} />
                <Answer type={questions[currentQuestion].type} options={questions[currentQuestion].options} ansCallback={this.ansCallback} />
                { notValid && <div>Please enter value</div> }
              </div>
            )
          }
          <br />
        { !done && <button type="button" onClick={this.next}>Next</button> }
        </div>
      )
    );
  }
}

export default Layout;
