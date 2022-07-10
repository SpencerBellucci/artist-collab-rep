import './css/home_page.css'

function Home_Frame() {
    return (
        <div>
            <TOP_BAR />
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
        <div onClick={fetch}>
            Send API request to Cyanite
        </div>
    )
}

fetch("https://api.cyanite.ai/graphql", {
  method: "POST",
  body: JSON.stringify({
    query: {
      query: /* GraphQL */ `
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
    Authorization: "Bearer" + "xxxxxx1212",
  },
})
  .then((res) => res.json())
  .then(console.log);



export default Home_Frame;