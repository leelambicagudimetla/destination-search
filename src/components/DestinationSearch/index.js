import './index.css'
import './App.js'

const DestinationSearch = props => {
  const {destinationsList} = props
  const {imgUrl, name, id} = destinationsList

  return (
    <li className="user-card-container">
      <img src={imgUrl} className="profile-pic" alt="destinationsList" />
      <h1 className="user-name"> {name} </h1>
    </li>
  )
}
export default DestinationSearch
