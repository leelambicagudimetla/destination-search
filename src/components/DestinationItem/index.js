import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {imgUrl, name} = destinationsList

  return (
    <li className="user-card-container">
      <img src={imgUrl} className="profile-pic" value={name} alt={name} />
      <p className="user-name"> {name} </p>
    </li>
  )
}

export default DestinationItem
