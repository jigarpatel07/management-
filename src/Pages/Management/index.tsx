import React from 'react'
import ManagementHeader from './ManagementHeader'
import ManagementTable from './ManagementTable'

function Management() {
  return (
    <div className=' overflow-y-auto px-[63px]' style={{ height: 'calc(100vh - 64px)', maxWidth: "calc(100% - 50px)" }}>
      <ManagementHeader />
      <ManagementTable />
    </div>
  )
}

export default Management