import { MarkerType } from "../types/data";

export const validateDB = (markers :MarkerType[]) => {
    console.log('VALIDATION START')

    for (let i=0; i<markers.length-1; i++) {
        for (let j=i+1; j<markers.length; j++) {
            if (markers[i].title == markers[j].title && Math.abs(markers[i].position.lat-markers[j].position.lat) <= 0.000000000000001) console.log('DUPLICATED LOCATION ' + markers[i].title)
        }
    }

    let lenOfLongestTitle = 0
    let longestTitle = ''
    for (let i=0; i<markers.length-1; i++) {
        if (markers[i].title != undefined && (markers[i].title!.length > lenOfLongestTitle)) {
            lenOfLongestTitle = markers[i].title!.length
            longestTitle = markers[i].title!
        }
    }
    console.log('LONGEST TITLE : ' + longestTitle  + ', LENGTH: ' + lenOfLongestTitle)

    let lenOfLongestAddr = 0
    let longestAddr = ''
    for (let i=0; i<markers.length-1; i++) {
        if (markers[i].address != undefined && (markers[i].address!.length > lenOfLongestAddr)) {
            lenOfLongestAddr = markers[i].address!.length
            longestAddr = markers[i].address!
        }
    }
    console.log('LONGEST ADDR : ' + longestAddr  + ', LENGTH: ' + lenOfLongestAddr)

    let lenOfLongestDesc = 0
    let longestDesc = ''
    for (let i=0; i<markers.length-1; i++) {
        if (markers[i].description != undefined && (markers[i].description!.length > lenOfLongestDesc)) {
            lenOfLongestDesc = markers[i].description!.length
            longestDesc = markers[i].description!
        }
    }
    console.log('LONGEST DESC : ' + longestDesc  + ', LENGTH: ' + lenOfLongestDesc)

    console.log('VALIDATION END')
}