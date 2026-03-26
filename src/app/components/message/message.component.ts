import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  standalone: true,
})
export class MessageComponent implements OnInit {
  cardHome: any = [
    {
      _id: 1,
      title: 'You & Me',
      description: 'পিছন ফিরে তাকিও না আর, দিচ্ছে সময় ফাঁকি। মেঘ দেখে কেউ করিসনে ভয়, আড়ালে তার রবি, অন্ধকারটা কাটলে পরেই দেখবে জয়ের ছবি। পাথর সমান বাধা আসুক, হিমালয় সমান ভয়, দৃঢ় সংকল্প মনে থাকলে হবেই তোমার জয়। ক্লান্তি আসুক, চোট লাগুক, তবুও চলো এগিয়ে, সাফল্য তোমায় ডাকছে দেখো, নতুন সূর্য জাগিয়ে। নিজের ওপর বিশ্বাস রাখো, আকাশটা তোমার হবে, তোমার নামেই আগামীর দিন জগৎ মনে রবে।',
      imgUrl: '../assets/images/messages/book1.jpg',
    },
    {
      _id: 2,
      title: 'মাঝে মাঝে মনে হয় ফিরে যাই সেই হারানো দিনে',
      description:
        'ভালোবাসা ভালোবাসে শুধুই তাকে ভালোবাসায় ভালোবেসে বেঁধে যে রাখে',
      imgUrl: '../assets/images/messages/book2.jpg',
    },
    {
      _id: 3,
      title: 'রাস্তা যেটাই হোক, লক্ষ্য তুমি',
      description:
      'জানালার পাশে বসে যখন ঝরে শ্রাবণ ধারা,',
      imgUrl: '../assets/images/messages/book3.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
