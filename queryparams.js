const express = require('express');
const students = require('./students.json');
const app = express();

app.get('/search', (req, res) => {
    const course = req.query.course;
    console.log(`Course query parameter: ${course}`);
    if (!course) {
        return res.status(400).send('Course query parameter is required');
    }  

    if (course) {
        const filteredStudents = students.filter(student => student.course.toLocaleLowerCase() === course.toLocaleLowerCase());
        res.send(filteredStudents);
    }
    // res.json(students)
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})