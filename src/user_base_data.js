import { Amplify, Auth } from 'aws-amplify';
import './css/home_page.css';

// import graphql operations
import { createUserRating, updateUserRating, deleteUserRating } from './graphql/mutations';
import { listUserRatings } from './graphql/queries';

// import authenticator
import './authenticator';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

// function to check if user is authenticated -- from McMath on stack overflow
async function ionViewCanEnter() {
    try {
        await Auth.currentAuthenticatedUser();
        return true;
    } catch {
        return false;
    }
}

function DATA_FRAME() {
    if (ionViewCanEnter()) {
        return (
            <>
                <h1>Welcome, you may enter!</h1>
            </>
        )
    }
}

export default DATA_FRAME;
