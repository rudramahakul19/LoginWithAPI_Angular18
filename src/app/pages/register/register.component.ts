import { Component } from '@angular/core';
import { Register } from '../../model/class/UserRegister';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

 

  registerObj : Register;
  constructor(private http: HttpClient, private router: Router) {
    this.registerObj = new Register();
   }

   onSignUp(){
    this.http.post('https://freeapi.miniprojectideas.com/api/User/CreateNewUser',this.registerObj).subscribe((res:any)=>{
      if(res.result){
        alert("User Created Successfully");
        this.router.navigate(['/login']);
      }else{
        alert(res.message);
      }
    })
   }

}
