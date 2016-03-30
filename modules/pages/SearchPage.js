import React from 'react';
import _ from 'lodash';
import {FacetList} from '../FacetList';

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { facets: require('json!../../data/facets') };
  }

  render() {
    return <div className="page" id="search">
      <form id="query">
        <Select title="Search Mode" items={this.state.facets.mode}/>
        <FacetList title="Collections" items={this.state.facets.db}/>
        <FacetList title="Time Period" items={this.state.facets.period}/>
        <FacetList title="Document Types" items={this.state.facets.documentTypes}/>
        <FacetList title="Demographics" items={this.state.facets.demographics}/>
        <FacetList title="Places" items={this.state.facets.places}/>
      </form>
      <div id="results">
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Breviate Title</th>
              <th>Session</th>
              <th>Pages</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>;
  }
}

class Select extends React.Component {
  render() {
    return <fieldset>
      <legend>{this.props.title}</legend>
      <select name="mode" onChange={this.handleChange}>
        {this.props.items.map(x =>
          <option key={x.id} value={x.id}>{x.name}</option>
        )}
      </select>
    </fieldset>;
  }

  handleChange(e) {
    e.preventDefault();
    this.props.handleChange();
  }
}
