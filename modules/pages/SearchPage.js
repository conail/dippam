import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = require('json!../../data/collections.json');

    const q = "suppression";

    const results = this.get(`http://www.dippam.ac.uk/eppi/results?search%5Bper_page%5D=200&search%5Bpage%5D=1&search%5Btotal_pages%5D=644&search%5Bview%5D=table&search%5Bqclean%5D=${q}&search%5Bq%5D=${q}%0A&search%5Bfields%5D=fulltext&search%5Bchrono%5D=on&search%5Bfrom%5D=1801&search%5Bto%5D=1922&search%5Bcat%5D%5B0%5D=on&search%5Bcat%5D%5B1%5D=on&search%5Bcat%5D%5B2%5D=on&search%5Bcat%5D%5B3%5D=on&search%5Bcat%5D%5B4%5D=on&search%5Bsort%5D=title&search%5Bsort_dir%5D=asc`);
    results.then(x => {
      document.getElementsByTagName("tbody")[0].innerHTML = x;
    });
  }

  get(url) {
    return new Promise(function(resolve, reject) {
      let req = new XMLHttpRequest();
      req.open('GET', url);
      req.onload = function() {
        if (req.status == 200) resolve(req.response);
        else reject(Error(req.statusText));
      };
      req.onerror = function() { reject(Error("Network Error")); };
      req.send();
    });
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
        <button>Close</button>
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
            <tr>
              <td>HC 1801 (18) 1 13</td>
              <td>Bill for continuing Acts in Ireland for Suppression of Rebellion, and Protection of Persons and Properties of H.M. Faithful Subjects</td>
              <td>1801</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>;
  }
};

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