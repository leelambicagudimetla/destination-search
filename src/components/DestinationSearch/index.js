import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {destinationsList: props.destinationsList, searchInput: ''}
  }

  fu = event => {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    console.log(event.target.value)

    const listOfNew = destinationsList.filter(m =>
      m.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    this.setState({
      destinationsList: listOfNew,
      searchInput: event.target.value,
    })
  }

  f1 = finding => {
    const {destinationsList} = this.state

    const list = destinationsList.filter(each => each.id !== finding)

    this.setState({destinationsList: list})
  }

  render() {
    const {searchInput, destinationsList} = this.state
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <h1 className="heading">Destination Search</h1>
        <div>
          <input
            type="search"
            placeholder="Search"
            onChange={this.fu}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <ul className="list-container">
          {searchResults.map(each => (
            <DestinationItem destinationsList={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
