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

export function Body(){
    const name = "Folarin"
    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export function Footer(){
    return(
        <div>
            <h1>Footer Part</h1>
        </div>
    )
}