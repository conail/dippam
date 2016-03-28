import React from 'react';

export default class AboutPage extends React.Component {
  render() {
    return <div className="page" id="about">
      <header>
        <h1>About</h1>
      </header>
      <main>
        <h2>Team</h2>
        <h3>Queen's University Belfast</h3>
        <p>Prof. Peter Gray, Dr. Ricky Rankin, Gavin Mitchell, Conail Stewart, Cormac O'Donnell, Mark McCalmont</p>
        <h3>University of Ulster</h3>
        <p>Dr. Johanne Devlin Trew</p>
        <h3>Mellon Centre for Migration Studies</h3>
        <p>Dr. Brian Lambkin, Dr. Paddy Fitzgerald</p>
        <h3>Libraries Northern Ireland</h3>
        <p>Joe Mullan, Deirdre Nugent</p>
        <h2>Sponsors</h2>
        <h2>Colophon</h2>
      </main>
    </div>;
  }
}