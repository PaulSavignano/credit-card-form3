export const getStripeToken = (card) => {
  return new Promise((resolve, reject) => {
    Stripe.card.createToken(card, (status, { error, id }) => {
      if (error) {
        reject(error.message)
      } else {
        console.log(`id: ${id}`)
        resolve(id)
      }
    })
  })
}
