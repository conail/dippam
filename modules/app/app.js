import React, {Component} from "react";
import Header from "./header";
import Footer from "./footer";
import api from "./api";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {collections: []};
  }
  
  componentDidMount() {
    api.collections().then(x => this.setState(x));
  }
  
  render() {
    return <div className={this.props.params.collection}>
      <Header {...this.props} {...this.state}/>
      <main>
        {this.props.children}
      </main>
      <Footer/>
    </div>
  }
}


























