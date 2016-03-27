import React from 'react';

export default class AppFooter extends React.Component {
  render() {
    const year = new Date().getFullYear();

    return <footer>
      <div className="sponsors">
        <h3>Sponsors</h3>
        <ul>
	  <li><a href="http://www.qub.ac.uk/schools/SchoolofHistoryandAnthropology/">Queen's University Belfast</a></li>
          <li><a href="http://www.qub.ac.uk/cms">The Mellon Centre</a></li>
	  <li><a href="">Arts and Humanities Research Council</a></li>
	  <li><a href="http://www.socsci.ulster.ac.uk/policy/index.html">University of Ulster</a></li>
	  <li><a href="">Libraries NI</a></li>
        </ul>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <p>For more information please send an email to info@dippam.ac.uk, or address mail to:</p>
        <address>
          DIPPAM Project,
          School of History and Anthropology,
          15 University Square,
          Queen's University Belfast,
          Belfast
          BT7 1NN
          UK
        </address>
      </div>
      <p className="copyright">Copyright &copy; {year} DIPPAM.  All Rights Reserved.</p>
    </footer>;
  }
}