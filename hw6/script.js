const students = [
    {
        id: 1,
        name: 'Alex',
        marks: [10, 10, 5],
    },
    {
        id: 2,
        name: 'Bob',
        marks: [10, 10, 10],
    },
    {
        id: 3,
        name: 'John',
        marks: [10, 10, 5],
    },
];

const id = +prompt('Student Id');
const student = students.find((student) => student.id === id);

alert('AVG: ' + calculateStudentAverageMark(student));

function calculateStudentAverageMark({ marks }) {
    return getAverage(marks);
}

function calculateGroupAverageMark(students) {
    // let allMarks = [];
    // students.forEach(({ marks }) => (allMarks = allMarks.concat(marks)));

    // const allMarks = students.reduce((acc, { marks }) => acc.concat(marks), []);

    // const allMarks = students.map(({ marks }) => marks).flat();

    const allMarks = students.flatMap(({ marks }) => marks);
    return getAverage(allMarks);
}

function getAverage(values) {
    return values.reduce((sum, value) => sum + value) / values.length;
}