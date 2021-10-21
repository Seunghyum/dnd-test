import { FC } from 'react'
import { useDrop } from 'react-dnd'
import Box from '@mui/material/Box';

interface LogImageBoxProps {
  imgUrl?: string
  ItemType: string
  onDrop: (item, monitor) => void
}

export const LogImageBox: FC<LogImageBoxProps> = ({ imgUrl, ItemType, onDrop }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemType,
    drop: onDrop,
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
    <Box 
      ref={drop} 
      sx={{ 
        minHeight: 300,
        backgroundColor 
	    }}
    >
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </Box>
  )
}
