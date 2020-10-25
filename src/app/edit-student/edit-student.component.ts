import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray  } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student.model';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
	editStudent: FormGroup;
	students = [];
  currentEmail: string;
	 id: number = +this.route.snapshot.params['id'];
	 student: Student;
  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.students = this.studentService.fetchStudents();
  	this.editStudent = new FormGroup({
			'firstname': new FormControl(null, [Validators.required]),
			'lastname': new FormControl(null, [Validators.required]),
			'email': new FormControl(null, [Validators.required, Validators.email]),
			'college': new FormControl(null, [Validators.required]),
			'major': new FormControl(null, [Validators.required]),
			'country': new FormControl(null, [Validators.required]),
			'city': new FormControl(null, [Validators.required])
		});

  	this.editStudent.setValue({
  		'firstname': this.students[this.id-1].firstname,
  		'lastname' : this.students[this.id-1].lastname,
  		'email': this.students[this.id-1].email,
  		'college': this.students[this.id-1].college,
  		'major': this.students[this.id-1].major,
  		'country': this.students[this.id-1].country,
  		'city': this.students[this.id-1].city,
  	});
  	
    this.currentEmail = this.students[this.id-1].email;
  	
  }

  updateStudent(){
    if(confirm('Are you sure you want to update this student?')){
    	this.student = this.editStudent.value;
    	this.studentService.updateStudent(this.student, this.id);
      this.router.navigate(['/view-data']);
     }

  }

}
