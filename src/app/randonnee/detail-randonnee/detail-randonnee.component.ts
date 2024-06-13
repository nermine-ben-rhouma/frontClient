import { Component, OnInit } from '@angular/core';
import { RandonneeService } from '../randonnee.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../randonnee';

@Component({
  selector: 'app-detail-randonnee',
  templateUrl: './detail-randonnee.component.html',
  styleUrls: ['./detail-randonnee.component.css']
})
export class DetailRandonneeComponent  implements OnInit{
  randonnee: number=0;
  randonneeDetail:any
  detailRandonnees: any;
  activities:any= [];
  circuitList:any= [];
  isOpen:boolean=false
  formGroup: FormGroup;
  randonnees:any
  randonneeList:any
  userList: any;
  selection: any[] = [];
  states=[{"value":1},{"value":2},{"value":3},{"value":4},{"value":5}]
  show:boolean=false
  showError:boolean=false
  message:string=''
  reservation: Reservation= new Reservation()
  nombreParticipation:any
  prix:number=0
  role: string='';
  userId: number=0;
  message1:string=''

  constructor(private randonneeService:RandonneeService, private activatedRoute:ActivatedRoute,private fb: FormBuilder){
    this.formGroup = this.fb.group({
      id: [null], // Set initial value to null for auto-generated ID
      dateReservation: ['', Validators.required],
      prix: [0, Validators.required],
      nombreParticipation: [1, [Validators.required, Validators.min(1) ,Validators.max(4)]],
      clientId: ['', Validators.required],
      randonneeId: ['', Validators.required],
      selection: ['', Validators.required],
      // commentaire: [''] // Optional comment field (uncomment if needed)
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.randonnee= +params['id'];
      this.getRandonneeDetail(this.randonnee)
      this.role = this.getCookie('role')
      this.userId=Number(this.getCookie('userId'))/// take id 
   
  })


}
getCookie(cname: string) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
getRandonneeDetail(id:number){
  this.randonneeService.getRandonneeById(id).subscribe(data=>{
    console.log(data)
    this.randonneeDetail=data
    this.detailRandonnees= this.randonneeDetail.randonneeDetails
    this.detailRandonnees.forEach((detail:any) => {
      console.log(detail)
      this.activities.push(...detail.activity);
      this.circuitList.push(...detail.circuits);
      console.log(this.activities ,this.circuitList)

    });

  })
}
openChangePersonne(open: any) {
    
  console.log("openn",open)
  this.reservation.nombreParticipation=this.nombreParticipation

  console.log(this.reservation.nombreParticipation,this.randonneeDetail.prix)
  this.prix=  Number(open)*Number(this.randonneeDetail.prix)
  console.log( this.prix)
  }
setPrice(price: number) {
  this.formGroup.get('prix')?.setValue(price);
}
onSubmit(){  
  this.reservation.randonneeId=  this.randonneeDetail
  this.reservation.clientId=this.userId
 this.reservation.prix=this.prix
console.log(" this.reservation",this.reservation)
this.randonneeService.createReservation(this.reservation).subscribe(data=>{
this.show=true
this.message=" reservation étè creé avec success"
const  resetContent = `<div class="text-center" style='width:650px;font-family:Open-sans,sans-serif;font-size:13px;line-height:18px;margin:auto;'>
<table style='width:100%;margin-top:10px'>
  <tbody>
    <tr>
      <td style='width:20px;padding:7px 0'>&nbsp;</td>
      <td align='center' style='padding:7px 0'>
        <table style='width:100%'>
          <tbody>
            <tr>
              <td align='center' style="border-bottom:4px solid #333333;padding:7px 0;">
                <a title="Randonnée" href="https://your-randonnée-site.com" target='_blank'>
                  <img src="https://your-randonnée-site.com/logo.png" style="margin-left: 50%; padding-bottom:100px;" alt="Randonnée" class='CToWUd'>
                </a>
              </td>
            </tr>
            <tr>
              <td align='center' style='padding:7px 0'>
                <font size='2' face='Open-sans, sans-serif'>
                  <span style='font-weight:500;font-size:28px;text-transform:uppercase;line-height:33px'> Bonjour, </span><br>
                  <span style='font-weight:500;font-size:16px;line-height:25px'>
                    <p>Nous avons reçu votre réservation pour la randonnée. Voici les détails de votre réservation :</p>
                    <ul style="text-align: left;">
            
                      <li>Prix: ${this.formGroup.value?.prix} €</li>
                      <li>Nombre de participants: ${this.formGroup.value?.nombreParticipation}</li>
                      <li>Randonnée ID: ${this.formGroup.value?.randonneeId?.id}</li>
                    </ul>
                  </span>
                </font>
              </td>
            </tr>
            <tr>
              <td style='padding:0!important'>&nbsp;</td>
            </tr>
            <tr>
              <td style='border:1px solid #d6d4d4;padding:7px 0'>
                <table style='width:100%'>
                  <tbody>
                    <tr>
                      <td width='10' style='padding:7px 0'>&nbsp;</td>
                      <td style='padding:7px 0'>
                        <font size='2' face='Open-sans, sans-serif'>
                          <p style='margin:3px 0 7px;font-size:18px;padding-bottom:10px'>Merci pour votre réservation. Si vous avez des questions, n'hésitez pas à nous contacter.</p>
                          <p style="font-size:18px;">À bientôt pour une belle randonnée !</p>
                        </font>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</div>`;

  const emailData = {
    from: 'harba@gmail.com', // Replace with actual sender email
    to: this.reservation.clientId?.username, // Replace with actual recipient email
    subject: 'Reservation ',
    content: resetContent
  };

  // this.reservationService.sendEmail(emailData).subscribe(response => {
  //   console.log('Email sent successfully', response);
  // }, error => {
  //   console.error('Error sending email', error);
  // });
})


}
}