import { gql } from "graphql-request";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    // GraphQL query

    const query = gql`
    query myQuery(
        $access_key: String! 
        $categories: String! 
        $keywords: String
        ) {
        myQuery(
          access_key: $access_key
          categories: $categories
          countries: "us"
          keywords: $keywords
          sort: "published_desc"
        ) {
          data {
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
          }
          pagination {
            count
            limit
            offset
            total
          }
        }
      }
    `;


    // fetch function with next.js caching..

    const res = await fetch(`https://xihe.stepzen.net/api/broken-badger/__graphql`, {
        method: 'POST',
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
            "Content-type": "application/json",
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords,
            },
        }),
    });

    console.log(
        "loading new data from api for category >>>",
        category,
        keywords
    );

    const newRes = await res.json();


    //  Sort function by images vs not images 
    
    // return res
}

export default fetchNews;

// stepzen import curl http://api.mediastack.com/v1/news?access_key=cbe638a308e62e69cdd70c22700e404a&sources=business,sports