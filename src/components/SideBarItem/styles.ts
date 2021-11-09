import styled from "styled-components";

export const Container = styled.div`
    margin: 30px 0;
    cursor: pointer;
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
    text-align: right;
    font-weight: bold;
    font-size: 15px;
    color: #ffffff;
`;

export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #b8b8d4;
`;

export const IconArea = styled.div<{ active: boolean }>`
    //display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) => (props.active ? "#25CD89" : "#494a7c")};
    display: flex;
`;

export const Title = styled.div``;

export const Point = styled.div<{ active: boolean }>`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 3px solid #494a7c;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${(props) => (props.active ? "#25cd89" : "#02044a")};
`;
