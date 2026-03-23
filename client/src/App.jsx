import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import GiftDetails from './pages/GiftDetails'
import CreateGift from './pages/CreateGift'
import EditGift from './pages/EditGift'
import Card from './components/Card'

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
            <Link to='/'><button>Home</button></Link>
            <Link to='/new'><button className='addBtn'>+ Add Gift</button></Link>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={
          <main className="gift-grid">
            {gifts.length > 0 ? (
              gifts.map(gift => (
                <Card key={gift.id} gift={gift} />
              ))
            ) : (
              <h2>No Gifts Available 😞</h2>
            )}
          </main>
        } />
        <Route path="/gifts/:id" element={<GiftDetails />} />
        <Route path="/new" element={<CreateGift />} />
        <Route path="/edit/:id" element={<EditGift />} />
      </Routes>
    </>
  )
}

export default App
