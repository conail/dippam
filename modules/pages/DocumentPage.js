import React from 'react';

export default class DocumentPage extends React.Component {
  render() {
    return <div className="document page">
      <button>Search Results</button>
      <button>PDF Download</button>
      <button>Transcript</button>
      <button>Images</button>
      <button>Metadata</button>
      <h1>Document Metadata</h1>
      <dl>
        <dt>Source</dt>
        <dd>HC</dd>
        <dt>Paper Number</dt>
        <dd>18</dd>
        <dt>Library of Congress Subject Heading</dt>
        <dd>Political crimes and offenses - Ireland/Public policy (Law) - Ireland</dd>
        <dt>Breviate Keywords</dt>
        <dd>Irish papers - legal administration, police, law - civil order, public meetings, riots, The Rising</dd>
        <dt>Publisher</dt>
        <dd>HMSO</dd>
        <dt>Breviate Page</dt>
        <dd>191</dd>
        <dt>Series</dt>
        <dd>Sessional papers</dd>
        <dt>Start Page</dt>
        <dd>13</dd>
        <dt>Volume</dt>
        <dd>1</dd>
        <dt>Sub Volume</dt>
        <dd>1</dd>
        <dt>Session</dt>
        <dd>1801</dd>
      </dl>
    </div>;
  }
}