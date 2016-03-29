import React from 'react';
import {get} from '../Pages.js'

export default class MarkdownPage extends React.Component {
  render() {
    const html = get(this.props.location.pathname);

    return <div className="page" dangerouslySetInnerHTML={{__html: html}}></div>;
  }
}
