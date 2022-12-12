import {Menu} from "../Header/Menu.jsx";
import ItemBody from "../Body/ProductsPanel/ItemBody.jsx";
import {Footer} from "../Footer/Footer.jsx";
import ShoppingBody from "../Body/Shopping/ShoppingBody";

export function Shopping() {
    return (
        <>
            <Menu back={"black"}></Menu>
            <ShoppingBody></ShoppingBody>
            <Footer></Footer>
        </>
    )
}