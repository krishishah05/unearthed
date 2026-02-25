const renderGift = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop())

  const response = await fetch('/gifts')
  const data = await response.json()

  const giftContent = document.getElementById('gift-content')

  let gift

  if (data) {
    gift = data.find(gift => gift.id === requestedID)
  }

  if (gift) {
    document.getElementById('image').src = gift.image
    document.getElementById('name').textContent = gift.name
    document.getElementById('submittedBy').textContent = `Submitted by: ${gift.submittedBy}`
    document.getElementById('submittedOn').textContent = `Submitted on: ${gift.submittedOn}`
    document.getElementById('pricePoint').textContent = `💰 Price: ${gift.pricePoint}`
    document.getElementById('audience').textContent = `👤 Audience: ${gift.audience}`
    document.getElementById('description').textContent = gift.description
    document.title = gift.name
  } else {
    const noGifts = document.createElement('h2')
    noGifts.textContent = 'No Gifts Available 😞'
    giftContent.appendChild(noGifts)
  }
}

renderGift()
