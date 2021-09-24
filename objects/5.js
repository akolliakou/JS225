// Create a school object. The school object uses the student object from the previous exercise. 
// It has methods that use and update information about the student. 
// Be sure to check out the previous exercise for the other arguments that might be needed by the school object. 
// Implement the following methods for the school object:

// addStudent: Adds a student by creating a new student and adding the student to a collection of students. 
// The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. 
// Returns a student object if year is valid otherwise it logs "Invalid Year".
// enrollStudent: Enrolls a student in a course.
// addGrade: Adds the grade of a student for a course.
// getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
// courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
// To test your code, use the three student objects listed below. Using the three student objects, 
// produces the following values from the getReportCard and courseReport methods respectively.

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

let school = {
  students: [],
  addStudent(name, year) {
    const validYears = ['1st', '2nd', '3rd', '4th', '5th'];

    if (validYears.includes(year)) {
      let student = createStudent(name, year);
      this.students.push(student);
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

    this.students.forEach((student) => {
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

let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, { name: 'Math', code: 101});
school.addGrade(foo, 95, 101);
school.enrollStudent(foo, { name: 'Advanced Math', code: 102});
school.addGrade(foo, 90, 102);
school.enrollStudent(foo, { name: 'Physics', code: 202, });

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, { name: 'Math', code: 101, grade: 91, });
school.addGrade(bar, 91, 101);

school.getReportCard(foo);
school.getReportCard(bar);

school.courseReport('Math');
school.courseReport('Physics');









