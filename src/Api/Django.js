//import $ from "jquery";
import axios from 'axios';


let debug = true;

let urlLogin='https://backend-agenda.herokuapp.com/rest-auth/login/'
let urlRegister='https://backend-agenda.herokuapp.com/users/register/'
let urlTasks='https://backend-agenda.herokuapp.com/tasks/'
let urlProfile='https://backend-agenda.herokuapp.com/profile/'
let urlUser='https://backend-agenda.herokuapp.com/users/user/'
if(debug){
  urlLogin="http://localhost:8000/rest-auth/login/"
  urlRegister="http://localhost:8000/users/register/"
  urlTasks="http://localhost:8000/tasks/"
  urlProfile="http://localhost:8000/profile/"
  urlUser="http://localhost:8000/users/user/"
}


const api={

  //user Login
  logIn:(data)=>{
      return new Promise(function (resolve, reject) {
          const instance = axios.create({
              baseURL: urlLogin,
              // timeout: 2000,
              headers: {
                  'Content-Type': 'application/json',
                  //'Authorization': 'Bearer ' + userToken
              }
          });
          instance.post('', data)
              .then(function (response) {
                  resolve(response.data);
              })
              .catch(function (error) {
                  console.log('el error: ', error.response);
                  reject(error);
              });
      });
  },
//user user

    getUser:()=>{
      const userToken = JSON.parse(localStorage.getItem('userAgendaToken'));
      return new Promise(function (resolve, reject) {
          const instance = axios.create({
              baseURL: urlUser,
              // timeout: 2000,
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Token ' + userToken
              }
          });
          instance.get('')
              .then(function (response) {
                  resolve(response.data);
              })
              .catch(function (error) {
                  console.log('el error: ', error.response);
                  reject(error);
              });


      });

    },


}


export default api;