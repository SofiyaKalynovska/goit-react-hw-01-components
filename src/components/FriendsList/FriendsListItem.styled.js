import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
  font-size: large;
  font-weight: 600;
  box-shadow: 1px 5px 8px 3px #888888;
  
  padding: 10px;

`;

export const StatusOnline = styled.span`
width: 15px;
height: 15px;
border-radius: 50%;
background-color: green;
`;

export const StatusOffline = styled.span`
  width: 15px;
height: 15px;
border-radius: 50%;
background-color: red;
`;

export const Avatar = styled.img`
 width: 50px;
 height: 50px;
 border-radius: 5%;
 margin: 10px;
`;

export const Name = styled.p`
  margin-bottom: 8px;
`;