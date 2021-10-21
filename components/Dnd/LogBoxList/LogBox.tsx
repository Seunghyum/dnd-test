import { FC } from 'react'
import { useDrag } from 'react-dnd'
import { TableCell, TableRow } from '@mui/material';

export interface BoxProps {
  dataRow: string[]
  ItemType: string
}

export const LogBox: FC<BoxProps> = ({ dataRow, ItemType }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { ...dataRow },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  const opacity = isDragging ? 0.4 : 1
  return (
    <TableRow
      ref={drag}
      role="LogBox"
      style={{ opacity }}
    >
      {dataRow.map((d, i) => <TableCell key={i}>{d}</TableCell>)}
    </TableRow>
  )
}
