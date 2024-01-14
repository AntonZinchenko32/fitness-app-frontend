import styled from '@emotion/styled';
import { Button } from 'antd';

const Item = styled.li`
  width: 100%;
  height: 150px;
  padding: 16px;
  border: 1px solid #efede833;

  border-radius: 12px;
  background-color: #efede80d;
  transition-duration: 150ms;

  @media screen and (min-width: 376px) {
    width: 335px;
  }

  @media screen and (min-width: 769px) {
    height: 160px;
  }

  @media screen and (min-width: 1441px) {
    width: 405px;
  }

  &:hover {
    background-color: #efede80a;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
`;

const Badge = styled.p`
  display: inline;
  padding: 5px 7px;

  font-weight: 700;
  font-size: 12px;
  line-height: calc(14 / 12);

  background-color: #efede80d;
  border-radius: 4px;
`;

const Status = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: auto;

  font-size: 12px;
  line-height: calc(18 / 12);
`;

const StatusRound = styled.span<{ recommended: boolean }>`
  display: inline-block;
  width: 14px;
  height: 14px;

  background-color: ${({ recommended }) =>
    recommended ? '#419B09' : '#E9101D'};
  border-radius: 50%;
`;

const AddButton = styled(Button)`
  display: flex;
  gap: 8px;
  align-items: center;

  padding: 3px 6px;
  margin-left: 16px;

  font-size: 14px;
  line-height: calc(18 / 14);
  color: #e6533c;

  &:hover {
    color: #efede8 !important;
    transform: translateX(5px);
  }

  @media screen and (min-width: 769px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

const BottomRow = styled.div`
  margin-top: 35px;
`;

const NameRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Name = styled.p`
  font-size: 18px;
  line-height: calc(22 / 18);

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (min-width: 376px) {
    font-size: 20px;
    line-height: calc(24 / 20);
  }

  @media screen and (min-width: 769px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

const NameIconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px;
  width: 24px;
  height: 24px;

  background-color: #efa082;
  border-radius: 50%;
`;

const SpecificationsList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const SpecificationsItem = styled.li`
  display: flex;
  gap: 4px;

  font-size: 12px;
  line-height: calc(18 / 12);
`;

const SpecificationName = styled.p`
  color: #efede866;
`;

const SpecificationValue = styled.p`
  color: #efa082;
`;

export {
  Item,
  TopRow,
  Badge,
  Status,
  StatusRound,
  AddButton,
  BottomRow,
  NameRow,
  Name,
  NameIconWrapper,
  SpecificationsList,
  SpecificationsItem,
  SpecificationName,
  SpecificationValue,
};