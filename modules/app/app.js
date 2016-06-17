import React, {Component} from "react";
import Header from "./header";
import Footer from "./footer";
import api from "./api";

export default class App extends Component {
  constructor(props) {
    super(props);
    api.collections().then(x => this.setState({collections: x}));
  }
  
  render() {
    return <div className={this.props.params.collection}>
      <Header {...this.props} {...this.state}/>
      <main>{React.cloneElement(this.props.children, {...this.state})}</main>
      <Footer/>
    </div>
  }
}


























