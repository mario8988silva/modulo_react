import { use, useEffect } from "react";

export default function UserList() {
    
    console[UserList, setUsers] = useState([]);
/*
    useEffect(() => {

        fetch('')
            .then(resp => resp.json())
            .then( data => setUsers(data))
            .catch( () => console.log('ocorreu um erro'));

    }, []) //apenas no inicio da construcção da componente
*/
    useEffect(() => {
        (async () => {
            let response = await fetch ('https://my-json-server.typicode.com/JoaoGoncalves/biblio-api/books');
            let data = await response.json();
            setUsers(data);
        })();
    }, [] );

    if( users.length > 0){
        return (
            <ul>
                {user.map(u => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
        )
    }
    return (
        <>
            <h1>Loading...</h1>
        </>
    )
}