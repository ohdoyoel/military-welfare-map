export const addressToRegion = (addr: string):number => {
    if (addr.includes('서울')) return 0
    else if (addr.includes('부산')) return 1
    else if (addr.includes('대구')) return 2
    else if (addr.includes('인천')) return 3
    else if (addr.includes('광주')) return 4
    else if (addr.includes('대전')) return 5
    else if (addr.includes('울산')) return 6
    else if (addr.includes('경기')) return 7
    else if (addr.includes('충북') || addr.includes('충청북')) return 8
    else if (addr.includes('충남') || addr.includes('충청남')) return 9
    else if (addr.includes('전북') || addr.includes('전라북')) return 10
    else if (addr.includes('전남') || addr.includes('전라남')) return 11
    else if (addr.includes('경북') || addr.includes('경상북')) return 12
    else if (addr.includes('경남') || addr.includes('경상남')) return 13
    else if (addr.includes('강원')) return 14
    else if (addr.includes('제주')) return 15
    return -1
}