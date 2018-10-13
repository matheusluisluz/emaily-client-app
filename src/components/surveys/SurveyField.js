// SurveyField contains logic to render a single 
// label and text input
import React, { Component } from 'react';

class SurveyField extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input {...this.props.input} />
      </div>
    );
  }
}

export default SurveyField;
