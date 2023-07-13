import { CardRequest } from '../model/cardRequest'
import { CheckoutSessionSecureFieldsUpdate } from '../model/checkoutSessionSecureFieldsUpdate'
import { getTestClient } from './helpers'

const client = getTestClient()

let sessionId

jest.setTimeout(30000)

describe('#newCheckoutSession', () => {
  test('it should create a checkout session', async () => {
    const session = await client.newCheckoutSession().catch((error) => {
      console.dir(error.response.body) // the parsed JSON of the error
      console.dir(error.response.statusCode) // the status code of the error
      throw new Error('an error occurred while creating the session')
    })

    expect(session).toBeDefined()
    expect(session.body).toBeDefined()
    const { type, id } = session.body
    sessionId = id
    expect(type).toBe('checkout-session')
    expect(id).toBeDefined()
  })
})

describe('#getCheckoutSession', () => {
  test('it should find a specific checkout session', async () => {
    const session = await client.getCheckoutSession(sessionId)
    expect(session).toBeDefined()
    expect(session.body).toBeDefined()
    expect(session.body.id).toBe(sessionId)
  })
})

describe('#updateCheckoutSessionFields', () => {
  test('it should update the secure fields of a specific checkout session', async () => {
    const checkoutSessionSecureFieldsUpdate =
      new CheckoutSessionSecureFieldsUpdate()
    checkoutSessionSecureFieldsUpdate.paymentMethod = {
      method: CardRequest.MethodEnum.Card,
      number: '4111111111111111',
      expirationDate: '12/23',
      securityCode: '123',
    }
    const session = await client.updateCheckoutSessionFields(
      sessionId,
      checkoutSessionSecureFieldsUpdate
    )
    expect(session.response.statusCode).toEqual(204)
  })
})

describe('#deleteCheckoutSession', () => {
  test('it should delete a specific checkout session', async () => {
    const session = await client.deleteCheckoutSession(sessionId)
    expect(session.response.statusCode).toEqual(204)
  })
})
