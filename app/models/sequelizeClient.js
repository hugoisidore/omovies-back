import "dotenv/config"; 

import { Sequelize } from "sequelize"; 

const sequelize = new Sequelize(process.env.PG_URL, { 
  define: {
    createdAt: "created_at", 
    updatedAt: "updated_at"
  },
  logging: false
}); 

async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

// Appelez la fonction d'authentification
authenticate();

// Exportez l'instance Sequelize
export { sequelize };