import React from 'react';

export default class TeamPage extends React.Component {
  render() {
    return <div className="page">
      <h1>Team</h1>
      <h2>Queen's University Belfast</h2>
      <ul>
        <li>Prof. Peter Gray</li>
        <li>Dr. Ricky Rankin</li>
        <li>Gavin Mitchell</li>
        <li>Conail Stewart</li>
        <li>Cormac O'Donnell</li>
        <li>Mark McCalmont</li>
      </ul>
      <h2>University of Ulster</h2>
      <ul>
        <li>Dr. Johanne Devlin Trew</li>
      </ul>
      <h2>Mellon Centre for Migration Studies</h2>
      <ul>
        <li>Dr. Brian Lambkin</li>
        <li>Dr. Paddy Fitzgerald</li>
      </ul>
      <h2>Libraries Northern Ireland</h2>
      <ul>
        <li>Joe Mullan</li>
        <li>Deirdre Nugent</li>
      </ul>
    </div>;
  }
}