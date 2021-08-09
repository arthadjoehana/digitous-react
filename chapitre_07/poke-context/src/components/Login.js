import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'



export default function Login() {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
			<input {...register("username", { required: true, maxLength: 8 })} placeholder="Username" /><br />
			{errors.username && <span>Invalid username.</span>}<br />
      <input {...register("password", { required: true, maxLength: 6 })} placeholder="Password" /><br />
			{errors.password && <span>Invalid password.</span>}<br />
			<input type="submit" value="Log in" />
		</form>
  )
}