import styled from '@emotion/styled'

export const ProfileUser = styled.div`
  text-align: center;
  background-color: oldlace;
`;

export const Description = styled.div`
  padding: 40px 0 40px;
`;

export const UserAvatar = styled.img`
  margin: auto;
  width: 80px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-top: 40px;
  font-weight: 700;
`;

export const UserTag = styled.p`
  font-weight: 300;
  margin: 10px 0 10px;
`;

export const UserLocation = styled.p`
  font-weight: 300;
`;

export const UserStats = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatsItem = styled.li`
  width: 3.3333%;
  padding: 15px;
  flex-basis: calc((100% - 3 * 30px) / 3);
  background-color: antiquewhite;
  border-top: 1px solid tomato; 
  border-right: 1px solid tomato;

  :last-child{
    border-right: 0;
  }
`;

export const StatItemLabel = styled.span`
  display: block;
  font-weight: 300;
`;

export const StatItemQuantity = styled.span`
  display: block;
  font-weight: 700;
`;