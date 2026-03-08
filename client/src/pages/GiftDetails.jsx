import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function GiftDetails() {
  const [gift, setGift] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchGiftById = async () => {
      const response = await fetch(`/gifts/${id}`)
      const data = await response.json()
      setGift(data)
    }

    fetchGiftById()
  }, [id])

  if (!gift) return <p style={{ textAlign: 'center', marginTop: '40px' }}>Loading...</p>

  return (
    <div className="gift-info">
      <div className="image-container">
        <img src={gift.image} alt={gift.name} />
      </div>
      <div className="gift-details">
        <h2>{gift.name}</h2>
        <p>💰 <strong>Price Point:</strong> {gift.pricepoint}</p>
        <p>👤 <strong>Audience:</strong> {gift.audience}</p>
        <p>{gift.description}</p>
        <p>✍️ <strong>Submitted by:</strong> {gift.submittedby}</p>
        <p>📅 <strong>Submitted on:</strong> {new Date(gift.submittedon).toLocaleDateString()}</p>
      </div>
    </div>
  )
}

export default GiftDetails
