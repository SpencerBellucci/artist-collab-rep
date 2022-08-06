// HOME PAGE
import "../styles/home.css"

function HOME() {
    return (
        <div className="home_page">
            <div className="home_tab">
                <div className="home_left">
                    <div className="unsaved_tab">
                        <PROFILE track_name="track" track_artist="artist" track_style="style"/>
                        <PROFILE track_name="track" track_artist="artist" track_style="style"/>
                        <PROFILE track_name="track" track_artist="artist" track_style="style"/>
                    </div>
                </div>
                <div className="home_right">
                    <div className="saved_tab">
                        <PROFILE track_name="track" track_artist="artist" track_style="style"/>
                        <PROFILE track_name="track" track_artist="artist" track_style="style"/>
                        <PROFILE track_name="track" track_artist="artist" track_style="style"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function PROFILE(props) {
    return (
        <div className="profile">
            <img id="play_button" className="desc" alt="play button"></img>
            <h1 className="desc">{props.track_name}</h1>
            <h1 className="desc">{props.track_artist}</h1>
        </div>
    )
}

export default HOME;