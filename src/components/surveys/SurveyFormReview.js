import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions'

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
          className="yellow darken-3 white-text btn-flat"
          onClick={this.props.onCancel}>
          Back
        </button>
        <button
          className="green btn-flat right"
          onClick={() => { this.props.submitSurvey(this.props.formValues, this.props.history) }}>
          Send Survey
          <i className="material-icons right">email</i>
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
