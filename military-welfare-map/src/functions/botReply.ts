const isHello = (input: string): boolean => {
    if (input.includes('안녕')) return true
    return false
}

export const botReply = (input: string):string => {
    if (isHello(input)) return '충성! '
    return '잘못 들었습니다?'
}