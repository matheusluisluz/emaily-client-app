// SurveyField contains logic to render a single 
// label and text input
import React, { Component } from 'react';

class SurveyField extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input {...this.props.input} style={{ marginBottom: '5px' }}/>
        <div className="red-text" style={{ marginBottom: '20px' }}>
          {this.props.meta.touched && this.props.meta.error}
        </div>
      </div>
    );
  }
}

export default SurveyField;
