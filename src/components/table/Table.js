import React from 'react'
import TableUi from './TableUi'
import { items, headers } from './server/db';
import './Table.scss'
const Table = () => {
    
  
    return (
        <div>
            <TableUi items={items} headers={headers} />
        </div>
    )
}

export default Table
