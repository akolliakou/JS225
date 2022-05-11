// In an earlier exercise, we created a school object. It works, however, it can still be improved. 
// The following are improvements for you to implement in the solution provided:

// Make the list students private. Right now, anyone can gain access to it and manipulate it.
// Make the constraint for allowed values for years a private variable. As a private variable it avoids an unnecessary 
// statement in the addStudent method and at the same time makes the code more declarative.

function createStudent(name, year) {
  let student = {};

  student.name = name;
  student.year = year;
  student.courses = [];
  student.info = function() {
    console.log(`${name} is a ${year} student`)
  }
  student.listCourses = function() {
    return this.courses;
  }
  student.addCourse = function(course) {
    this.courses.push(course);
  }
  student.addNote = function(courseNumber, note) {
    let course = this.courses.filter(({code}) => code === courseNumber)[0];

    if (course) {
      if (course.note) {
        course.note += `;${note}`;
      } else {
        course.note = note;
      }
    }
  }
  student.updateNote = function(courseNumber, note) {
    let course = this.courses.filter(({code}) => code === courseNumber)[0];

    if (course) {
      course.note = note;
    }
  }
  student.viewNotes = function() {
    this.courses.forEach(course => {
      console.log(`${course.name}: ${course.note}`)
    });
  }

  return student;
}

let school = (() => {
  let students = [];
  const validYears = ['1st', '2nd', '3rd', '4th', '5th'];

  return {
    addStudent(name, year) {
      if (validYears.includes(year)) {
        let student = createStudent(name, year);
        students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },
    enrollStudent(student, course) {
      student.addCourse(course);
    },
    addGrade(student, grade, courseCode) {
      let course = student.courses.find((course) => course.code === courseCode);
      if (course) {
        course.grade = grade;
      }
    },
    getReportCard(student, course) {
      student.courses.forEach((course) => {
        if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
        } else {
          console.log(`${course.name}: In Progress`);
        }
      });
    },
    courseReport(courseName) {
      console.log(`=${courseName} Grades=`);

      let totalGrade = 0;
      let totalStudents = 0;

      students.forEach((student) => {
        let course = student.courses.find((course) => course.name === courseName);
        if (course && course.grade) {
          totalGrade += course.grade;
          totalStudents += 1;
          console.log(`${student.name}: ${course.grade}`)
        } 
      });

      let courseAverage = totalGrade / totalStudents;
      console.log('---');
      console.log(`Course Average: ${courseAverage}`);
    },
  };
})();








