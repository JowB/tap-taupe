import {useUser} from "../../context/UserContext";
import {useForm} from "react-hook-form";
import axios from "axios";
import React from "react";
import styles from "../../styles/Home.module.css";
import SendIcon from '@mui/icons-material/Send';

export default function MessageForm() {
    const {token} = useUser();

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:3001/messages', data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(response => {
            console.log(response);
        })
    };

    return (
        <form className={styles.formMessage} onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Message" className={styles.inputMessage} {...register("content", {required: true})} />
            {errors.content && <span>This field is required</span>}

            <button className={styles.buttonForm} type="submit">
                <SendIcon style={{width: '100%', height: '100%', color: 'white'}} />
            </button>
        </form>
    );
}