import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import GiftDetails from './pages/GiftDetails'

function App() {
  const [gifts, setGifts] = useState([])

  useEffect(() => {
    const fetchGifts = async () => {
      const response = await fetch('/gifts')
      const data = await response.json()
      setGifts(data)
    }

    fetchGifts()
  }, [])

  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-left">
            <img src="/logo.svg" alt="UnEarthed Logo" />
            <h1>UnEarthed</h1>
          </div>
          <div className="header-right">
            <Link to="/"><button>Home</button></Link>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={
          <main className="gift-grid">
            {gifts.length > 0 ? (
              gifts.map(gift => (
                <div key={gift.id} className="card">
                  <div
                    className="top-container"
                    style={{ backgroundImage: `url('${gift.image}')` }}
                  />
                  <div className="bottom-container">
                    <h3>{gift.name}</h3>
                    <p>💰 {gift.pricepoint}</p>
                    <p>👤 {gift.audience}</p>
                    <Link to={`/gifts/${gift.id}`} role="button">Read More &gt;</Link>
                  </div>
                </div>
              ))
            ) : (
              <h2>No Gifts Available 😞</h2>
            )}
          </main>
        } />
        <Route path="/gifts/:id" element={<GiftDetails />} />
      </Routes>
    </>
  )
}

export default App
