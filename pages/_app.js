import '../styles/globals.css'
import UserContext from "../context/UserContext";
import SocketContext from "../context/SocketContext";

function MyApp({ Component, pageProps }) {
  return (
      <SocketContext>
          <UserContext>
            <Component {...pageProps} />
          </UserContext>
      </SocketContext>
  )
}

export default MyApp
