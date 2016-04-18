import React, {Component} from "react"
import Header from "./header"
import Footer from "./footer"

export default class App extends Component {
  render() {
    return <div className={this.props.params.collection}>
      <Header {...this.props}/>
        <main>
          {this.props.children}
        </main>
      <Footer/>
    </div>
  }
}





























