import Default from "../components/layouts/Default";
import Login from "../components/forms/Login";
import {useUser} from "../context/UserContext";

export default function Home() {
    const {user, logOut} = useUser();

    return (
        <div>
            <Default />
            <h1>Page Accueil</h1>

            {!user && <Login />}
            {user !== null && <div>
                <button onClick={logOut}>Logout</button>
            </div>}
        </div>
    )
}
