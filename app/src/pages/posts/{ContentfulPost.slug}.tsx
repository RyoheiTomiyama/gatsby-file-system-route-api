import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const PostPage: React.FC<{
  data: GatsbyTypes.PostBySlugQuery
}> = ({ data }) => {
  return (
    <Layout>
      <h1>{data.contentfulPost?.title}</h1>
      <div dangerouslySetInnerHTML={{
        __html: data.contentfulPost?.content?.raw || ''
      }}></div>
    </Layout>
  )
}

export default PostPage


export const query = graphql`
  query PostBySlug ($id: String) {
    contentfulPost(id: { eq: $id }) {
      title
      slug
      content {
        raw
      }
    }
  }
`
