export const andInKorean = (name: string) => {
    const lastChar = name.charCodeAt(name.length - 1)
    const isThereLastChar = (lastChar - 0xac00) % 28
    if (isThereLastChar) {
      return '과'
    }
    return '와'
}

export const thatInKorean = (name: string) => {
    const lastChar = name.charCodeAt(name.length - 1)
    const isThereLastChar = (lastChar - 0xac00) % 28
    if (isThereLastChar) {
      return '을'
    }
    return '를'
}