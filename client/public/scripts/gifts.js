const renderGifts = async () => {
  const response = await fetch('/gifts')
  const data = await response.json()

  const mainContent = document.getElementById('main-content')

  if (data) {
    data.map(gift => {
      const card = document.createElement('div')
      card.className = 'card'

      const topContainer = document.createElement('div')
      topContainer.className = 'top-container'
      topContainer.style.backgroundImage = `url('${gift.image}')`

      const bottomContainer = document.createElement('div')
      bottomContainer.className = 'bottom-container'

      const name = document.createElement('h3')
      name.textContent = gift.name

      const price = document.createElement('p')
      price.textContent = `💰 ${gift.pricePoint}`

      const audience = document.createElement('p')
      audience.textContent = `👤 ${gift.audience}`

      const readMore = document.createElement('a')
      readMore.textContent = 'Read More >'
      readMore.href = `/gifts/${gift.id}`
      readMore.role = 'button'

      bottomContainer.appendChild(name)
      bottomContainer.appendChild(price)
      bottomContainer.appendChild(audience)
      bottomContainer.appendChild(readMore)

      card.appendChild(topContainer)
      card.appendChild(bottomContainer)

      mainContent.appendChild(card)
    })
  } else {
    const noGifts = document.createElement('h2')
    noGifts.textContent = 'No Gifts Available 😞'
    mainContent.appendChild(noGifts)
  }
}

// Only render gifts on the home page; redirect to 404 for invalid routes
const requestedUrl = window.location.pathname.split('/').filter(Boolean)[0]

if (requestedUrl) {
  window.location.href = '/404.html'
} else {
  renderGifts()
}
