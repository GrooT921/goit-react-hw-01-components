import styled from '@emotion/styled'

export const FriendList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const FriendListItems = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border: 1px solid rgb(124, 123, 123);
    border-radius: 4px;
    width: 50%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const AvatarFriend = styled.img`
    border: 1px solid red;
    border-radius: 4px;
    margin: 5px 10px 5px 0;
`;

export const NameFriend = styled.p`
    font-weight: 600;
`;

export const StatusFriends = styled.span`
    padding: 10px;
    margin: 0 8px 0 8px;
    border-radius: 50%;
    background-color: ${p => p.isOnline ? "green" : "red"};
`;
