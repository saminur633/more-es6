const student = {
    name:'saminur',
    class:10,
    marks : {
        math:88,
        physics: 86,
        chemistry:90
    }
}
const marks = student.marks;
const math = student.marks.math;
console.log(math);