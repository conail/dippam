import React from 'react';

export default class HomePage extends React.Component {
  render() {
    return <div id="home">
      <h1>Documenting Ireland: Parliament, People and Migration</h1>
      <p>DIPPAM is an online virtual archive of documents and sources relating to the history of Ireland, and its migration experience from the 18<sup>th</sup> to the late 20<sup>th</sup> centuries.</p>
      <div id="collections">
        <div className="eppi collection">
          <h2>EPPI: Enhanced British Parliamentary Papers on Ireland</h2>
          <p>EPPI is a large database of 15,000 official publications relating to all aspects of Irish affairs during the period of the Union, including bills, reports, commisions of inquiry, and the published census reports. It is a rich source for the social history of Ireland, as well as for statistics relating to population, emigration and other subjects. DIPPAM will offer an enhanced and comprehensive version of the resource previously hosted by the University of Southampthon.</p>
          <button>Browse</button>
        </div>
        <div className="ied collection">
          <h2>IED: Irish Emigration Database</h2>
          <p>The IED is a virtual library of emigration-related primary sources, principally letters to and from emigrants, compiled by the Centre for Migration Studies, Omagh. This extensive collection of more than 33,000 records is drawn from a number of collections, including the Public Record Office of Northern Ireland and many private donors, and is capable of expansion as new records become available. It covers a wide time period, but with a concentration on the period between c.1780 and c.1920.</p>
          <button>Browse</button>
        </div>
        <div className="vmr collection">
          <h2>VMR: Voices of Migration and Return</h2>
          <p>VMR comprises over 90 life-narrative interviews conducted with returned and non-returned migrants from Ulster (9-counties) gathered during the course of two studies on contemporary migration (2004-2008). The study participants represent a range of geographic origins within Ulster, class backgrounds and religious denominations.</p>
          <button>Browse</button>
        </div>
      </div>
    </div>;
  }
}