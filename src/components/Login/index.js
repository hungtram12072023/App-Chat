import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import app, {handleFacebookLogin} from '../../firebase/config';


const { Title } = Typography;

const Login = () => {
    
    return (
        <div>
            <Row justify= "center" style={{height: 800}}>
                <Col span={8}>
                    <Title style={{
                        textAlign: "center",
                    }} level = {3}>Fun Chat</Title>
                    <Button style={{
                        width: '100%', marginBottom: 5
                    }}>
                        Đăng nhập bằng Google
                    </Button>
                    <Button style={{
                        width: '100%'
                    }} onClick={handleFacebookLogin}>Đăng nhập bằng Facebook</Button>
                </Col>
            </Row>
        </div>
    );
};

export default Login;