import { API } from 'aws-amplify';
import './css/home_page.css';
import { Amplify } from 'aws-amplify';

// import authenticator
import './authenticator';

import awsExports from './aws-exports';
import Authenticator from './authenticator';
Amplify.configure(awsExports);


//import * as queries from './graphql/queries';


/*
(async () => {
    await fetch("https://api.cyanite.ai/graphql", {
        method: "POST",
        body: JSON.stringify({
          query: {
            query: `
              query LibraryTracksQuery {
                libraryTracks(first: 10) {
                  edges {
                    node {
                      id
                    }
                  }
                }
              }
            `,
            variables: {
              first: 10,
            },
          },
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiSW50ZWdyYXRpb25BY2Nlc3NUb2tlbiIsInZlcnNpb24iOiIxLjAiLCJpbnRlZ3JhdGlvbklkIjoyODUsInVzZXJJZCI6MTAyMDEsImFjY2Vzc1Rva2VuU2VjcmV0IjoiYzNkYmM2MGUxYTY2YmVjOTAxZmVmODgyZWYwN2EwN2M0ZDMxN2JlZjgyOWEzZWIxYWM1ZjYxYjhmOTc3YTRiOCIsImlhdCI6MTY1NzQ5MjI2MX0.OMeyaMwz6U2qPYHErfwfGiWEo3M23o_4G43Vx-",
        },
      })
        .then((res) => res.json())
        .then(console.log);
})()
*/


// custom http endpoint for CYANITE API
Amplify.configure({
    API: {
      graphql_endpoint: 'https://api.cyanite.ai/graphql'
    }
  });
  

/*
(async () => {
    const allTodos = await API.graphql({ query: queries.listTodos });
    console.log(allTodos);
})()
*/


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