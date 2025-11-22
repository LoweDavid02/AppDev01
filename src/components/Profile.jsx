import { getImageUrl } from './utils/utils';

export default function Profile({ 
  person = {
    name: 'Alan L. Hart',
    imageId: 'QIrZWGI',
    profession: 'Physician and radiologist',
    accomplishment: 'one of the early proponents of using X-rays for diagnosis'
  },
  size = 200,
  showDetails = true 
}) {
  return (
    <div className="profile">
      <img
        className="avatar"
        src={person.imageId ? getImageUrl(person) : `https://i.imgur.com/${person.imageId}s.jpg`}
        alt={person.name}
        width={size}
        style={{ borderRadius: 8 }}
      />
      {showDetails && (
        <div>
          <h3>{person.name}</h3>
          <p>{person.profession} — {person.accomplishment}</p>
        </div>
      )}
    </div>
  )
}
