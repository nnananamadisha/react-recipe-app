import CustomImage from "./CustomImage"

export default function HeroSection(){
    const Img = [
        "/Img/gallery/biltong.jpg",
        "/Img/gallery/bobotie.jpg",
        "/Img/gallery/bunnychow.jpg",
        "/Img/gallery/chickenfeet.jpg",
        "/Img/gallery/chakalaka.jpg",
        "/Img/gallery/carrot-cake.jpg",
        "/Img/gallery/lamg-sosaties.jpg",
        "/Img/gallery/samp-and-beans.jpg",
        "/Img/gallery/malva-pudding.jpg",
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