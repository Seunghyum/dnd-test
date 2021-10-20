// import Link from 'next/link'
// import Layout from '../components/Layout'
// import Box from '../components/Box'

// const IndexPage = () => (
//   <Layout title="Home | Next.js + TypeScript Example">
//     <Box />
//   </Layout>
// )

// export default IndexPage



import { render } from 'react-dom'
import { LogGroupDetailContainer } from '../containers/LogGroupDetailContainer'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const IndexPage = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <LogGroupDetailContainer />
      </DndProvider>
    </div>
  )
}

export default IndexPage
