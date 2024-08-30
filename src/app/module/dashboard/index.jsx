import React from "react";
import { Card } from "antd";
import classes from "./dashboard.layout.scss";
import CustomSkeleton from "../../shared/skeletonLoader";
import { Switch, Case, Default } from "../../shared/ComponentSwitch";


function Dashboard() {
  const eventCard = (
    <>
      <span className={classes.colorBall}></span>
      Running Events
    </>
  );
  const a = NaN;
  return (
    <div className={classes.dashboardContainer}>
      <Card
        title={eventCard}
        bordered={false}
        action={[]}
        style={{ width: 300 }}
      >
        <CustomSkeleton isLoading={true} avatar={true} />
        {/* <div className={classes.cardFooter}>See More...</div> */}
      </Card>
      <Switch>
        <Case condition={a > 10}>10 +</Case>
        <Case condition={a < 10}>10 -</Case>
        <Case condition={a == 10}>10 =</Case>
        <Default>Not Corrent</Default>
      </Switch>
    </div>
  );
}

export default Dashboard;
