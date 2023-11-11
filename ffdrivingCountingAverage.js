// Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.
//
//     At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.
//
//     Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.
//
//
//     Example:
//
// [10,10,10,18,20,20] --> 12

function passed(list) {
    let passedTests = []
    let sum = 0
    for (let i = 0; i <= list.length; i++) {
        if (list[i] <= 18) {
            passedTests.push(list[i])
        }
    }
    for (let i = 0; i < passedTests.length; i++) {
        sum += passedTests[i];
    }
    if (passedTests.length === 0) return 'No pass scores registered.'

    if (passedTests.length > 0) {
        return parseInt((sum / passedTests.length).toFixed(0))
    }
}


console.log(passed([10, 10, 10, 18, 20, 20]))
console.log(passed([21, 22, 24]))
console.log(passed([3, 22, 9, 13, 20, 18, 2, 14, 20, 8, 23, 12, 7, 21, 21, 19, 20, 11, 18, 7, 13, 22, 11, 20, 9]))
console.log(passed([19, 16, 8, 11, 25, 10, 29, 22, 23]))
