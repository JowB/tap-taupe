import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

export default function ProductForm() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:3001/products', data)
            .then(response => {
                console.log(response);
            })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input {...register("name", {required: true})} />
            {errors.username && <span>This field is required</span>}

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("description", {required: true})} />
            {/* errors will return when field validation fails  */}
            {errors.password && <span>This field is required</span>}            <input type="submit"/>
        </form>
    )
}