import React from 'react';
import _ from 'lodash';
import { FacetList } from '../FacetList';
import { browserHistory } from 'react-router';

export default class SearchPage extends React.Component {
  /**
   * Load facet JSON which lists id and names of facets.
   * Add state variables to track the result count and active status.
   */
  constructor(props) {
    super(props);

    const facets = require('json!../../data/facets');
    this.state = {
      facets: facets
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
          onChange={this.changeCollection}/>
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

  changeCollection(collection) {
    const items = collection.state.items;
    let active = [];

    for (let i = 0; i < items.length; i++)
      if (items[i].checked) active.push(items[i].id);
    let uri = "";
    if (active.length == 1) {
      if (active[0] == 0) uri = "/collections/eppi";
      if (active[0] == 1) uri = "/collections/ied";
      if (active[0] == 2) uri = "/collections/vmr";
    }
    uri += location.pathname.match(/\/search\/.*/)[0];
    browserHistory.push(uri);
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
