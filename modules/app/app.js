import React, {Component} from "react"
import NavLink from "../NavLink"
import Header from "./header"
import Footer from "./footer"
import "../../sass/App.sass"

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





























