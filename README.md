<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://tkctl.tikalk.com/images/we-full-stack.png" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">This is a Nest.js authentication micro-service I wrote as part of a home assignment provided to me by Tikal</p>
    <p align="center">

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

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

example path: `http://localhost:3000/` <br> <br>
examples will be provided with the `axios` syntax.

<br><br><br>

## Register

**POST**

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
axios.post(
  'http://localhost:3000/auth/register',
  params:{
  username: "ryandahl",
  password: "123456"
  })
```

With that been done, we need to send a login request in order to receive an access_token.
<br><br><br>

## Login

**POST**

| Type     | Name                        | Description                                     | Schema |
| -------- | --------------------------- | ----------------------------------------------- | ------ |
| **Body** | **username** <br>_required_ | The username you have provided when registered. | string |
| **Body** | **password** <br>_required_ | The password you have provided when registered. | string |

example:

```bash
axios.post(
  'http://localhost:3000/auth/login',
  params:{
  username: "ryandahl",
  password: "123456"
  })
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
