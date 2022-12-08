import {HomeBody} from "./HomeStyle.jsx";

export const BodyHome = () => {
    return (
        <>
        <HomeBody className="back">
            <div className="content">
                <div className="title">
                    <h2>REDS</h2>
                    <h2 className="back-text">SNEAKERS</h2>
                </div>
                <div className="butoms">
                    <button>Productos Mas nuevos</button>
                    <button className="more">Tenis</button>
                </div>
            </div>
        </HomeBody>
        </>
    )
}