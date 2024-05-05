import { MarkerType } from "../types/data";

export const validateDB = (markers :MarkerType[]) => {
    console.log('validation start')
    for (let i=0; i<markers.length-1; i++) {
        for (let j=i+1; j<markers.length; j++) {
            if (markers[i].title == markers[j].title && Math.abs(markers[i].position.lat-markers[j].position.lat) <= 0.000000000000001) console.log(markers[i].title)
        }
    }
    console.log('validation end')
}