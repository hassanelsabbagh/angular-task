import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

	public students = []; 
	private student: string;

  constructor(private studentService: StudentService) { }

  ngOnInit(){
    
  	this.students = this.studentService.fetchStudents();
  	}

  	deleteStudent(id){
      if(confirm('Are you sure you want to delete this student?')){
    		 this.students = JSON.parse(localStorage.getItem('Students'));
    		 this.students.splice(id,1);
    		 localStorage.setItem('Students', JSON.stringify(this.students));
      }
  	}



}
