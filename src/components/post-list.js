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
              <div className="tumbnail-area">

              </div>
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