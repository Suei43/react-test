export default function Body(props){
    const name = "Folarin"
    return(
        <div>
            <h2>{props.name || name}</h2>
            {props.children}
        </div>
    )
}

export function Middle(){
    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
      ];
      const peopleList = people.map((person, i) => <li key={i}>{person}</li>);
    return(
        <ul>{peopleList}</ul>
    )
}