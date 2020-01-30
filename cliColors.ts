function buildColorArray(color): number[] {
    const colors: Record<string, Array<number>> = {
        'RED': [196, 1, 160, 124, 88, 52, 16],
        'GREEN': [16, 22, 28, 34, 40, 46],
        'BLUE': [16, 17, 18, 19, 20, 21],
        'YELLOW': [226, 227, 228, 229, 230, 231],
    }

    return colors[color].concat(colors[color].slice().reverse())
}


function printColors(text, colorCodes) {
    let end: string = '\x1b[0m'
    let i: number = 0
    let coloredText: string = ''
    for (let letter of text) {
        if (letter === ' ') {
            coloredText += letter
        } else {
            const coloredLetter: string = `\x1b[38;5;${colorCodes[i]}m` + letter + end
            coloredText += coloredLetter
            i++
            if (i >= colorCodes.length) {
                i = 0
            }
        }
    }
    return coloredText
}


function main() {
    let text = '12345678901 23456789012 3 4567890123456 78901234 5678901234  567890123 456789012345678 90123456 7890'

    console.log('1: ', printColors(text, buildColorArray('RED')))
    console.log('2: ', printColors(text, buildColorArray('RED')))
    console.log('3: ', printColors(text, buildColorArray('RED')))
    console.log('4: ', printColors(text, buildColorArray('RED')))
    console.log('5: ', printColors(text, buildColorArray('RED')))
    console.log('6: ', printColors(text, buildColorArray('GREEN')))
    console.log('7: ', printColors(text, buildColorArray('BLUE')))
    console.log('8: ', printColors(text, buildColorArray('YELLOW')))
}


// only calls main if called from command line -> node way to do python's __name___ == '__main__'
const parentModule = process.argv[1]
if (parentModule.includes('cliColors.js')) {
    main()
} else {
    console.log('Importing cliColors.js')
}