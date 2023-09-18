import { Users } from './app.mjs';

const users = document.querySelectorAll('.user');
const member = document.querySelectorAll('.members');
const loggin = document.querySelector('.log');
const imgUser = './img/images.png';
const newUser = new Users('tomas', 35, imgUser);
const userTwo = new Users('John', 15, imgUser);
const partic = new Users('partic', 126, imgUser);
const michael = new Users('michael', 63, imgUser);
const karel = new Users('karel', 31, imgUser);
users[0].innerHTML = newUser.name;
users[1].innerHTML = userTwo.name;
users[2].innerHTML = partic.name;
users[3].innerHTML = michael.name;
users[4].innerHTML = karel.name;

member[0].innerHTML = newUser.members;
member[1].innerHTML = userTwo.members;
member[2].innerHTML = partic.members;
member[3].innerHTML = michael.members;
member[4].innerHTML = karel.members;
const img = document.querySelector('img');
newUser.isLogin();

img.src = imgUser;

if (newUser.loggin == true) {
  loggin.classList.remove('bg-fuchsia-700');
  loggin.classList.add('bg-cyan-400');
  console.log(newUser);
}
