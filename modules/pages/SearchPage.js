import React from 'react';
import _ from 'lodash';
import {FacetList} from '../FacetList';

export default class SearchPage extends React.Component {
  /**
   * Load facet JSON which lists id and names of facets.
   * Add state variables to track the result count and active status.
   */
  constructor(props) {
    super(props);

    const facets = require('json!../../data/facets');
    this.state = {
    };
  }

  render() {
    return <div className="page" id="search">
      <form id="query">
        <Select
          title="Search Mode"
          items={this.state.facets.mode}/>
        <FacetList name="collections"
          title="Collections"
          items={this.state.facets.db}
          onChange={this.handleCollectionChange}/>
        <FacetList name="period"
          title="Time Period"
          items={this.state.facets.period}/>
        <FacetList name="types"
          title="Document Types"
          items={this.state.facets.documentTypes}/>
        <FacetList name="demographics" 
          title="Demographics"
          items={this.state.facets.demographics}/>
        <FacetList name="places"
          title="Places"
          items={this.state.facets.places}/>
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
