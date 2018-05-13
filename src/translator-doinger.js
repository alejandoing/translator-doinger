export default function doinger(str) {
    const reverse = str => str.split('').reverse().join('')
    const minMay = str => str.split('').map((value, key) => key % 2 ? value.toLowerCase() : value.toUpperCase()).join('')
    const half = Math.round(str.length / 2)

    let translation = str

    if (str == reverse(str)) translation = minMay(str)

    if (str.toLowerCase().endsWith('ar')) translation = str.slice(0, -2)

    if (str.toLowerCase().startsWith('z')) translation += 'pe'

    if (str.length >= 10) translation = `${translation.slice(0, half)}-${translation.slice(half)}`

    return translation
}