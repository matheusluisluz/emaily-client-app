import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from './formFields';

class SurveyFormReview extends Component {

  renderFields() {
    return _.map(formFields, ({ name, label }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>
            {this.props.formValues[name]}
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        <h5>Please confirm your entries</h5>
        {this.renderFields()}
        <button
          className="yellow darken-3 btn-flat"
          onClick={this.props.onCancel}>
          Back
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);
