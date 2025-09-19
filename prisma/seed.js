const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "alicedfvf@example.com",
      posts: {
        create: [
          { title: "Alice Post 1", description: "Alice’s first post" },
          { title: "Alice Post 2", description: "Alice’s second post" }
        ]
      }
    }
  });

  await prisma.user.create({
    data: {
      name: "Bob",
      email: "bobhjyj@example.com",
      posts: {
        create: [
          { title: "Bob Post 1", description: "Bob’s first post" }
        ]
      }
    }
  });

  await prisma.user.create({
    data: {
      name: "Charlie",
      email: "charlievrfgt@example.com",
      posts: {
        create: [
          { title: "Charlie Post 1", description: "Charlie’s first post" },
          { title: "Charlie Post 2", description: "Charlie’s second post" },
          { title: "Charlie Post 3", description: "Charlie’s third post" }
        ]
      }
    }
  });

  console.log("Seed data inserted successfully ✅");
}

main()
