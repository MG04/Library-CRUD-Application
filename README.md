# Library Management 

Simple CRUD application made for a university course.

## Technologies used
- [React](https://react.dev/)
- [Nodejs](https://nodejs.org)
- [MySQL](https://www.mysql.com)

## Getting Started

### Prerequisites
- [Nodejs](https://nodejs.org/en/download)
- [Prisma](https://www.prisma.io/)

The above should be installed.

Follow the commands below to kickstart the application.
```shell
git clone https://github.com/MG04/Library-CRUD-Application
cd Library-CRUD-Application
```

Now install the dependencies
```shell
cd backend
npm install
npm install @prisma/client --save
npx prisma generate
```
Open another terminal in folder.
```shell
cd frontend
npm install
npm install @prisma/client --save
```

We are almost done, Now just start the development server.

For Backend.
```shell
cd backend
npm start
```
For Frontend.

Open another terminal in folder.
```shell
cd frontend  
npm start
```
Done! Now open localhost:3000 in your browser.

## Examples

### Books Page

![image](https://github.com/user-attachments/assets/c334ca5b-b0a7-4618-a254-b93c78bae42d)


### Add Page

![image](https://github.com/user-attachments/assets/dc3b6484-3205-4f8b-aa3c-7521dfaa1f26)


### Update Page

![image](https://github.com/user-attachments/assets/8cebef99-ab5d-45c4-a975-b0165afb1b7b)


## Docker containerization
