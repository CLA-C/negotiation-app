const isValidInput = (value) => {
    const numValue = Number(value)

    if (
        Number.isNaN(numValue) ||
        numValue <= 0 ||
        value.length > 9
    ) {
        return false
    }

    return true
}

export default isValidInput
