import { FC } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import Box from '@mui/material/Box';

export const LogImageBox: FC = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'LogImageBox' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }

  return (
    <Box ref={drop} sx={{ 
        width: 300,
        height: 300,
		backgroundColor 
	}}>
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </Box>
  )
}
