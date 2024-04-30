type tagColorType = {
    [key: number]: {
      light: string,
      normal: string,
      dark: string
    };
};

let tagOrderBgColors = `
bg-red-400 bg-red-500 bg-red-600 
bg-pink-400 bg-pink-500 bg-pink-600 
bg-orange-400 bg-orange-500 bg-orange-600 
bg-yellow-400 bg-yellow-500 bg-yellow-600 
bg-lime-400 bg-lime-500 bg-lime-600 
bg-green-400 bg-green-500 bg-green-600 
bg-teal-400 bg-teal-500 bg-teal-600 
bg-sky-400 bg-sky-500 bg-sky-600 
bg-blue-400 bg-blue-500 bg-blue-600 
bg-indigo-400 bg-indigo-500 bg-indigo-600 
bg-violet-400 bg-violet-500 bg-violet-600 
bg-purple-400 bg-purple-500 bg-purple-600 
bg-purple-300 bg-purple-400 bg-purple-500 
bg-amber-700 bg-amber-800 bg-amber-900
bg-fuchsia-400 bg-fuchsia-500 bg-fuchsia-600 
bg-pink-400 bg-pink-500 bg-pink-600 
bg-rose-400 bg-rose-500 bg-rose-600 
bg-amber-400 bg-amber-500 bg-amber-600 
bg-cyan-400 bg-cyan-500 bg-cyan-600 
bg-gray-400 bg-gray-500 bg-gray-600 
`

export const tagOrderBgColor:tagColorType = {
    // 0: {
    //     light: 'bg-red-400',
    //     normal: 'bg-red-500',
    //     dark: 'bg-red-600'
    // },
    // 1: {
    //     light: 'bg-orange-400',
    //     normal: 'bg-orange-500',
    //     dark: 'bg-orange-600'
    // },
    // 2: {
    //     light: 'bg-yellow-400',
    //     normal: 'bg-yellow-500',
    //     dark: 'bg-yellow-600'
    // },
    // 3: {
    //     light: 'bg-lime-400',
    //     normal: 'bg-lime-500',
    //     dark: 'bg-lime-600'
    // },
    0: {
        light: 'bg-red-400',
        normal: 'bg-red-500',
        dark: 'bg-red-600'
    },
    1: {
        light: 'bg-pink-400',
        normal: 'bg-pink-500',
        dark: 'bg-pink-600'
    },
    2: {
        light: 'bg-orange-400',
        normal: 'bg-orange-500',
        dark: 'bg-orange-600'
    },
    3: {
        light: 'bg-yellow-400',
        normal: 'bg-yellow-500',
        dark: 'bg-yellow-600'
    },
    4: {
        light: 'bg-lime-400',
        normal: 'bg-lime-500',
        dark: 'bg-lime-600'
    },
    5: {
        light: 'bg-green-400',
        normal: 'bg-green-500',
        dark: 'bg-green-600'
    },
    6: {
        light: 'bg-teal-400',
        normal: 'bg-teal-500',
        dark: 'bg-teal-600'
    },
    7: {
        light: 'bg-sky-400',
        normal: 'bg-sky-500',
        dark: 'bg-sky-600'
    },
    8: {
        light: 'bg-blue-400',
        normal: 'bg-blue-500',
        dark: 'bg-blue-600'
    },
    9: {
        light: 'bg-indigo-400',
        normal: 'bg-indigo-500',
        dark: 'bg-indigo-600'
    },
    10: {
        light: 'bg-violet-400',
        normal: 'bg-violet-500',
        dark: 'bg-violet-600'
    },
    // 10: {
    //     light: 'bg-purple-400',
    //     normal: 'bg-purple-500',
    //     dark: 'bg-purple-600'
    // },
    11: {
        light: 'bg-purple-300',
        normal: 'bg-purple-400',
        dark: 'bg-purple-500'
    },
    12: {
        light: 'bg-amber-600',
        normal: 'bg-amber-700',
        dark: 'bg-amber-800'
    },
    13: {
        light: 'bg-pink-400',
        normal: 'bg-pink-500',
        dark: 'bg-pink-600'
    },
    14: {
        light: 'bg-rose-400',
        normal: 'bg-rose-500',
        dark: 'bg-rose-600'
    },
    15: {
        light: 'bg-amber-400',
        normal: 'bg-amber-500',
        dark: 'bg-amber-600'
    },
    // 16: {
    //     light: 'bg-cyan-400',
    //     normal: 'bg-cyan-500',
    //     dark: 'bg-cyan-600'
    // },
    16: {
        light: 'bg-gray-400',
        normal: 'bg-gray-500',
        dark: 'bg-gray-600'
    },
}

