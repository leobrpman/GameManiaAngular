import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginModel = new Login ("", "")

  mensagem = "";
  
  onSubmit () {
    // console.log("Modelo: ", this.loginModel)

    const listaPalavras: string[] = [" ", "select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "\*", "\--", "\#", "\;"]

    listaPalavras.forEach(word => {
      if(this.loginModel.email.toLowerCase().includes(word)) {
        this.mensagem = "Dados inválidos: " + word
        return
      }
    })
    
    this.loginService.login(this.loginModel).subscribe( async (response) => {
      console.log(response)
      this.mensagem = "Você está logado!";
      await new Promise(f => setTimeout(f, 2000));
      this.router.navigateByUrl("/")

    }, (error) => {
      console.log(error);
      this.mensagem = error.error;
    })
  }

}




// let requestBody = {
//   email: "leonardo@email.com"
//   password: "batatagratinada"
// }

// let stringSql = "SELECT * FROM Users WHERE UserEmail = " + requestBody.email + " AND UserPassword = " + requestBody.password

// --> SELECT * FROM Users WHERE UserEmail = leonardo@email.com AND UserPassword = batatagratinada


