import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { queryTerm } from '../actions';

class SearchBar extends Component {
  onSubmit(values) {
    this.props.queryTerm(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(values => this.onSubmit(values))}>
        <Field name="queryTerm" type="text" component="input" />
      </form>
    );
  }
}

SearchBar = reduxForm({
  form: 'searchForm',
})(SearchBar);

export default connect(null, { queryTerm })(SearchBar);
