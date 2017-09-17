import React from 'react'
import { textChanged } from '../actions/text'
import { connect } from 'react-redux'

const TextBox = props => {
  return (
    <div>
      <input value={props.text} onChange={(evt) => props.textChanged(evt.target.value)}/>
      <div>You have input {props.text}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    text: state.text
  }
}

const mapDispatchToProps = dispatch => {
  return {
    textChanged: (newText) => {
      dispatch(textChanged(newText))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextBox)

