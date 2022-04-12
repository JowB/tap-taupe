import Game from "../components/tapeTaupe";
import Default from "../components/layouts/Default";

export default function Home() {
    return (
        <div>
            <Default />
            <Game nbTaupes={6}/>
        </div>
    )
}
