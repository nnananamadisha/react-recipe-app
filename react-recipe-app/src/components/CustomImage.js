export default function CustomImage({imgagesSrc, pt}){
    return (
        <div className="custom-image" style={{paddingTop: pt}}>
            <img src={imgagesSrc} alt="" />
        </div>
    )
}