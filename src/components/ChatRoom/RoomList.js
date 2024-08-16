import React from 'react';
import { Button, Collapse, Typography } from 'antd';
import styled from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';


const { Panel } = Collapse;
const ListStyle = styled(Panel)`
    &&&{
        .ant-collapse-header, p{
            color : white;

        }
        .ant-collapse-content-box{
            padding : 0 40px;
        }
        .add-room{
            color: white;
            padding: 0;
        }
    }
`
const LinkStyle = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;
`
const RoomList = () => {
    return (
        <Collapse defaultActiveKey={[1]} ghost>
            <ListStyle header="Danh sách phòng" key = '1'>
                <LinkStyle>Room 1</LinkStyle>
                <LinkStyle>Room 2</LinkStyle>
                <LinkStyle>Room 3</LinkStyle>
                <Button type='text' icon={<PlusSquareOutlined/>} className='add-room'>Thêm Phòng</Button>
            </ListStyle>
        </Collapse>
    );
};

export default RoomList;