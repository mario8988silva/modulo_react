import { useState } from "react";

export default function PropDrilling() {

    const [nome, setNome] = useState('João');

    return (
        <section>
            <h1>Componente PropDrilling (Componente Avô)</h1>
            <Hello nome={nome} changeName={ () => setNome('Maria') } />
        </section>
    );
}

function Hello(props) {

    return (
        <section>
            <h1>Componente Hello (Componente Pai)</h1>
            <Greetings nome={props.nome} changeName={props.changeName} />
        </section>
    );
}

function Greetings(props) {

    return (
        <section>
            <h1>Componente Greetings (Componente Filho)</h1>
            <p>Recebido do Avô - via Pai: {props.nome}</p>
            <button onClick={props.changeName}>mudar o nome</button>
        </section>
    );
}
