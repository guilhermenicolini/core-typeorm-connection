import { Hello } from '@/hello'

describe('Hello Test', () => {
  const sut = new Hello()

  test('say', async () => {
    const result = sut.say()
    expect(result).toBe('Hello')
  })
})
