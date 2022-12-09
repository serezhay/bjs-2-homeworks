function Student(name, gender, age, ...marks) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = marks;
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}
/*
 it("Добавление группы оценок addMarks работает корректно", () => {
    let student = new Student("Василиса", "женский", 19);
    
    expect(student.marks).toEqual([]);

    student.addMarks(5, 4, 5);
    expect(student.marks).toEqual([5, 4, 5]);

    student.addMarks(5, 4, 5);
    expect(student.marks).toEqual([5, 4, 5, 5, 4, 5]);
  });
*/
Student.prototype.addMarks = function (...marksToAdd) {
    if (Student.hasOwnProperty('marks')) {
        this.addMarks = marksToAdd;
    } else {
            console.log('Студент отчислен');
    }
    
}

Student.prototype.getAverage = function () {
  
}

Student.prototype.exclude = function (reason) {
  
}