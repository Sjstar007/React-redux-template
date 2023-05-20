import React from 'react'
import { Card } from 'antd';
import classes from './dashboard.layout.scss'
import CustomSkeleton from '../../shared/skeletonLoader';

function Dashboard() {
  const eventCard = <>
  <span className={classes.colorBall}></span>
  Running Events
</>

  return (
    <div className={classes.dashboardContainer}>
       <Card title={eventCard} bordered={false} action={[]} style={{ width: 300 }}>
          <CustomSkeleton isLoading={true} avatar={true}  />
          {/* <div className={classes.cardFooter}>See More...</div> */}
       </Card>
    </div>
  )
}

export default Dashboard