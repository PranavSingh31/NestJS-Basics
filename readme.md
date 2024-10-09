to start a Nest.js project

```
npm i -g @nestjs/cli -> starts cli
nest new project-name
```

every specific domain would have it's own module that is initiated using

```
nest g module users
nest g controller users
nest g service users
```
where users is that functionality which consists of its individual module, controller and service

if you have a solid data transfer object and you want a similar object with partial type, then use partial type from

```
npm i @nestjs/mapped-types -D
```

you can also add validation and transformation related functionalities using 
```
npm i class-validator class-transformer
```

