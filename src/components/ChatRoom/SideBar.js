import React from 'react';
import { Row, Col } from 'antd';
import UserInfo from './UserInfo';
import RoomList from './RoomList';
import styled from 'styled-components';

const SideBarStyled = styled.div`
    background-color: #CC99FF;
    color: white;
    height: 100vh;
`;

const SideBar = () => {
    return (
        <SideBarStyled>
            <Row>
                <Col span={24}><UserInfo></UserInfo></Col>
                <Col span={24}><RoomList></RoomList></Col>
            </Row>
        </SideBarStyled>
    );
};

export default SideBar;