import { LogGroupDetailContainer } from '../containers/LogGroupDetailContainer'
import demoData from '../data/demoData.json'

const IndexPage = () => {
  return (
    <div className="App">
        {demoData.map(({title, category, data, imgUrl}) => (
          <LogGroupDetailContainer id={title} key={title} title={title} category={category} data={data} imgUrl={imgUrl} />
        ))}
    </div>
  )
}

export default IndexPage
