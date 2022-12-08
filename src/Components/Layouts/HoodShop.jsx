import {Menu} from "../Header/Menu.jsx";
import {Footer} from "../Footer/Footer.jsx";
import HoodShopBody from "../Body/Hoods/HoodShopBody";

export function HoodShop() {
    return (
        <>
            <Menu back={"black"}></Menu>
            <HoodShopBody></HoodShopBody>
            <Footer></Footer>
        </>
    )
}