import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { TitleAndMetaTags } from '../components/TitleAndMetaTags'
import MDXContent from '../components/MDX.Content'
import QuickNav from '../components/QuickNav'
import { ContentBlock, PageContainer } from '../components/Layout.Wrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function DocsPage({ data }) {
  const { doc } = data

  if (doc) {
    const { frontmatter, body, fields, headings } = doc
    return (
      <Fragment>
        <TitleAndMetaTags
          title={frontmatter.title}
          description={frontmatter.subtitle}
          banner={frontmatter.banner ? frontmatter.banner : ''}
          pathname={`${fields.slug}`}
        />
        <PageContainer>
          <Header />
          <ContentBlock>
            <MDXContent
              title={frontmatter.title}
              subtitle={frontmatter.subtitle}
              banner={frontmatter.banner ? frontmatter.banner : ''}
              body={body}
              lastUpdatedOn={fields.lastUpdatedOn}
              slug={fields.slug}
            ></MDXContent>
            <QuickNav subNavPages={headings}></QuickNav>
          </ContentBlock>
          <Footer />
        </PageContainer>
      </Fragment>
    )
  }
}

export const pageQuery = graphql`
  query DocQuery($slug: String!) {
    doc: mdx(
      fields: { slug: { eq: $slug } }
      frontmatter: { title: { ne: "" } }
    ) {
      fields {
        lastUpdatedOn
        slug
      }
      frontmatter {
        title
        subtitle
        banner
      }
      headings(depth: h2) {
        value
      }
      body
    }
  }
`
