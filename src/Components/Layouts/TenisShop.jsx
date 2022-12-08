import {Menu} from "../Header/Menu.jsx";
import {Footer} from "../Footer/Footer";
import TenisShopBody from "../Body/TenisShop/TenisShopBody";

export function TenisShop() {

    return (
        <>
            <Menu back={"black"}></Menu>
            <TenisShopBody></TenisShopBody>
            <Footer></Footer>
        </>
    )
}