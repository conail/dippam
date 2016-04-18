import React, {Component} from 'react'
import {Link} from 'react-router'

const AppFooter = () => {
  const year = new Date().getFullYear()

  return <footer>
    <div className="sponsors">
      <h3>Sponsors</h3>
      <ul>
        <li><a href="https://www.qub.ac.uk/historyandanthropology/">Queen's University Belfast</a></li>
        <li><a href="https://www.qub.ac.uk/cms">The Mellon Centre</a></li>
	<li><a href="http://www.ahrc.ac.uk/">Arts and Humanities Research Council</a></li>
	<li><a href="http://www.socsci.ulster.ac.uk/policy/">University of Ulster</a></li>
	<li><a href="https://www.librariesni.org.uk/">Lirbaries NI</a></li>
      </ul>
    </div>
    <div className="contact">
      <h3>Contact</h3>
      <p>For more information, please email <a href="mailto:info@dippam.ac.uk">info@dippam.ac.uk</a> or address mail to:</p>
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
    <div className="policy">
      <ul>
        <li><Link to="/policy/privacy">Privacy Policy</Link></li>
        <li><Link to="/policy/ethical-use">Ethical Use Policy</Link></li>
      </ul>
    </div>
    <p className="copyright">Copyright &copy; {year} DIPPAM.  All Rights Reserved.</p>
  </footer>
}

export default AppFooter

