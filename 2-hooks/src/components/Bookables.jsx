import {useState} from 'react';
import {bookables} from '../db.json';

export default function Bookables() {
    console.log(bookables) // verifica se chama os conteudos do ficheiro .json

    const [bookableIndex, setBookableIndex] = useState(0);
    
    const group = "Rooms";

    const bookablesInGroup = bookables.filter( b => b.group === group);
    
    const nextBookable = _ => {
        // setBookableIndex ( (bookableIndex + 1) % bookablesInGroup.length);
        setBookableIndex (index => (index + 1) % bookablesInGroup.length);
        // a delegar a responsabilidade de atuclização do state ao react;
        /* resto zero:
            0 / 4 = 0, resto zero;
            1 / 4 = 0, resto 1;
            ...
            4 / 4 = 1, resto 0;
            5 / 4 = 1, resto 1;
            6 / 4 = 1, resto 2;
        */
    }
    /*
    const items = bookablesInGroup.map( b => (
        <li>{b.title}</li>
    ))
    */

  return (
    <div>
        <ul className='bookables'>
            {
                // podemos fazer a lógica dentro da view:
                bookablesInGroup.map( (b, i) => (
                    <li key={b.id}
                        className={i === bookableIndex ? "selected" : null}
                        onClick={ () => setBookableIndex(i)}>
                        {b.title}
                    </li>
                ))
            }
        </ul>

        <nav>
            <button autoFocus onClick={nextBookable}>Next</button>
        </nav>
    </div>
  )
}
