<p align="center">
  <a href="https://www.tikalk.com/" target="blank"><img src="https://tkctl.tikalk.com/images/we-full-stack.png" width="320" alt="Tikal Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">This is a Nest.js authentication micro-service I wrote as part of a home assignment provided to me by Tikal</p>
    <p align="center">

  <div align="center">
  <div style="display: flex;">
    <a href="#">
    <div style="display: flex;">
        <img href="localhost" src="https://camo.githubusercontent.com/0d358238ba8c67946e6555aad926b947e1a5048f/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f5f746578742e737667" height="94"/> 
      <img src="https://i.ibb.co/tqHYP3q/pngwing-com.png" height="130"/> 
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"  height="94"/> 
  </div>  
        <div style="display: flex;">
     <img src="https://ky-solutions.fr/nuxt/img/typescript.5c70a1d.png" height="95"/> 
      <img src="https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo-2013-2015.png" height="100"/> 
    </div>
    </a>
    </div>
</div>

## Description

This service handles our authentication / registeration http requests. <br>
With that being so, we can secure our other micro-service, the one that I actually
being asked to do. <br> <br><br>

## Steps

First you need to `REGISTER` the app. <br> <br>
Than you will need to `LOGIN` the app using the same credentials that you provided on the previous step. <br> <br>  
 The `LOGIN` request will return a response which contains the `access_token` variable. <br> <br>
The only way for a client to address the `messages micro-service` is by providing
the `access_token` along with every http request he makes. <br> <br>
(the way of doing that is by simply adding the token as a bearer token on the request headers)

example path: `http://localhost:3000` <br> <br>

<br><br><br>

## Register

**POST**

<b>Endpoint: /auth/register</b>

<b>Parameters:</b>

| Type     | Name                        | Description                                  | Schema |
| -------- | --------------------------- | -------------------------------------------- | ------ |
| **Body** | **username** <br>_required_ | The username you want to be identified with. | string |
| **Body** | **password** <br>_required_ | The password you want to have.               | string |

**RULES**

```bash
 BOTH USERNAME AND PASSWORD MUST BE TYPEOF STRING AND CONTAIN 3-10 CHARS AND SHALL NOT CONTAIN SPACES.
```

**EXAMPLE**

```bash
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "username": "RyanDahl",
  "password": "123456"
});

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("localhost:3000/users/register", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

With that been done, we need to send a login request in order to receive an access_token.
<br><br><br>

## Login

**POST**

<b>Endpoint: /auth/login</b>

<b>Parameters: </b>

| Type     | Name                        | Description                                     | Schema |
| -------- | --------------------------- | ----------------------------------------------- | ------ |
| **Body** | **username** <br>_required_ | The username you have provided when registered. | string |
| **Body** | **password** <br>_required_ | The password you have provided when registered. | string |

example:

```bash
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "username": "RyanDahl",
  "password": "123456"
});

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/auth/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

The output of the login request contains the `access_token` variable. <br>
the `access_token` will expire within 2 hours.

## What should I do next?

```bash
  This is all!
  You have gained your access_token successfully.
  You can now address the messages micro-service and send messages to your friends!
  (that is as long as the access_token is still valid of course).
```

## Author - Dekel Bayazi.
