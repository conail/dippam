import React from "react";
import {Link} from "react-router";

const HomePage = ({collections}) => {
  if (!collections) return <p>Loading</p>;
  const [dippam, ...rest] = collections;
  return <div id="home">
    <div>
      <h1>{dippam.name}</h1>
      <p>{dippam.description}</p>
    </div>
    <div id="collections">
      {rest.map(x => <div key={x.id} className="{x.id} collection">
        <h2><Link to={"/collections/"+x.name}>{x.title}</Link></h2>
        <p>{x.description}</p>
        <Link to={"/collections/"+x.name}>Browse</Link>
      </div>)}
    </div>
  </div>;
};

export default HomePage;
