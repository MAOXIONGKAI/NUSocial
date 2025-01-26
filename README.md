# Welcome to NUSocial! (Project by Mao Xiongkai)
**NUSocial** is a simple web forum for NUS Students to share different topics about their school lives. Including:

📚 **Study**       (Lesson, tutorial, homework etc.)

🏅 **CCA**         (Interest, hobbies, achievements beyond the classes)

🏢 **Campus**      (School facilities, staffs, campus life)

🏡 **Residence**   (School accommodation, residence Life)

👫 **Social**      (Make friends, discuss social topics & trends)

🖥️ **Admin**       (Anything regarding school administrative issues and opinions)

💼 **Career**      (Career guides, tips, experiences, recommendations etc.)

💡 **Others**      (Anything you want to discuss as long as it is related to NUS!)

## How to set up on local machine:

### Fetch codebase to local machine
1. Using git bash, `git clone` to fetch the code into local repository

### Set up frontend
1. cd into `frontend` folder, `npm install` to install all the necessary dependencies
2. In the folder itself, use `.envFormat` file to create your own `.env` file, based on the instructions in the comment
3. `npm run dev` to run the frontend service

### Set up AWS RDS for PostgreSQL Database
**Note that the go backend uses AWS RDS service to host PostgreSQL by default, because this project is currently hosted online using Render**

If you insist on running your own local PostgreSQL to use the service, please replace the `connectionStr` in `database.go` file in `internal/database` folder with your own connection string.

If you want to set up a postgreSQL on AWS RDS to test this project locally, follow the [online guide](https://www.youtube.com/watch?v=0A-5ITILrMA) to do so.
After successfully set up AWS RDS service, use the endpoint string in the instance page to set up backend locally. (Refer to set up backend section)

Lastly, create the database schemas using the SQL queries in the `internal/migration` folder.

### Set up backend
1. In the `backend` folder itself, use `.envFormat` file to create your own `.env` file, based on the instruction in the comment
2. If using local PostgreSQL, remove comment symbol in line `14 - 18` of `config.go` file in `internal/config` folder, so that `.env` file can be loaded properly. If using ASW RDS, ignore this step.
3. cd into `cmd` folder, here should contain the `main.go` for running the service
4. `go run .` to run the backend service
