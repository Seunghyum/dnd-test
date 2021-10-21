import { FC, memo, useEffect, useState } from 'react'
import { Container, Grid, Typography } from '@mui/material';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { LogImageBox } from '../components/Dnd/LogImageBox'
import { LogBoxList } from '../components/Dnd/LogBoxList'
interface LogGroupDetailContainerProps {
  title: string
  category: string
  imgUrl: string | undefined
  data: any[]
  id: string
}

export const LogGroupDetailContainer: FC<LogGroupDetailContainerProps> = memo(({title, category, imgUrl, data, id}) => {
  
  const [attrNames, setAttrNames] = useState([])

  useEffect(()=>{
    let attrSet = new Set()
    data.forEach(row => {
      attrSet = new Set([...attrSet, ...Object.keys(row)])
    })
    setAttrNames([...attrSet])
  },[])


  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h4">{category}</Typography>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <LogImageBox imgUrl={imgUrl} ItemType={id} onDrop={(item, monitor) => {
              console.log('item : ', item)
              console.log('monitor : ', monitor)
            }}/>
          </Grid>
          <Grid item md={8}>
            <LogBoxList attrNames={attrNames} data={data} ItemType={id} />
          </Grid>
        </Grid>
      </Container>
    </DndProvider>
  )
})
