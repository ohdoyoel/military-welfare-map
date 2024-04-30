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
    telno?: string
    distance?: number
    onFire?: boolean
}

export type APIProps = {
    position: {
        lat: number,
        lng: number
    },
    size: number
}