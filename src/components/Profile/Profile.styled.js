import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 30px;
  width: 250px;
  height: 300px;
  display: block;
  border-radius: 2%;
  box-shadow: 1px 2px 9px gray;
`;

export const UserDiscription = styled.div`

 text-align: center;
 padding-top: 20px;
 padding-bottom: 15px;
`;

export const Avatar = styled.img`
 width: 100px;
 height: 100px;
 border-radius: 50%;
 margin-bottom: 20px;
`;

export const UserName = styled.p`
font-size: larger;
font-weight: 500;
margin-bottom: 10px;
`;

export const DiscriptionItem = styled.p`
color: #B7B2B1;
margin-bottom: 10px;
`;

export const PageStatistic = styled.ul`
height: 50px;

display: flex;
align-items: center;

border: 2px solid #D6D3D3;
border-bottom-left-radius: 5%;
border-bottom-right-radius: 5%;

background-color: #ECE9E9;
color: #B7B2B1;
`;

export const StatisticItem = styled.li`
width: 33.33%;
display: flex;
flex-direction: column;
align-items: center;

:not(:last-child) {
  border-right: 2px solid #D6D3D3;
}
`;
export const StatisticQuantity = styled.p`
color: black;
font-weight: 700;
`;

export const StatisticName = styled.p`
margin-bottom: 10px;
`;