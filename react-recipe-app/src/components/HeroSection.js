import CustomImage from "./CustomImage"

export default function HeroSection(){
    const Img = [
        "/Img/biltong.jpg",
        "/Img/bobotie.webp",
        "/Img/bunnychow.jpg",
        "/Img/chicken-feet.jpg",
        "/Img/chakalaka.jpg",
        "/Img/carrot-cake.jpg",
        "/Img/lamb-sosaties.jpg",
        "/Img/samp-and-beans.jpg",
        "/Img/malva-pudding.jpg",
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">AfricaCuisineHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
                <button className="btn">explore now</button>
            </div>
            <div className="col gallery">
                { Img.map((src, index) => (
                    <CustomImage key={index} ImgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}