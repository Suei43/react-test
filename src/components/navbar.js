export default function Navbar(){
    return(
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export function Footer(props){
    return(
        <div>
            <h1>Footer Part - {props.name}</h1>
        </div>
    )
}