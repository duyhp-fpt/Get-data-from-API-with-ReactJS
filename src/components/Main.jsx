export default function Main(props) {
    const { data } = props
    return (
        <div className="imgContainer">
            <img src={data.hdurl} alt={data.title || 'bg-img'} className="bgImage" />
            {/* <img src={'https://apod.nasa.gov/apod/image/2408/PerseidM45Aurora_Heden.jpg'} alt={data.title || 'bg-img'} className="bgImage" /> */}
        </div>
    )
}