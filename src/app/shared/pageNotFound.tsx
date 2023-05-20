import React from 'react';
import { Avatar, List, Skeleton, Switch } from 'antd';

interface Props {
    isLoading: boolean;
    avatar: boolean;
    rowNeeded : number
}

function PageNotFound({
    isLoading = false,
    avatar = false,
    rowNeeded = 3
}: Props){

    return (
        <>
            <h3>404 Page Not Found</h3>
        </>
    )
}

const pg = PageNotFound;

export default pg;
