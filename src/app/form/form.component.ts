import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { NgForm, FormGroup, FormControl, Validators, FormArray  } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  	constructor(private studentService: StudentService){}
	newStudent: FormGroup;
	student: Student;
	students =  []; 

	ngOnInit(){
		this.students = this.studentService.fetchStudents();
		this.newStudent = new FormGroup({
			'firstname': new FormControl(null, [Validators.required]),
			'lastname': new FormControl(null, [Validators.required]),
			'email': new FormControl(null, [Validators.required, Validators.email]),
			'college': new FormControl(null, [Validators.required]),
			'major': new FormControl(null, [Validators.required]),
			'country': new FormControl(null, [Validators.required]),
			'city': new FormControl(null, [Validators.required])
		});


	}
	onSubmit(){

		this.studentService.addStudent(this.newStudent.value.firstname,
			this.newStudent.value.lastname,
			this.newStudent.value.email,
			this.newStudent.value.college,
			this.newStudent.value.major,
			this.newStudent.value.country,
			this.newStudent.value.city);
		this.newStudent.reset();
			
			
	}

}
