import React from 'react';
import { Button, Avatar, Typography } from 'antd';
import styled from 'styled-components';
import {auth} from '../../firebase/config';
const WapperStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid #FFFFCC;
    .username{
        color: white;
        margin-left: 5px;
    }
`

const UserInfo = () => {
    return (
        <WapperStyle>
            <div>
                <Avatar>A</Avatar>
                <Typography.Text className='username'>ABC</Typography.Text>
            </div>
            <Button ghost onClick={()=> auth.signOut()}>Đăng Xuất</Button>
        </WapperStyle>
    );
};

export default UserInfo;