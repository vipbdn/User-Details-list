import './index.css'

const UserProfile = props => {
  const {userDetail} = props
  const {imageUrl, name, role} = userDetail
  return (
    <ul className="user-card-container ">
      <img src={imageUrl} alt="avatar" className="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designationr">{role}</p>
      </div>
    </ul>
  )
}

export default UserProfile
