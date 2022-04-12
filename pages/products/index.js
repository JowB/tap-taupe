import axios from "axios";
import {useUser} from "../../context/UserContext";
import Default from "../../components/layouts/Default";
import styles from "../../styles/Home.module.css";

export default function Products({ products }) {
    const {token} = useUser();
    const onSubmit = data => {
        data = {
            name: "test",
            description: "blabla je suis une description",
            price: 28,
            stock: 1,
            reference: "BAWS",
            pictures: ['azd.jpg']
        };

        axios.post('http://localhost:3001/products', data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(response => {
                console.log(response);
            })
    };

    return (
        <div>
            <Default />
            <div className={styles.container}>
                <h1>La liste des produits</h1>
                <div>
                    {products.map(product => (
                        <>
                            <div key={product.reference}>
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                            </div>
                            <hr />
                        </>
                    ))}
                </div>
                <button onClick={onSubmit}>Ajouter</button>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const result = await axios.get('http://localhost:3001/products');
    const products = result.data;
    return {
        props: {
            products
        }
    }
}