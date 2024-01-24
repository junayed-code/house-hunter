"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import connectDB from "@/utils/connectDB";
import Users from "@/models/users";

async function createUser(state: any, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const phone = formData.get("phone");
  const role = formData.get("role");

  console.log(formData);

  // try {
  //   await connectDB();
  //   const user = new Users({ name, email, password, phone, role });
  //   await user.save();
  //   redirect("/");
  // } catch (error) {
  //   console.error(error);
  // }
}

export default createUser;
