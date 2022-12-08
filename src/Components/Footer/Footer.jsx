import {Footerbody} from "./FooterStyle";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export function Footer() {
    return (
        <>
        <Footerbody>
            <div className="main">
                <h3>REDS</h3>
                <h4>Nosotros creamos posibilidades para conectar al mundo</h4>
            </div>
            <div className="second">
                <h5>Legal</h5>
                <div className="text">
                    <h6>Terms</h6>
                    <h6>Privacy</h6>
                </div>
            </div>
            <div className="second">
                <h5>Follow</h5>
                <div className="icon">
                    <FacebookIcon></FacebookIcon>
                    <TwitterIcon></TwitterIcon>
                    <InstagramIcon></InstagramIcon>
                </div>
            </div>
        </Footerbody>

        </>
    )
}