let tagBorderColors = `
border-red-400 border-red-500 border-red-600 
border-pink-400 border-pink-500 border-pink-600 
border-orange-400 border-orange-500 border-orange-600 
border-yellow-400 border-yellow-500 border-yellow-600 
border-lime-400 border-lime-500 border-lime-600 
border-green-400 border-green-500 border-green-600 
border-teal-400 border-teal-500 border-teal-600 
border-sky-400 border-sky-500 border-sky-600 
border-blue-400 border-blue-500 border-blue-600 
border-indigo-400 border-indigo-500 border-indigo-600 
border-violet-400 border-violet-500 border-violet-600 
border-purple-400 border-purple-500 border-purple-600 
border-purple-300 border-purple-400 border-purple-500 
border-amber-700 border-amber-800 border-amber-900
border-fuchsia-400 border-fuchsia-500 border-fuchsia-600 
border-pink-400 border-pink-500 border-pink-600 
border-rose-400 border-rose-500 border-rose-600 
border-amber-400 border-amber-500 border-amber-600 
border-cyan-400 border-cyan-500 border-cyan-600 
border-gray-400 border-gray-500 border-gray-600 
`

export const tagBorderColor:tagColorType = {
    // 0: {
    //     light: 'border-red-400',
    //     normal: 'border-red-500',
    //     dark: 'border-red-600'
    // },
    // 1: {
    //     light: 'border-orange-400',
    //     normal: 'border-orange-500',
    //     dark: 'border-orange-600'
    // },
    // 2: {
    //     light: 'border-yellow-400',
    //     normal: 'border-yellow-500',
    //     dark: 'border-yellow-600'
    // },
    // 3: {
    //     light: 'border-lime-400',
    //     normal: 'border-lime-500',
    //     dark: 'border-lime-600'
    // },
    0: {
        light: 'border-red-400',
        normal: 'border-red-500',
        dark: 'border-red-600'
    },
    1: {
        light: 'border-pink-400',
        normal: 'border-pink-500',
        dark: 'border-pink-600'
    },
    2: {
        light: 'border-orange-400',
        normal: 'border-orange-500',
        dark: 'border-orange-600'
    },
    3: {
        light: 'border-yellow-400',
        normal: 'border-yellow-500',
        dark: 'border-yellow-600'
    },
    4: {
        light: 'border-lime-400',
        normal: 'border-lime-500',
        dark: 'border-lime-600'
    },
    5: {
        light: 'border-green-400',
        normal: 'border-green-500',
        dark: 'border-green-600'
    },
    6: {
        light: 'border-teal-400',
        normal: 'border-teal-500',
        dark: 'border-teal-600'
    },
    7: {
        light: 'border-sky-400',
        normal: 'border-sky-500',
        dark: 'border-sky-600'
    },
    8: {
        light: 'border-blue-400',
        normal: 'border-blue-500',
        dark: 'border-blue-600'
    },
    9: {
        light: 'border-indigo-400',
        normal: 'border-indigo-500',
        dark: 'border-indigo-600'
    },
    10: {
        light: 'border-violet-400',
        normal: 'border-violet-500',
        dark: 'border-violet-600'
    },
    // 10: {
    //     light: 'border-purple-400',
    //     normal: 'border-purple-500',
    //     dark: 'border-purple-600'
    // },
    11: {
        light: 'border-purple-300',
        normal: 'border-purple-400',
        dark: 'border-purple-600'
    },
    12: {
        light: 'border-amber-600',
        normal: 'border-amber-700',
        dark: 'border-amber-800'
    },
    13: {
        light: 'border-pink-400',
        normal: 'border-pink-500',
        dark: 'border-pink-600'
    },
    14: {
        light: 'border-rose-400',
        normal: 'border-rose-500',
        dark: 'border-rose-600'
    },
    15: {
        light: 'border-amber-400',
        normal: 'border-amber-500',
        dark: 'border-amber-600'
    },
    16: {
        light: 'border-gray-400',
        normal: 'border-gray-500',
        dark: 'border-gray-600'
    },
}

