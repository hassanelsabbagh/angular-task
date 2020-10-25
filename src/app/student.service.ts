import { Injectable } from '@angular/core';
import { Student } from './student.model';
 import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class StudentService{
	private student: Student;
	private studentArray =  [];
	studentsFound = false;
	addStudent(
		firstname: string,
		lastname: string,
		email: string,
		college: string,
		major: string,
		country: string,
		city: string){

		let students = [];
		this.student = new Student(firstname,lastname, email, college,major,country,city);

		if(localStorage.getItem('Students')){
			students = JSON.parse(localStorage.getItem('Students'));
			students = [this.student, ...students];
		}else{
			students = [this.student];
		}
		localStorage.setItem('Students', JSON.stringify(students));
		alert('Student Added Successfuly');
		
	}

	updateStudent(newstudent, id: number){
		let students = [];
		students = JSON.parse(localStorage.getItem('Students'));
		students[id -1].firstname = newstudent.firstname;
		students[id -1].lastname = newstudent.lastname;
		students[id -1].email = newstudent.email;
		students[id -1].college = newstudent.college;
		students[id -1].major = newstudent.major;
		students[id -1].city = newstudent.city;
		students[id -1].country = newstudent.country;
		localStorage.setItem('Students', JSON.stringify(students));
		

	}

	fetchStudents(){
		return JSON.parse(localStorage.getItem('Students'));


	}
}