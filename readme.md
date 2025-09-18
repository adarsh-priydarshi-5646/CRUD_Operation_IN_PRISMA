# CRUD Operation In Prisma with Pagination

## Steps from scratch

- 1. `npm init`
- 2. `npm prisma init`
- 3. `npm i prisma express @prisma/client cors dotenv mysql2 nodemon`
- 4. `npx prisma migrate dev --name init`
- 5. `npx prisma generate`

## Steps by file
- 1. .env
- 2. prisma/schema.prisma
- 3. config/db.config.js
- 4. controllers/userController.js
- 5. routs/userRoutes.js
- 6. server.js


# file Structure
```
    Prisma_Crud
    |
    |--node_modules
    |
    |--config
    |   |
    |   |--db.config.js    
    |
    |--controllers
    |   |
    |   |--userController.js
    |   |--postController.js
    |
    |--routes
    |    |
    |    |--userRoutes.js
    |    |--postRoutes.js
    |
    |--prisma
    |    |
    |    |--schema.prisma
    |    |--seed.js
    |
    |--server.js
    |--package.josn
    |--package-lock.josn
    |--.gitignore
    |--.env
    |--readme..md
```

# how to run project

- 1. `npm i`
- 2. `create .env DATABASE_URL="mysql://root:Your_password@localhost:3306/your_db_name" and Port=3001`
- 4. `npx migrate dev --name init`
- 5.  `npx prisma generate`