let tagFillColors = `
fill-red-400 fill-red-500 fill-red-600 
fill-pink-400 fill-pink-500 fill-pink-600 
fill-orange-400 fill-orange-500 fill-orange-600 
fill-yellow-400 fill-yellow-500 fill-yellow-600 
fill-lime-400 fill-lime-500 fill-lime-600 
fill-green-400 fill-green-500 fill-green-600 
fill-teal-400 fill-teal-500 fill-teal-600 
fill-sky-400 fill-sky-500 fill-sky-600 
fill-blue-400 fill-blue-500 fill-blue-600 
fill-indigo-400 fill-indigo-500 fill-indigo-600 
fill-violet-400 fill-violet-500 fill-violet-600 
fill-purple-400 fill-purple-500 fill-purple-600 
fill-purple-300 fill-purple-400 fill-purple-500 
fill-amber-700 fill-amber-800 fill-amber-900
fill-fuchsia-400 fill-fuchsia-500 fill-fuchsia-600 
fill-pink-400 fill-pink-500 fill-pink-600 
fill-rose-400 fill-rose-500 fill-rose-600 
fill-amber-400 fill-amber-500 fill-amber-600 
fill-cyan-400 fill-cyan-500 fill-cyan-600 
fill-gray-400 fill-gray-500 fill-gray-600 
`

export const tagOrderFillColor:tagColorType = {
    // 0: {
    //     light: 'fill-red-400',
    //     normal: 'fill-red-500',
    //     dark: 'fill-red-600'
    // },
    // 1: {
    //     light: 'fill-orange-400',
    //     normal: 'fill-orange-500',
    //     dark: 'fill-orange-600'
    // },
    // 2: {
    //     light: 'fill-yellow-400',
    //     normal: 'fill-yellow-500',
    //     dark: 'fill-yellow-600'
    // },
    // 3: {
    //     light: 'fill-lime-400',
    //     normal: 'fill-lime-500',
    //     dark: 'fill-lime-600'
    // },
    0: {
        light: 'fill-red-400',
        normal: 'fill-red-500',
        dark: 'fill-red-600'
    },
    1: {
        light: 'fill-pink-400',
        normal: 'fill-pink-500',
        dark: 'fill-pink-600'
    },
    2: {
        light: 'fill-orange-400',
        normal: 'fill-orange-500',
        dark: 'fill-orange-600'
    },
    3: {
        light: 'fill-yellow-400',
        normal: 'fill-yellow-500',
        dark: 'fill-yellow-600'
    },
    4: {
        light: 'fill-lime-400',
        normal: 'fill-lime-500',
        dark: 'fill-lime-600'
    },
    5: {
        light: 'fill-green-400',
        normal: 'fill-green-500',
        dark: 'fill-green-600'
    },
    6: {
        light: 'fill-teal-400',
        normal: 'fill-teal-500',
        dark: 'fill-teal-600'
    },
    7: {
        light: 'fill-sky-400',
        normal: 'fill-sky-500',
        dark: 'fill-sky-600'
    },
    8: {
        light: 'fill-blue-400',
        normal: 'fill-blue-500',
        dark: 'fill-blue-600'
    },
    9: {
        light: 'fill-indigo-400',
        normal: 'fill-indigo-500',
        dark: 'fill-indigo-600'
    },
    10: {
        light: 'fill-violet-400',
        normal: 'fill-violet-500',
        dark: 'fill-violet-600'
    },
    // 10: {
    //     light: 'fill-purple-400',
    //     normal: 'fill-purple-500',
    //     dark: 'fill-purple-600'
    // },
    11: {
        light: 'fill-purple-300',
        normal: 'fill-purple-400',
        dark: 'fill-purple-500'
    },
    12: {
        light: 'fill-amber-600',
        normal: 'fill-amber-700',
        dark: 'fill-amber-800'
    },
    13: {
        light: 'fill-pink-400',
        normal: 'fill-pink-500',
        dark: 'fill-pink-600'
    },
    14: {
        light: 'fill-rose-400',
        normal: 'fill-rose-500',
        dark: 'fill-rose-600'
    },
    15: {
        light: 'fill-amber-400',
        normal: 'fill-amber-500',
        dark: 'fill-amber-600'
    },
    // 16: {
    //     light: 'fill-cyan-400',
    //     normal: 'fill-cyan-500',
    //     dark: 'fill-cyan-600'
    // },
    16: {
        light: 'fill-gray-400',
        normal: 'fill-gray-500',
        dark: 'fill-gray-600'
    },
}