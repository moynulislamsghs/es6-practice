class Student{
    constructor(sID, sName, sDepartment){
        this.name = sID;
        this.sName = sName;
        this.sDepartment = sDepartment;
        this.university = "Green University of Bangladesh";
    }
}

const student1 = new Student(1, "Moynul", "CSE");
const student2 = new Student(6, "Lopa", "English");
const student3 = new Student(3, "Mehenaz", "EEE");
console.log(student1, student2, student3);