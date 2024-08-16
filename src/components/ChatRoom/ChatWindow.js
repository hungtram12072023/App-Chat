import { Avatar, Button, Form, Input, Tooltip } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { UserAddOutlined } from '@ant-design/icons';
import Messeage from './Messeage';
const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 56px;
    padding: 0 16px;
    align-items: center;
    border-bottom: 1px solid black;
    .header{
        &__Info{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        &__title{
            margin: 0;
            font-weight: bold;
        }
        &__description{
            font-size: 12px;
        }
    }
`
const ContentStyled = styled.div`
    height: calc(95% - 56px);
    display: flex;
    flex-direction: column;
    padding: 11px;
    justify-content: flex-end;

`
const ButtonGroupStyled = styled.div`
    display: flex;
    align-items: center;

`
const MessegaListStyled = styled.div`
    max-height: 100%;
    overflow-y: auto;
    
`
const WapperStyle = styled.div`
    height: 100vh;
`
const FormStyled = styled(Form)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 2px 2px 0;
    border: 1px solid rgb(230, 230, 230);
    border-radius: 2px;

    .ant-form-item{
        flex:1;
        margin-bottom: 0;
    }
`
const ChatWindow = () => {
    return (
        <WapperStyle>
            <HeaderStyled>
                <div className='header__Info'>
                    <p className='header__title'>Room 1</p>
                    <span className='header__description'>Đây là room 1</span>
                </div>
                <ButtonGroupStyled>
                    <Button icon={<UserAddOutlined />} type='text'>Mời</Button>
                    <Avatar.Group size='small' max={2}>
                        <Tooltip title="A">
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip title="B">
                            <Avatar>B</Avatar>
                        </Tooltip>
                        <Tooltip title="A">
                            <Avatar>C</Avatar>
                        </Tooltip>
                        <Tooltip title="A">
                            <Avatar>C</Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </ButtonGroupStyled>
            </HeaderStyled>
            <ContentStyled>
                <MessegaListStyled>
                    <Messeage text='ss' displayName='HUng' createAt={12371} photoURL={null}></Messeage>
                    <Messeage text='ss' displayName='HUng' createAt={12371} photoURL={null}></Messeage>
                    <Messeage text='ss' displayName='HUng' createAt={12371} photoURL={null}></Messeage>
                    <Messeage text='ss' displayName='HUng' createAt={12371} photoURL={null}></Messeage>
                    <Messeage text='ss' displayName='HUng' createAt={12371} photoURL={null}></Messeage>
                </MessegaListStyled>
                <FormStyled>
                    <Input bordered={false} placeholder='Hãy nhập tin nhắn muốn gửi của bạn'/>
                    <Button type='primary'>Gửi</Button>
                </FormStyled>
            </ContentStyled>
        </WapperStyle>
    );
};

export default ChatWindow;