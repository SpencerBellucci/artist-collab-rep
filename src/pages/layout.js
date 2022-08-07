import { Outlet, Link } from "react-router-dom";

import '../styles/layout.css';

const Layout = () => {
    return (
        <div className="layout_container">
            <TOP_BAR/>
            <div className="page">
            <div>
                <ul className="layout_page">
                    <div>
                        <Link id="home" className="flex-item" to="/">Home</Link>
                    </div>
                    <div>
                        <Link id="record" className="flex-item" to="/record">Record</Link>
                    </div>
                    <div>
                        <Link id="chat" className="flex-item" to="/chat">Chat</Link>
                    </div>
                    <div>
                        <Link id="friends" className="flex-item" to="/friends">Friends</Link>
                    </div>
                </ul>
            </div>

            <Outlet />
        </div>
        </div>
        
    )
};

function TOP_BAR() {
    return (
        <div className="top_bar">
            <USER_PROFILE first_name="First Name" last_name="Last Name" />
            <USER_SIGNIN/>
        </div>
    )
}

function USER_PROFILE(props) {
    return (
        <div className="user_profile">
            <img id="profile_pic" className="profile_desc" alt="profile pic"></img>
            <h1 className="profile_desc">{props.first_name}</h1>
            <h1 className="profile_desc">{props.last_name}</h1>
        </div>
    )
}

function USER_SIGNIN() {
    return (
        <div>
            <Link id="auth" className="user_signin" to="/auth"></Link>
        </div>
    )
}

export default Layout;