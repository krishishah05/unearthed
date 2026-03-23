import { Link } from 'react-router-dom'
import more from './more.svg'
import './Card.css'

function Card({ gift }) {
  return (
    <div className="card">
      <div
        className="top-container"
        style={{ backgroundImage: `url('${gift.image}')` }}
      >
        <Link to={'/edit/' + gift.id}><img src={more} alt="edit" /></Link>
      </div>
      <div className="bottom-container">
        <h3>{gift.name}</h3>
        <p>💰 {gift.pricepoint}</p>
        <p>👤 {gift.audience}</p>
        <Link to={`/gifts/${gift.id}`} role="button">Read More &gt;</Link>
      </div>
    </div>
  )
}

export default Card
