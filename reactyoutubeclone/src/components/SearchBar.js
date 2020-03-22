import React, { Component } from 'react'

export class SearchBar extends Component {
  state = { searchTerm: '' }

  onChange = e => {
    this.setState({ searchTerm: e.target.value })
    console.log(this.state.searchTerm)
  }

  onFormSubmit = e => {
    e.preventDefault()
    // TODO: make sure we call callback from parent component
    this.props.onFormSubmit(this.state.searchTerm)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.searchTerm} onChange={this.onChange} />
          </div>
        </form>
      </div>
    )
  }
}
