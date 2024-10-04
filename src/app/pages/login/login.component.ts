import { Component } from '@angular/core';
import { Login } from '../../model/class/UserLogin';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {



  loginObj: Login;
  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

    onLogin() {
      debugger;
      this.http.post('https://freeapi.miniprojectideas.com/api/User/Login',this.loginObj).subscribe((res:any)=>{
        if(res.result){
          alert("Login Success");

          // Store token in local storage
          localStorage.setItem('token',res.data.token);

          // Navigate based on role
          this.router.navigate(['/dashboard']);
        }else {
          alert(res.message);
        }
      })

    }

}
