import Default from "../../components/layouts/Default";
import axios from "axios";
import styles from "../../styles/Home.module.css";
import {useUser} from "../../context/UserContext";
import {useSocket} from "../../context/SocketContext";
import {useCallback, useEffect, useRef, useState} from "react";
import MessageForm from "../../components/forms/Message";
import format from "date-fns/format"
import { fr } from 'date-fns/locale'

export default function Messages({messages}) {
    const {token, user} = useUser();
    const [messagesFormated, setMessagesFormated] = useState(messages);
    const socket = useSocket();

    const addMessage = useCallback((message) => {
        setMessagesFormated([...messagesFormated, message]);
    }, [messagesFormated]);

    useEffect(() => {
        socket.on("addMessage", addMessage);
        return () => {
            socket.off("addMessage", addMessage);
        };
    }, [addMessage, socket]);

    const onSubmit = data => {
        data = {content: "Test de message"};

        axios.post('http://localhost:3001/messages', data, {
            headers: {Authorization: 'Bearer ' + token}
        }).then(response => {
            console.log(response);
        })
    };
    let scrollRef = useRef(null)

    useEffect(() => {
        if (scrollRef.current === null) {
            return;
        }
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [scrollRef, messagesFormated]);

    return (
        <>
            <Default/>
            <div className={styles.containerBlack}>
                <div className={styles.messageContainer} ref={scrollRef}>
                    {messagesFormated.map(message => (
                        <div key={message._id}
                             className={user?.userId === message.user._id ? styles.messageFromMe : styles.message}>
                            <div className={styles.messageInformations}>
                                <p className={styles.messageName}>{message.user.username}</p>
                                <p className={styles.messageName}>{format(new Date(message.date), "dd.MM - HH:mm", {locale: fr})}</p>
                            </div>
                            <p className={styles.messageContent}>{message.content}</p>
                        </div>
                    ))}
                </div>
                <MessageForm />
            </div>
        </>
    );
}

export async function getStaticProps() {
    const result = await axios.get('http://localhost:3001/messages');
    const messages = result.data;
    return {
        props: {
            messages
        }
    }
}