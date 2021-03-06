import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { handleAddQuestion } from '../actions/shared';

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    isSubmited: false
  }
  handleOptionOneChange = (e) => {
    this.setState({
      optionOne: e.target.value
    })
  }
  handleOptionTwoChange = (e) => {
    this.setState({
      optionTwo: e.target.value
    })
  }
  handleSubmit = () => {
    const { optionOne, optionTwo } = this.state
    const { authedUser, dispatch } = this.props
    dispatch(handleAddQuestion(optionOne, optionTwo, authedUser))

    this.setState({
      isSubmited: true
    })
  }
  render () {
    const { optionOne, optionTwo, isSubmited } = this.state

    if (isSubmited) {
      return <Redirect exact to='/' />;
    }

    return (
      <section className="container new-question-container new-question-background">
        <form>
          <h3 className="center mtbm">Would You Rather</h3>
          <input  className="mtbm"
            type="text" autoFocus
            value={optionOne}
            placeholder="Option One"
            onChange={this.handleOptionOneChange}
          />
          <h4 className="center mtbm">or</h4>
          <input  className="mtbm"
            type="text"
            value={optionTwo}
            placeholder="Option Two"
            onChange={this.handleOptionTwoChange}
          />
          <button type="button"
            className="center mtbm btn"
            disabled={optionOne === '' || optionTwo === ''}
            onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </section>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NewQuestion);