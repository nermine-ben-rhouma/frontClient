import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  user:User=new User()
  rememberMe: any;
  show: boolean=false;
  message: string='';
  constructor(private fb:FormBuilder, private authService:AuthService,private router: Router,) {
    this.loginForm = fb.group({
      role:[''],
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required]],
      remember:['', [Validators.required]]
    });

}
submit() {

  this.user.email=this.loginForm.value?.email// recuperation de donnéd 
  this.user.password=this.loginForm.value?.password
  this.user.role=this.loginForm.value?.role
this.rememberMe=this.loginForm.value?.remember
  this.authService.loginUser(this.user).subscribe(
    token => {
      console.log(token)
      var now = new Date();
      var time = now.getTime();
      if (this.rememberMe == true) {
        var expireTime = time + 24000 * 3600;
      } else {
        var expireTime = time + 2000 * 3600;
      }
      now.setTime(expireTime);
      localStorage.setItem('token',token)
      localStorage.setItem('expires',"expires=" + now + ";path=/")
      // document.cookie = "userId=" + Object.values(token)[0] + "; expires=" + now + ";path=/";
      // document.cookie = "token=" + Object.values(token)[12] + "; expires=" + now + ";path=/";
      document.cookie = "role=" + Object.values(token)[8] + "; expires=" + now + ";path=/";
    
        this.router.navigateByUrl('/randonnee');
      
    },
    err => {
      this.show = true
      this.message=' user ne est exist pas'
    }
  )
}
// sendResetMail() {
//   let resetContent = '<div class="text-center" style=‘width:650px;font-family:Open-sans,sans-serif;font-size:13px;line-height:18px;margin:auto;’><table style=‘width:100%;margin-top:10px’><tbody><tr><td style=‘width:20px;padding:7px 0’>&nbsp;</td><td align=‘center’ style=‘padding:7px 0’><table  style=width:100%’><tbody><tr><td align=‘center’ style="border-bottom:4px ; solid :#333333;padding:7px 0 ;"><a title="IOC" , href="https://next.ioc.tn/" ;  target=‘_blank’ ><img src="https://res.cloudinary.com/http-next-ioc-tn/image/upload/v1631109471/ioc_logo_puz03u.png" style="margin-left: 50% ; padding-bottom:100px;" alt=IOC data-image-whitelisted=‘‘ class=‘CToWUd’></a></td>	</tr><tr><td align=‘center’ style=‘padding:7px 0’><font size=‘2’ face=‘Open-sans, sans-serif’><span style=‘font-weight:500;font-size:28px;text-transform:uppercase;line-height:33px’> Bonjour </span><br><span style=‘font-weight:500;font-size:16px;line-height:25px’><p>Nous avons reçu une demande de changement de mot de passe pour votre compte. <br> Si vous avez demandé ce changement, définir un nouveau mot de passe ici :</p></span></font>	</td></tr><tr><td style=‘padding:0!important’>&nbsp;</td></tr><tr><td style=‘border:1px solid #d6d4d4;padding:7px 0’><table style=‘width:100%’>	<tbody><tr>	<td width=‘10’ style=‘padding:7px 0’>&nbsp;</td><td style=‘padding:7px 0’><font size=‘2’ face=‘Open-sans, sans-serif’><p style=‘border-bottom:1px solid #d6d4d4;margin:3px 0 7px;text-transform:uppercase;font-weight:500;font-size:18px;padding-bottom:10px’></p><a href=http://localhost:4200/user/reset-password?token=' + this.link + 'id' + this.userObject.id + '><button style="border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;background-color:#0072A3;"> Définir un nouveau mot de passe </button> </a> <br><br><br><p style="font-size:18px;">Si vous n' + "'" + 'avez pas fait cette demande, vous pouvez ignorer cet e-mail et votre mot de passe restera le même. <br><br> Merci, <b style="color:#5a3715;"> IOC <b>! </p>'
//   this.mailForm = {
//     "from": environment.emailSociete,
//     "to": this.resetMail,
//     "subject": "Réinitialisation de mot de passe IOC",
//     "content": resetContent
//   }
//   this.quotationService.sendMail(this.mailForm).subscribe(
//     data => {
//       this.linkSent = true
//       this.isLogin = true
//       this.validateBtnState = ClrLoadingState.SUCCESS;
//       setTimeout(() => {
//         this.router.navigate(['/user/login']);
//       }, 3000);
//     },
//     err => {
//       this.validateBtnState = ClrLoadingState.ERROR;
//     }

//   )
// }
}




