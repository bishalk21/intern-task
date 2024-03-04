import { z } from "zod";

export const UserForm = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  gender: z.string().min(1),
});

export type UserFormValue = z.infer<typeof UserForm>;

export const User = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  createAt: z.string(),
  updateAt: z.string(),
  userName: z.string(),
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  isActive: z.boolean(),
  lockoutEnabled: z.boolean(),
  roleNames: z.array(z.string()),
  password: z.string(),
});

export type User = z.infer<typeof User>;
