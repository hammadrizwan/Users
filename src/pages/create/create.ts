import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpPage } from '../../pages/sign-up/sign-up';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

   
     slideOneForm: FormGroup;
     slideTwoForm: FormGroup;
  
     submitAttempt: boolean = false;
  p = SignUpPage;
  q = HomePage;
  pet: string = "S1";
  @ViewChild('signupSlider') signupSlider: any;
  @ViewChild('myInput') myInput: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.slideOneForm = formBuilder.group({
      PName: [''],
      Desc: ['']
  });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  next(){
        // this.signupSlider.slideNext();
    }
 
    prev(){
        // this.signupSlider.slidePrev();
    }

    resize() {
      this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
  }
    save(){

    }

}
