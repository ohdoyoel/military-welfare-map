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

let tagOrderBgGradientColors = `
bg-gradient-to-br from-red-400 to-red-600
bg-gradient-to-br from-pink-300 to-pink-600
bg-gradient-to-br from-orange-300 to-orange-600
bg-gradient-to-br from-yellow-300 to-yellow-600
bg-gradient-to-br from-lime-300 to-lime-600
bg-gradient-to-br from-green-300 to-green-600
bg-gradient-to-br from-teal-300 to-teal-600
bg-gradient-to-br from-sky-300 to-sky-600
bg-gradient-to-br from-blue-300 to-blue-600
bg-gradient-to-br from-indigo-300 to-indigo-600
bg-gradient-to-br from-violet-300 to-violet-600
bg-gradient-to-br from-purple-200 to-purple-500
`

export const tagOrderBgGradientColor = [
    'bg-gradient-to-br from-red-300 to-red-600',
    'bg-gradient-to-br from-pink-300 to-pink-600',
    'bg-gradient-to-br from-orange-300 to-orange-600',
    'bg-gradient-to-br from-yellow-300 to-yellow-600',
    'bg-gradient-to-br from-lime-300 to-lime-600',
    'bg-gradient-to-br from-green-300 to-green-600',
    'bg-gradient-to-br from-teal-300 to-teal-600',
    'bg-gradient-to-br from-sky-300 to-sky-600',
    'bg-gradient-to-br from-blue-300 to-blue-600',
    'bg-gradient-to-br from-indigo-300 to-indigo-600',
    'bg-gradient-to-br from-violet-300 to-violet-600',
    'bg-gradient-to-br from-purple-200 to-purple-500',

    // 12: {
    //     light: 'bg-amber-600',
    //     normal: 'bg-amber-700',
    //     dark: 'bg-amber-800'
    // },
    // 13: {
    //     light: 'bg-pink-400',
    //     normal: 'bg-pink-500',
    //     dark: 'bg-pink-600'
    // },
    // 14: {
    //     light: 'bg-rose-400',
    //     normal: 'bg-rose-500',
    //     dark: 'bg-rose-600'
    // },
    // 15: {
    //     light: 'bg-amber-400',
    //     normal: 'bg-amber-500',
    //     dark: 'bg-amber-600'
    // },
    // 16: {
    //     light: 'bg-cyan-400',
    //     normal: 'bg-cyan-500',
    //     dark: 'bg-cyan-600'
    // },
    // 16: {
    //     light: 'bg-gray-400',
    //     normal: 'bg-gray-500',
    //     dark: 'bg-gray-600'
    // },
]

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

let tagTextColors = `
text-red-400 text-red-500 text-red-600 
text-pink-400 text-pink-500 text-pink-600 
text-orange-400 text-orange-500 text-orange-600 
text-yellow-400 text-yellow-500 text-yellow-600 
text-lime-400 text-lime-500 text-lime-600 
text-green-400 text-green-500 text-green-600 
text-teal-400 text-teal-500 text-teal-600 
text-sky-400 text-sky-500 text-sky-600 
text-blue-400 text-blue-500 text-blue-600 
text-indigo-400 text-indigo-500 text-indigo-600 
text-violet-400 text-violet-500 text-violet-600 
text-purple-400 text-purple-500 text-purple-600 
text-purple-300 text-purple-400 text-purple-500 
text-amber-700 text-amber-800 text-amber-900
text-fuchsia-400 text-fuchsia-500 text-fuchsia-600 
text-pink-400 text-pink-500 text-pink-600 
text-rose-400 text-rose-500 text-rose-600 
text-amber-400 text-amber-500 text-amber-600 
text-cyan-400 text-cyan-500 text-cyan-600 
text-gray-400 text-gray-500 text-gray-600 
`

export const tagOrderTextColor:tagColorType = {
    // 0: {
    //     light: 'text-red-400',
    //     normal: 'text-red-500',
    //     dark: 'text-red-600'
    // },
    // 1: {
    //     light: 'text-orange-400',
    //     normal: 'text-orange-500',
    //     dark: 'text-orange-600'
    // },
    // 2: {
    //     light: 'text-yellow-400',
    //     normal: 'text-yellow-500',
    //     dark: 'text-yellow-600'
    // },
    // 3: {
    //     light: 'text-lime-400',
    //     normal: 'text-lime-500',
    //     dark: 'text-lime-600'
    // },
    0: {
        light: 'text-red-400',
        normal: 'text-red-500',
        dark: 'text-red-600'
    },
    1: {
        light: 'text-pink-400',
        normal: 'text-pink-500',
        dark: 'text-pink-600'
    },
    2: {
        light: 'text-orange-400',
        normal: 'text-orange-500',
        dark: 'text-orange-600'
    },
    3: {
        light: 'text-yellow-400',
        normal: 'text-yellow-500',
        dark: 'text-yellow-600'
    },
    4: {
        light: 'text-lime-400',
        normal: 'text-lime-500',
        dark: 'text-lime-600'
    },
    5: {
        light: 'text-green-400',
        normal: 'text-green-500',
        dark: 'text-green-600'
    },
    6: {
        light: 'text-teal-400',
        normal: 'text-teal-500',
        dark: 'text-teal-600'
    },
    7: {
        light: 'text-sky-400',
        normal: 'text-sky-500',
        dark: 'text-sky-600'
    },
    8: {
        light: 'text-blue-400',
        normal: 'text-blue-500',
        dark: 'text-blue-600'
    },
    9: {
        light: 'text-indigo-400',
        normal: 'text-indigo-500',
        dark: 'text-indigo-600'
    },
    10: {
        light: 'text-violet-400',
        normal: 'text-violet-500',
        dark: 'text-violet-600'
    },
    // 10: {
    //     light: 'text-purple-400',
    //     normal: 'text-purple-500',
    //     dark: 'text-purple-600'
    // },
    11: {
        light: 'text-purple-300',
        normal: 'text-purple-400',
        dark: 'text-purple-500'
    },
    12: {
        light: 'text-amber-600',
        normal: 'text-amber-700',
        dark: 'text-amber-800'
    },
    13: {
        light: 'text-pink-400',
        normal: 'text-pink-500',
        dark: 'text-pink-600'
    },
    14: {
        light: 'text-rose-400',
        normal: 'text-rose-500',
        dark: 'text-rose-600'
    },
    15: {
        light: 'text-amber-400',
        normal: 'text-amber-500',
        dark: 'text-amber-600'
    },
    // 16: {
    //     light: 'text-cyan-400',
    //     normal: 'text-cyan-500',
    //     dark: 'text-cyan-600'
    // },
    16: {
        light: 'text-gray-400',
        normal: 'text-gray-500',
        dark: 'text-gray-600'
    },
}