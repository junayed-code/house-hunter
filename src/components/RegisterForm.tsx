"use client";

import Input from "@/components/shared/Input";
import Button from "./shared/Button";
import { useFormik } from "formik";
import { useFormState } from "react-dom";
import { signUpSchema as validationSchema } from "@/utils/shemas";
import createUser from "@/actions/createUser";

const initialValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
  role: "",
};

function RegisterForm() {
  const [state, formAction] = useFormState<any, FormData>(createUser, {
    message: null,
  });

  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <form
      action={formData => {
        if (isValid) formAction(formData);
      }}
      onSubmit={() => handleSubmit()}
      className="flex flex-col gap-y-3"
    >
      <Input
        id="name"
        label="Name"
        value={values.name}
        error={touched.name ? errors.name : undefined}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <Input
        id="email"
        label="Email"
        value={values.email}
        error={touched.email ? errors.email : undefined}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      {/* Phone number input element */}
      <div>
        <label
          htmlFor="phone"
          className="flex items-start border border-slate-300 focus-within:border-indigo-400 rounded-md"
        >
          <span aria-hidden className="py-3 pl-4 text-slate-700">
            +880
          </span>
          <span className="sr-only">Phone</span>
          <input
            id="phone"
            name="phone"
            type="number"
            placeholder="1700000000"
            value={values.phone}
            onBlur={handleBlur}
            onChange={handleChange}
            className="bg-transparent text-slate-800 outline-none pl-2 pr-4 py-3 w-full"
          />
        </label>
        {errors.phone && touched.phone && (
          <p className="text-rose-500 text-sm pl-1">{errors.phone}</p>
        )}
      </div>
      <Input
        id="password"
        type="password"
        label="Password"
        value={values.password}
        error={touched.password ? errors.password : undefined}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <label htmlFor="role" className="flex flex-col gap-y-1">
        <span className="sr-only">User Role</span>
        <select
          id="role"
          name="role"
          value={values.role}
          onChange={handleChange}
          className="w-full outline-none px-4 py-3 border border-slate-300 focus:border-indigo-400 rounded-md text-slate-800"
        >
          <option value="" disabled>
            Select your role
          </option>
          <option value="owner">Owner</option>
          <option value="renter">Renter</option>
        </select>
        {errors.role && touched.role && (
          <p className="text-rose-500 text-sm pl-1">{errors.role}</p>
        )}
      </label>

      <Button type="submit" className="text-lg mt-2">
        Sign Up
      </Button>
    </form>
  );
}

export default RegisterForm;
