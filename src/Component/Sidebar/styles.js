import styled from 'styled-components';

export const Container = styled.div`
    background-color: #363636;
    box-shadow: 0 0 20px 3px;
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 20%;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .4s;
    z-index: 9999;

<<<<<<< HEAD
=======


>>>>>>> f9cea5dff0470058700004b01c2bffc685f787b3
    > svg {
        position: fixed;
        color: White;
        height: 3.9%;
        width: 1.7%;
        right: 97%;
<<<<<<< HEAD
        bottom: 92%;
        cursor: pointer;
    }

    > a {
        text-decoration: none;
    }

=======
        bottom: 91%;
        cursor: pointer;
    }

>>>>>>> f9cea5dff0470058700004b01c2bffc685f787b3

@keyframes showSidebar {
    from{
        opacity: 0;
        width: 0;
    }
    to {
        opacity: 1;
        width: 300px;
    }
}
`;

export const Content = styled.div`
    margin-top: 100px;
`;