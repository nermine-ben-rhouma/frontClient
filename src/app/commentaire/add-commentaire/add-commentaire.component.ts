import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RandonneeService } from 'src/app/randonnee/randonnee.service';
import { CommentaireService } from '../commentaire.service';
import { Commentaire } from '../commentaire';
import { Picture } from '../pcitures';

@Component({
  selector: 'app-add-commentaire',
  templateUrl: './add-commentaire.component.html',
  styleUrls: ['./add-commentaire.component.css']
})
export class AddCommentaireComponent {
  role: any;
  userId: number=0;
  randonnee: number=0;
  commentaireForm: FormGroup;
selectedFile: File | null = null;
pictureArray: any[] = [];
allpicture: any 
pictureString:any
desableDefCheck: boolean=false;
alert: string='';
tailleInvalid: boolean=false;
filesize: number=0;
filename: string='';
  formatInvalid: boolean=false;
  message: string="";
  show: boolean=false;
  constructor(private randonneeService:RandonneeService, private activatedRoute:ActivatedRoute,private fb: FormBuilder,
    private commentaireService: CommentaireService,
    private router: Router
  ){
    this.commentaireForm = this.fb.group({
      content: ['', Validators.required],
      urlImage: [null]
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.randonnee= +params['id'];
      this.role = this.getCookie('role')
      this.userId=Number(this.getCookie('userId'))
   
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




onFileSelected(event: any): void {
 
  this.selectedFile = event.target.files[0];
  console.log("this.selectedFile",  this.selectedFile )
}

picked(event:any) {
  let fileList: FileList = event.target.files;
  if (fileList.length > 0) {
    const file: File = fileList[0];
    this.filename = file.name;
    this.filesize = file.size;
    if (this.filesize > 10000000) {
      this.tailleInvalid = true;
      return
    }
    this.tailleInvalid = false;
    this.handleInputChange(file);
  }
  else {
    alert("No file selected");
  }
}

handleInputChange(files:File) {
  var file = files;
  var pattern = /image-*/;
  var reader = new FileReader();
  if (!file.type.match(pattern)) {
    this.alert = "format d'image invalide "
    // { type: 'danger', message: "format d'image invalide " };
    return;
  }
  reader.onloadend = this._handleReaderLoaded.bind(this);
  reader.readAsDataURL(file);
}

async _handleReaderLoaded(e:any) {
  this.allpicture= new Picture()
  this.allpicture.url = await e.target.result;
  this.allpicture.defaults = await false
  await this.pictureArray.push(this.allpicture)
  console.log(' this.pictureArray', this.pictureArray)
  const found = await this.pictureArray.filter(item => item.defaults === true);

  if (found.length == 0) {
    this.pictureArray[0].defaults = await true
  }
  this.desableDefCheck = false
}
onSubmit(): void {
  if (this.commentaireForm.invalid) {
    return;
  }

  // const formData = new FormData();
  // formData.append('content', this.commentaireForm.get('content')?.value);
  // if (this.selectedFile) {
  //   formData.append('image', this.selectedFile, this.selectedFile.name);
  // }
  let commentaire: Commentaire=new Commentaire()
   commentaire.content=this.commentaireForm.value.content
 if(this.pictureArray.length>0){commentaire.urlImage=this.pictureArray[0].url}else{
  commentaire.urlImage=null
 }
   
   commentaire.clientId= this.userId
   commentaire.randonneeId=this.randonnee
   console.log("commentaire",commentaire)
  
this.commentaireForm.reset()
this.message=' votre commentaire étè crée avec success'
this.show=true

  this.commentaireService.createCommentaire(commentaire).subscribe(() => {
    this.router.navigate(['/commentaires']);

  });
}
}
