export type Marker = {
    position: {
        lat: number,
        lng: number
    },
    title: string
    tag: number
}

export type APIProps = {
    position: {
        lat: number,
        lng: number
    },
    size: number
}