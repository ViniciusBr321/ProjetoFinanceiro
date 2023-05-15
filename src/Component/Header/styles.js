import styled from 'styled-components';

export const Container = styled.div`
    height: 100px;
    display: flex;
    backgrond-color: #363636;
    box-shadow: 0 0 10px 3px;

    > svg {
        position: fixed;
        color: white; 
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
    }
`;

export const lightTheme = {
    body: '#FFF',
    text: '#363636'
}

export const darkTheme = {
    body: '#363636',
    text: '#FFF'
}