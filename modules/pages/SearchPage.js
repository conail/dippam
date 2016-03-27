import React from 'react';

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = require('json!../../data/collections.json');
  }

  render() {
    const documentTypes = [ 
      "Account",
      "Bill",
      "Report",
      "Command Paper",
      "Diaries and Journals",
      "Family Papers",
      "Folklore, Song, Music",
      "Hansard",
      "Letters (Emigrants)",
      "Letters (Other)",
      "Births, Deaths, Marriages",
      "Newspapers Extracts",
      "Shipping Advertisements",
      "Shipping News",
      "Official Documents",
      "Periodical Extracts",
      "Statistics",
      "Wills"
    ];

    return <div className="page" id="search">
      <form id="query">
        <FacetList title="Collections" items={["Enhanced British Parliamentary Papers on Ireland",
"Irish Emigration Database", "Voices of Migration and Return"]}/>
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
      return { id: i, text: x, count: 0, checked: true };
    })};
  }

  render() {
    return <fieldset>
      <legend>{this.props.title}</legend>
      <a href="" className="toggle">{this.allSelected ? 'None' : 'All'}</a>
      {this.state.items.map(x => <FacetItem key={x.id} {...x} onChange={this.handleChange}/>)}
    </fieldset>
  }

  handleChange(e) {
    console.log(34)
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