import BookList from "./BookList";
//import {books} from "../data.json"; //chama lista interna
import { useState } from "react";

export default function BookDashboard() {

    /*
    const [livros, setLivros] = useState(books) // book é o state inicial
    */

    const [livros, setLivros] = useState([]);

    useEffect(() => {

        (async () => {
            let response = await fetch ('https://my-json-server.typicode.com/JoaoGoncalves/biblio-api/books');
            let data = await response.json();
            setLivros(data);
        })();
    }, [] );


    // aqui é feita a funcionalidade para eliminar livros, não recorrendo directamente à lista, mas a "livros", que faz um clone desta lista, e é este o clone que iteramos
    const handleDeleteBook = (id) => {
        setLivros(livros.filter( l => l.id !== id))
    }

    return(
        <section>
            <h1>Book Dashboard</h1>
            <BookList books={livros} deleteBook={handleDeleteBook}/> 
        </section>//dado que não conseguimos extrair a funcionalidade, temos que a passar para aqui "return" e eventualmente ir buscá-la para aplicar no botão
    );
}