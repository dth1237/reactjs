import videohomepage from '../../assets/video-homepage.mp4'
const Homepage = (props) => {
    return (
        <div className="hompage-container">
            <video autoPlay muted loop >
                <source src={videohomepage} type="video/mp4" />
            </video>
        </div>
    )
}
export default Homepage;