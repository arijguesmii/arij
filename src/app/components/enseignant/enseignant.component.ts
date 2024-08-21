import { Component } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent {
question:string="q1";
reponse:string="typescript";
msg=''
aff=false;
aff2=false
aff3=true
nom="azert";
islarge=true;
isdark=false
getcolor(){ 
  if(this.islarge){
    return'red';
  }else return"bleu"
}
tache=false
 tab44:Array<any>=[{nom:"azert",prenom:"samer",age:"25"},{nom:"arij",prenom:"guesmi"},{ nom:"ahmed",prenom:"sasi",age:"10"},{ nom:"fehd",prenom:"sasi"}];
tabaff=true
correction(reponseEt:string){
  this.msg=reponseEt;

}
}
