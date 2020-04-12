import validation from '../../proposalForm/validation'

describe('Input validation', () => {
    it('should accept positive numeric values', () => {
        expect(validation('1234')).toBe(true)
    })

    it('should not accept non numeric values', () => {
        expect(validation('ciao 23')).toBe(false)
    })

    it('should not accept 0 or negative values', () => {
        expect(validation('-23')).toBe(false)
        expect(validation('0')).toBe(false)
    })

    it('should not accept unrealistically big values', () => {
        expect(validation('1000000000')).toBe(false)
    })
})