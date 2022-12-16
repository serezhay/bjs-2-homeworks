function Student(name, gender, age, ...marks) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = marks;
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if (this.addMarks.hasOwnProperty('marks') !== undefined) {
        this.marks.push(...marksToAdd)
    } else {
            console.log('Студент отчислен');
    }
    
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined || (this.marks.length < 1) ) {
    return 0
  } else { 
     let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
    return sum / this.marks.length
  }
}


Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded  = reason;
}