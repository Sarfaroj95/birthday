import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, UpperCasePipe],
})
export class LoveComponent implements OnInit {
  cardNewYear: any = [
    {
      _id: 1,
      title: 'You & Me',
      description: 'Love you',
      imgUrl: '../assets/foru/l0.png',
    },
    {
      _id: 1,
      title: 'You & Me',
      description: 'তুমি আমি দুজনে এ মনের বাঁধনে, থাকবো পাশাপাশি সারাটি জীবন',
      imgUrl: '../assets/foru/h1.jpg',
    },
  ];

  // send data from app componets  imp later
  @Input() datas: any;

  privateImg: any = [
    {
      _id: 1,
      title: 'Sudhu Tumi',
      description: '',
      imgUrl: '../assets/foru/me.jpg',
    },
    {
      _id: 2,
      title: 'Amar',
      description: '',
      imgUrl: '../assets/foru/me2.jpg',
    },
    {
      _id: 3,
      title: 'Jaan Amar',
      description: 'Love you Babu',
      imgUrl: '../assets/foru/l1.jpeg',
    },
    {
      _id: 4,
      title: 'Sona Bachha',
      description: 'Love you baccha',
      imgUrl: '../assets/foru/l2.jpeg',
    },
    {
      _id: 1,
      title: 'You & Me',
      description: 'তুমি আমি দুজনে এ মনের বাঁধনে, থাকবো পাশাপাশি সারাটি জীবন',
      imgUrl: '../assets/foru/h1.jpg',
    },
    {
      _id: 2,
      title: 'Only for you dear',
      description:
        'ভালোবাসা ভালোবাসে শুধুই তাকে ভালোবাসায় ভালোবেসে বেঁধে যে রাখে',
      imgUrl: '../assets/foru/h3.jpeg',
    },
    {
      _id: 3,
      title: 'রাস্তা যেটাই হোক, লক্ষ্য তুমি',
      description:
        'হারাতে দেব না তোমায়, আমার এই অন্তর থেকে, হৃদয়ের মধ্যে রেখেছি তোমায়, পৃথিবীর সমস্ত সুখ দিয়ে. ভালোবাসি তোমায় অনেক বেশি, সারাজীবন থাকতে চাই পাশাপাশি .',
      imgUrl: '../assets/foru/l3.jpeg',
    },
  ];
  loginForm!: FormGroup;
  show: boolean = false;
  ourSection: boolean = false;
  error: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      // username: [],
      pin: [],
    });
  }

  onSubmit() {
    if (this.loginForm.value.pin === '1432') {
      this.ourSection = true;
      this.show = false;
      this.error = false;
      console.log('Loged in', this.loginForm.value);
    } else {
      this.error = true;
      console.log('Log error', this.loginForm.value);
    }
  }

  weShow() {
    // this.show = !this.show;
    this.show = true;
  }
}
