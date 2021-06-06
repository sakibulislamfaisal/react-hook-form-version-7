import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./App.css";
export default function Basic() {
  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data, e) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div className="form-group col-5">
        <label>First Name</label>
        <input name="firstName" type="text" {...register("firstName")} />
        <div className="invalid-feedback error">
          {errors.firstName?.message}
        </div>
      </div>
      <div className="form-group col-5">
        <label>Last Name</label>
        <input name="lastName" type="text" {...register("lastName")} />
        <div className="invalid-feedback error">{errors.lastName?.message}</div>
      </div>
      <div className="form-group col-5">
        <label>Email</label>
        <input name="email" type="text" {...register("email")} />
        <div className="invalid-feedback error">{errors.email?.message}</div>
      </div>
      <div className="form-group col-5">
        <label>Password</label>
        <input name="password" type="password" {...register("password")} />
        <div className="invalid-feedback error">{errors.password?.message}</div>
      </div>
      <div className="form-group col-5">
        <label>ConfirmPassword</label>
        <input
          name="confirmPassword"
          type="password"
          {...register("confirmPassword")}
        />
        <div className="invalid-feedback error">
          {errors.confirmPassword?.message}
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary mr-1">
          Register
        </button>
        <button
          type="button"
          onClick={() => reset()}
          className="btn btn-secondary"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
