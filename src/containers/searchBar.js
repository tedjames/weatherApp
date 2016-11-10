import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // used for our search bar
    this.state = { term: ''};

    // binds the onFormSubmit event handler to the SearchBar component
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    // prevent page refresh on submit
    event.preventDefault();

    // fetch weather data
    this.props.fetchWeather(this.state.term);

    // reset search bar value to ''
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={ (event) => this.setState({ term: event.target.value }) }
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// whenever an action is called, send it to the middleware and then to all reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// maps the dispatch to the props of this container
export default connect(null, mapDispatchToProps)(SearchBar);
// null is passed in because mapStateToProps is not required


/*

Controlled Components don't rely on standard html to update the input field
The input field updates the state upon detecting a change in the input field
The input field's value is bound to this.state.term to reflect the changes made
Changes to this state has nothing to do with the redux store/global state
In the case of input fields, component level state is used

*/
