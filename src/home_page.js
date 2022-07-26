import { API, Amplify, graphqlOperation } from 'aws-amplify';
import './css/home_page.css';

// import graphql operations
import { createUserRating, updateUserRating, deleteUserRating } from './graphql/mutations';
import { listUserRatings } from './graphql/queries';

// import authenticator
import './authenticator';

import awsExports from './aws-exports';
import Authenticator from './authenticator';
Amplify.configure(awsExports);

// ------------- database test ------------//
const user = { name: "Spencer", genre_score: 3, key_score: 4 };

// create
(async function() {
    try {
        await API.graphql(graphqlOperation(createUserRating, {input: user}));
    } catch (e) {
        console.log(e)
    }
}());

// list
(async function() {
    try {
        const user_rating = await API.graphql(graphqlOperation(listUserRatings));
        console.log(user_rating);
    } catch (e) {
        console.log(e)
    }
}());


// custom http endpoint for CYANITE API
Amplify.configure({
    API: {
      graphql_endpoint: 'https://api.cyanite.ai/graphql'
    }
  });
  
(async () => {
    try {
        const allTodos = await API.graphql({ 
            "query": "query LibraryTracksQuery { libraryTracks(first: 10) { edges { node { id } } } }",
            "operationName": "...",
            "variables": { "first": 10 },
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiSW50ZWdyYXRpb25BY2Nlc3NUb2tlbiIsInZlcnNpb24iOiIxLjAiLCJpbnRlZ3JhdGlvbklkIjoyODUsInVzZXJJZCI6MTAyMDEsImFjY2Vzc1Rva2VuU2VjcmV0IjoiYzNkYmM2MGUxYTY2YmVjOTAxZmVmODgyZWYwN2EwN2M0ZDMxN2JlZjgyOWEzZWIxYWM1ZjYxYjhmOTc3YTRiOCIsImlhdCI6MTY1NzQ5MjI2MX0.OMeyaMwz6U2qPYHErfwfGiWEo3M23o_4G43Vx-97tMw"
         });
        console.log(allTodos);
    } catch (e) {
        console.log(e)
    }
})()


function HOME_FRAME() {
    return (
        <div>
            <Authenticator />
            <API_BUTTON />
        </div>
    )
}

function TOP_BAR() {
    return (
        <div className="top">
            <div className="top_left">
                <div className="profile_pic">
                    
                </div>
            </div>
            
            <div className="top_right">
                <div className="profile_name">
                    <h1>First Name // Last Name</h1>
                </div>

                <div className="pofile_info">
                    <h1>Instruments // prefered style // etc</h1>
                </div>
            </div>
        </div>
    )
}

function API_BUTTON() {
    return (
        <div onClick={FETCH_DATA}>
            Send API request to Cyanite
        </div>
    )
}

function FETCH_DATA() {
    console.log("Hello World!")
}




export default HOME_FRAME;