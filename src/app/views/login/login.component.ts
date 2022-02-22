import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'], 

})



export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router)  { }

  ngOnInit(): void {
  }

  loginModel = new User();

  mensagem = ""

  onSubmit() {
    console.log(this.loginModel)

    let erroEncontrado = 0;

    const listaPalavras: string[] = ["select ","from", "drop ","or","having","group","insert ","exec ","\"","\'","--","#","*",";"]

    listaPalavras.forEach(palavra =>{
      if(this.loginModel.email?.toLowerCase().includes(palavra)){
        this.mensagem = "Dados Invalidos " + palavra;
        erroEncontrado = 1;
      }
    })

    if (erroEncontrado == 0){

      this.loginService.login(this.loginModel).subscribe( (response) => {
        this.router.navigateByUrl('/')
      }, (respostaErro) => {
          this.mensagem = respostaErro.error
    
      } )
    }
    
    }


}

