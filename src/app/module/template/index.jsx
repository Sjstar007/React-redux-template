import React, { Children } from "react";


function BadConditionalRendering() {
  const amount = 6;
  const hasLink = true;

  return (
    <div>
      {amount === 6 && !hasLink && (
        <>
          <b>Lucky Number 6!</b>
          <b>No Link </b>
        </>
      )}
      {amount === 6 && hasLink && (
        <>
          <b>Lucky Number 6!</b>
          <a href="https://github.com/">Click Here!</a>
        </>
      )}

      {amount !== 6 && <b>Condition are not met!</b>}
    </div>
  );
}

export default BadConditionalRendering;


import React,{ Children } from "react";

export const ConditionalRenderer = (props) => {
    let when = null;
    let otherwise = null;

    Children.forEach(props.children, children => {
        if(children.props.isTrue === undefined){
            otherwise = children;
        }else if(!when && children.props.isTrue){
            when = children;
        }
    })
    return when || otherwise;
}
ConditionalRenderer.when = ({isTrue, children}) => isTrue && children;
ConditionalRenderer.Else = ({render, children}) => render && children;

import { ConditionalRenderer } from "./ConditionalRenderer";


function GoodConditionalRendering() {
  const amount = 6;
  const hasLink = true;

  return (
    <div>
      <ConditionalRenderer>
        <ConditionalRenderer.when isTrue={amount === 6 && !hasLink}>
          <b>Your Amount: {amount}</b>
          <b>No Link !!</b>
        </ConditionalRenderer.when>
        <ConditionalRenderer.when isTrue={amount === 6 && hasLink}>
            <b>Your Amount: {amount}</b>
          <a href="https://github.com/">Grab Here!</a>
        </ConditionalRenderer.when>
        <ConditionalRenderer.Else>
          <b>Condition are not met!</b>
        </ConditionalRenderer.Else>
      </ConditionalRenderer>
    </div>
  );
}

// export default GoodConditionalRendering;
