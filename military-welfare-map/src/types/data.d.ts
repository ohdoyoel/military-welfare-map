export type MarkerType = {
    tag: number
    region: number
    position: {
        lat: number,
        lng: number
    },
    address: string
    title: string
    description?: string
    teleno?: string
}

export type APIProps = {
    position: {
        lat: number,
        lng: number
    },
    size: number
}