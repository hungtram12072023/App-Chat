import React from 'react';
import {Row, Col } from 'antd';
import SideBar from './SideBar';
import ChatWindow from './ChatWindow';

const ChatRoom = () => {
    return <div>
        <Row>
            <Col span={6}><SideBar /></Col>
            <Col span={18}><ChatWindow/></Col>
        </Row>
    </div>;
};

export default ChatRoom;