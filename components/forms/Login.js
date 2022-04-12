import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useUser} from "../../context/UserContext";

export default function Login() {
    const {setToken} = useUser();

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:3001/auth/login', data)
            .then(response => {
                setToken(response.data.access_token)
            })
    };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form class="login-form" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input {...register("username", {required: true})} />
            {errors.username && <span>This field is required</span>}

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("password", {required: true})} />
            {/* errors will return when field validation fails  */}
            {errors.password && <span>This field is required</span>}

            <input type="submit"/>
        </form>
    );
}