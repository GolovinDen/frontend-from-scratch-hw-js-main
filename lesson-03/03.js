// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    let max
    if (a > b) {
        max = a
    } else if (b > c) {
        max = b
    } else
        max = c
    return max
}
