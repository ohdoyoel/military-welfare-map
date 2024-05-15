import { MarkerType } from "../types/data";

const matrix = (m:number, n:number, initial:number) => {
    var a, i, j, mat = [];
    for (i = 0; i < m; i ++) {
        a = [];
        for (j = 0; j < n; j += 1) a[j] = initial;
        mat[i] = a;
    }
    return mat;
};

const consoleLogMatrix = (mat:number[][]) => {
    for (let i=0; i<mat.length; i++) {
        let row = ''
        for (let j=0; j<mat[0].length; j++) row += (mat[i][j].toString()+' ')
        console.log(row)
    }
}

export const validateDB = (markers :MarkerType[]) => {
    // if (markers.length == 0) return

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

    let freqTable = matrix(12, 16, 0)
    for (let i=0; i<markers.length-1; i++) {
        freqTable[markers[i].tag][markers[i].region] += 1
    }
    console.log(freqTable)
    // consoleLogMatrix(freqTable)

    console.log('VALIDATION END')
}