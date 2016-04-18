import React, {Component} from 'react'

export class FacetList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.items.map((x, i) => {
        return {
          id: i,
          text: x.title || x.name,
          count: 0,
          checked: true
        }
      }),
      open: true
    }
  }

  render() {
    return <fieldset className={this.state.open ? '' : 'closed'}>
      <legend>{this.props.title}</legend>
      <button className={"toggle"} onClick={this.toggle.bind(this)}>
        { this.state.open ? 'Close' : 'Open' }
      </button>
      <a href="" onClick={this.selectAll.bind(this)} className="all">
        {this.isAllSelected() ? 'None' : 'All'}
      </a>
      {this.state.items.map(x => 
        <FacetItem key={x.id} {...x}
          onChange={this.handleChange.bind(this)}/>
      )}
    </fieldset>
  }

  isAllSelected() {
    for (const i of this.state.items) if (! i.checked) return false
    return true
  }

  selectAll(e) {
    e.preventDefault()

    const target = ! this.isAllSelected()
    for (const i of this.state.items) i.checked = target
    this.setState({items: this.state.items})
    if (this.props.onChange) this.props.onChange(this)
  }

  toggle(e) {
    e.preventDefault()
    this.setState({ open: ! this.state.open })
  }

  handleChange(id) {
    let items = this.state.items;
    items[id].checked = ! items[id].checked;
    this.setState({ items: items });
    if (this.props.onChange) this.props.onChange(this);
  }
}

class FacetItem extends Component {
  render() {
    return <label>
      <input name={this.props.name}
        onChange={this.handleChange.bind(this)}
        type="checkbox"
        checked={this.props.checked}/>
      <span>{this.props.text}</span>
    </label>;
  }

  handleChange(e) {
    this.props.onChange(this.props.id)
  }
}