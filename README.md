# PROJ-API-PROFCAT
API with a CRUD in JS. <br>
Objective: help designers to obtains quick information about metallic profiles.
<br>

------------------------
## Funcionalities
<br>

- [x] Create a profile
- [x] Read a information all tipe of profile
- [x] Read a information abour profile specified to name
- [x] Edit an information about profile 
- [x] Delete all information of a profile specified

<br>

## MRC architecture
```
 📁 PROJ-API-PROFCAT 
   |
   |- 📁 src
   |   |
   |   |- 📁 controllers
   |       |- 📑 pieceController.js
   |       |- 📑 profileController.js
   |       |- 📑 userController.js
   |
   |   |- 📁 database
   |       |- 📑 mongooseConect.js
   |
   |   |- 📁 models
   |       |- 📑 pieceModel.js
   |       |- 📑 profileModel.js
   |       |- 📑 userModel.js
   |
   |    |- 📁 routes
   |       |- 📑 pieceRoutes.js 
   |       |- 📑 index.js
   |       |- 📑 profileRoutes.js   
   |       |- 📑 userRotas.js
   |
   |    |- 📑 app.js
   |
   |- 📁 swagger
   |   |- 📑 swagger_output.json
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js
   |- 📑 swagger.js
   ```
<br>

### Tecnology and package used 
<br>

[JavaScript](https://www.javascript.com) | [Node.js](https://nodejs.org/en/) | [Git](https://git-scm.com) | [VSCode](https://code.visualstudio.com) | [Mongodb](https://www.mongodb.com) | [Heroku](https://www.heroku.com/) | [Postman](https://documenter.getpostman.com/view/16821311/UVRAHSEo)
 
 Necessary dependencies:
- [nodemon](https://www.npmjs.com/package/nodemon)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [swagger-autogen](https://www.npmjs.com/package/swagger-autogen)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)

<br>

### Instalation


```bash
# Clone the repository
$ git clone https://github.com/ChrisAnDias/PROJ-API-PROFCAT.git

# Enter in folder
$ cd MPROJ-API-PROFCAT

# Install the dependencies
$ npm install

# Execute the server
$ npm start
```
<br>

### Routes/EndPoints:

- User

| Verb  |   EndPoint     |        Route Description                    | Status | Auth |
| ------ | -------------- | -------------------------------------------| ------ |----- |
| POST   | /user/create | Create a new user            |   201  |  ✔️  |
| GET    | /users | List all the users                 |   200  |  ❌  |
| POST   | /users/login | Return a user token          |   200  |  ✔️  |
| DELETE | /users/:id | Remove a user                  |   200  |  ✔️  |

<br>

- Profile

| Verb  |   EndPoint      | Route Description                      | Status | Auth |
| ------ | --------------- | ---------------------------------------| ------ |----- |
| POST   | /profile/create | Create a new profile         |   201  |  ✔️  |
| PATCH    | /profile/:id | Update some data about profile     |   200  |  ✔️  |
| DELETE | /profile/:id | Remove profile register        |   200  |  ✔️  |

<br>

- Info of metallic profiles (pieces)

| Verb  |   EndPoint   |         Route Description               | Status | Auth |
| ------ | ------------ | ----------------------------------------| ------ |----- |
| POST   |   /piece   | Criate a piece    |   201  |  ✔️  |
| GET    |   /listall   | Returns all pieces registered |   200  |  ❌  |
| GET    | /piece/name | Returns profiles by name  |   200  |  ❌  |
| PATCH  | /attpiece/:id | Update the info of piece|   201  |  ✔️  |
| DELETE | /deletepiece/:id | Remove the register of piece         |   200  |  ✔️  |

<br>
Link para a documentação:

📝 [Swagger]()

📝 [Heroku]()

<br>
<br>


## Autora
</br>

<p align="center">
<a>
 <img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/C4D03AQEtlqhSRH-bZw/profile-displayphoto-shrink_800_800/0/1661905522419?e=1686787200&v=beta&t=GGUSyNyPNFkamsoZb8PUio0STJnWYYCwGHiCY6GPbuc" width="100px;" alt="Foto de Perfil de Débora"/>
 <br/>
</a>
</p>
<p align="center"> Desenvolvido por <a href="https://www.linkedin.com/in/déborachristyna/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>




