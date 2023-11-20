import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/images/gallery/biltong.jpg",
        "/images/gallery/bobotie.jpg",
        "/images/gallery/bunnychow.jpg",
        "/images/gallery/chickenfeet.jpg",
        "/images/gallery/chakalaka.jpg",
        "/images/gallery/carrot-cake.jpg",
        "/images/gallery/lamg-sosaties.jpg",
        "/images/gallery/samp-and-beans.jpg",
        "/images/gallery/malva-pudding.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">AfricaCuisineHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
                <button className="btn">explore now</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgagesSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}