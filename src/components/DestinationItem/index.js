import './index.css'
import {Component} from 'react'
import DestinationSearch from './components/DestinationSearch'
import './App.js'

const initialdestinationsList = []

class DestinationItem extends Component {
  state = {
    searchInput: '',
    destinationsList: initialdestinationsList,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, destinationsList} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Destination Search</h1>
        <div>
          <input type="search" placeholder="Search" value={searchInput} />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <ul className="list-container">
          <DestinationSearch />
        </ul>
      </div>
    )
  }
}
export default DestinationItem
