import {Menu} from "../Header/Menu";
import {Footer} from "../Footer/Footer";
import {BodyHome} from "../Body/Home/BodyHome";

export function Home() {
    return (
        <>
        <Menu back={"none"}></Menu>
            <BodyHome></BodyHome>
            <Footer></Footer>
        </>
    )
}