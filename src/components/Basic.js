import React from "react";
import { useForm } from "react-hook-form";

export default function Basic() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} /> <br />
      <br />
      {errors.name && <span>This field is required</span>}
      <input {...register("email", { required: true })} /> <br />
      {errors.email && <span>This field is required</span>} <br /> <br />
      <input type="submit" />
    </form>
  );
}
