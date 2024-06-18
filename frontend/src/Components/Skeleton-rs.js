import React from 'react'
import { Skeleton} from 'antd';

function Skeletonrs() {
  return (
    <div className='skl-results' >
    <div style={{ display: "flex", flexDirection: "column" }}>
        <Skeleton.Input active width={200} style={{ marginBottom: 16, width: "250px", marginRight: 25 }} />
        <Skeleton.Input active width={200} style={{ marginBottom: 16, width: "250px", marginRight: 25 }} />
    </div>
</div  >
  )
}

export default Skeletonrs