import React from 'react';

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = require('json!../../data/collections.json');
  }

  render() {
    const documentTypes = [ 
      {id: '', name: 'Account', collection: ''},
      {id: '', name: 'Bill', collection: ''},
      {id: '', name: 'Report', collection: ''},
      {id: '', name: 'Command Paper', collection: ''},
      {id: '', name: 'Diaries and Journals', collection: ''},
      {id: '', name: 'Family Papers', collection: ''},
      {id: '', name: 'Folklore, Song, Music', collection: ''},
      {id: '', name: 'Hansard', collection: ''},
      {id: '', name: 'Letters (Emigrants)', collection: ''},
      {id: '', name: 'Letters (Other)', collection: ''},
      {id: '', name: 'Births, Deaths, Marriages', collection: ''},
      {id: '', name: 'Newspapers Extracts', collection: ''},
      {id: '', name: 'Shipping Advertisements', collection: ''},
      {id: '', name: 'Shipping News', collection: ''},
      {id: '', name: 'Official Documents', collection: ''},
      {id: '', name: 'Periodical Extracts', collection: ''},
      {id: '', name: 'Statistics', collection: ''},
      {id: '', name: 'Wills', collection: ''}
    ];

    const collections = [
      {id: '', name: 'Enhanced British Parliamentary Papers on Ireland' },
      {id: '', name: 'Irish Emigration Database' },
      {id: '', name: 'Voices of Migration and Return' }
    ];

    return <div className="page" id="search">
      <form id="query">
        <fieldset>
          <legend>Search Mode</legend>
          <select>
            <option>Full text</option>
            <option>Titles</option>
            <option>Exact Title</option>
            <option>Command Number</option>
            <option>Paper Number</option>
         </select>
       </fieldset>
       <FacetList title="Collections" items={collections}/>
       <fieldset>
         <legend>Time Period</legend>
         <label>
           <span>From</span>
           <input type="date"/>
         </label>
         <label>
           <span>To</span>
           <input type="date"/>
         </label>
         <label>
           <span>Emigration</span>
           <input type="date"/>
         </label>
         <label>
           <span>Return</span>
           <input type="date"/>
         </label>
      </fieldset>
      <FacetList title="Document Types" items={documentTypes}/>
      <fieldset>
        <legend>Demographic</legend>
        <label>
          <span>Gender</span>
          <input type="text"/>
        </label>
        <label>
          <span>Age</span>
          <input type="text"/>
        </label>
        <label>
          <span>Denomination</span>
          <input type="text"/>
        </label>
      </fieldset>
      <fieldset>
          <legend>Places</legend>
          <label>
            <span>Place</span>
            <input type="text"/>
          </label>
          <label>
            <span>Birthplace</span>
            <input type="text"/>
          </label>
          <label>
            <span>Childhood Residence</span>
            <input type="text"/>
          </label>
          <label>
            <span>Current Residence</span>
            <input type="text"/>
          </label>
          <label>
            <span>Destination</span>
            <input type="text"/>
          </label>
        </fieldset>
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

class FacetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.items.map((x, i) => {
      return { id: i, text: x.name, count: 0, checked: true };
    })};
  }

  render() {
    return <fieldset>
      <legend>{this.props.title}</legend>
      <a href="" className="toggle">{this.allSelected ? 'None' : 'All'}</a>
      {this.state.items.map(x => <FacetItem key={x.id} {...x}/>)}
    </fieldset>
  }

  allSelected() {
    return false;
  }
}

class FacetItem extends React.Component {
  render() {
    return <label>
      <input onChange={this.handleChange} type="checkbox" checked={this.props.checked}/>
      <span>{this.props.text}</span>
    </label>;
  }

  handleChange(e) {
    this.props.onChange();
  }
}