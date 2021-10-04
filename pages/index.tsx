import { Paragraph, Textarea } from 'evergreen-ui'
import type { NextPage } from 'next'
import Head from 'next/head'
import styledComponents from 'styled-components'

const StyledTest = styledComponents.div`
  border: 1px solid #efefef;
`

const Home: NextPage = () => {
  return (
    <StyledTest>
      <Head>
        <title>Dev Toolbar</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Paragraph>Paste here</Paragraph>
      <Textarea />
    </StyledTest>
  )
}

export default Home // eslint-disable-line import/no-default-export
