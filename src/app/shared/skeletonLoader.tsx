import React from 'react';
import { Avatar, List, Skeleton, Switch } from 'antd';

interface Props {
    isLoading: boolean;
    avatar: boolean;
    rowNeeded : number
}

function CustomSkeleton({
    isLoading = false,
    avatar = false,
    rowNeeded = 3
}: Props){

    return (
        <>
            <Skeleton avatar={avatar} paragraph={{ rows: rowNeeded }} active={isLoading} loading={isLoading}/>
        </>
    )
}

const cs = CustomSkeleton;

export default cs;
