import Navbar from "./components/navbar"
import {Footer} from "./components/navbar"
import Body from "./components/body"
import {Middle} from "./components/body"

export default function App(){
    return(
        <>
            <Navbar/>
            <Body
            name = "Chris"
            >
                <Middle/>
            </Body>
            <Footer
            name = "Folarin"
            />
        </>
    )
}