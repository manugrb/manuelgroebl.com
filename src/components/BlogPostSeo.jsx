import * as React from "react"
import Seo from "./seo"


const BlogPostSeo = (props) => {

    const defaultKeywords = "Manuel Groebl, Manuel Grobl, Manuel Gröbl, manugrb, Blog";
    const { meta } = props;

    return ( 
        <Seo 
            title={meta.title + " - Manuel Gröbl"}
            description={meta.summary}
            author={meta.author}
            keywords={meta.keywords + defaultKeywords}
        />
     );
}
 
export default BlogPostSeo;