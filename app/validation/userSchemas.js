import { z } from "zod";

// Define the regex for the password
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&,.<>^|+_-])(?=.*[a-zA-Z]).{8,}$/;

const schema = {
  registerSchema : z.object({       
    email: z.string().email(),
    password: z.string().regex(passwordRegex, "password need to be : Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character."), // Valide le mot de passe
    firstname: z.string().min(2).max(30), 
    lastname: z.string().min(2).max(30),
    birthdate: z.string().min(10).max(10),        
  }).required(),
  signInSchema : z.object({
    email: z.string().email(),
    password: z.string().regex(passwordRegex)
  }).required(),
  requestPasswordResetSchema: z.object({
    email: z.string().email(),
  }).required(),
  resetPasswordSchema: z.object({
    newPassword: z.string().regex(passwordRegex, "password need to be : Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character.")
  }).required(),
  resetPasswordTokenSchema: z.object({
    token: z.string()
  }).required(),
};

export default schema;

