import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import notify from 'devextreme/ui/notify';
import { TestDataService } from '../../services/test-data.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse, HttpXsrfTokenExtractor } from '@angular/common/http';


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {

@ViewChild('loginForm')
loginform!:NgForm;

  constructor( private router: Router,private testData: TestDataService) { }

public loi :any
public keyAPI : any;
public employee : any = {
email:"",
password:""
}
  ngOnInit(): void {

  }
  onSubmit(){

    console.log(this.employee);
    this.testData.postData(this.employee).subscribe((response)=>{
      this.testData.keyBaere = response.data

      console.log('Key Baere',this.testData.keyBaere);

      if(response.status === true){
        this.router.navigate(['/project'])
      }
      else
        if(response == Error){
          console.log("a");

        }
    },
      );

  }



  submitButtonOptions = {
    text: "Submit the Form",
    useSubmitBehavior: true
}
  }

