import * as React from "react"
import { Link } from "gatsby"

const BlogIndex = (props) => {

  return (
    
    <ol className="post-list" style={{ listStyle: `none` }}>
      {props.posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (
          <li key={post.fields.slug}>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <Link to={post.fields.slug} itemProp="url">
                <div className="tumbnail-area">
                  {post.frontmatter.thumbnail ? (
                    <img className="thumbnail-image" src={post.frontmatter.thumbnail.childImageSharp.fixed.src} alt="thumbnail"/>
                  ) : (
                    <p></p>
                  )}                
                </div>
              </Link>              

              <div className="title-area">
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <span className="date">{post.frontmatter.date}</span>                        
                </header>                      
              </div>

              
              {/* <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                  itemProp="description"
                />
              </section>  */}
              
            </article>
          </li>
        )
      })}
    </ol>
  )
}

export default BlogIndex