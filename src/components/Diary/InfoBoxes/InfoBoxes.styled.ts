import styled from '@emotion/styled';
import { Icon } from '../..';
const InfoBox = styled.div`
  min-height:335px;
  max-height:824px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
 
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
 
    height: 240px;
    max-height:none;
    min-height:240px;
  }
  @media screen and (min-width: 1440px) {
  padding-left:32px;
  padding-bottom:12px;
    height: 234px;
    width:826px;
    max-height:none;
    min-height:234px;
  }
`;
const TopRow = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  justify-content: space-between;
  margin-bottom:22px;
`;

const GrayBlockTitle = styled.p`
  font-size: 14px;
  color: rgba(239, 237, 232, 0.4);
  line-height: 18px;
`;

const RedBlockTitle = styled(GrayBlockTitle)`
display:inline-flex;
  color: rgba(230, 83, 60, 1);
   &:hover {
    color: #efede8 !important;
    transform: translateX(5px);

    svg {
      stroke: #efede8;
    }
  `;
const InfoBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

const DiaryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DesktopWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    order: 2;
  }
`;
const StyledIcon=styled(Icon)`
display:block;
margin: 2px 0 0 8px;`
export {InfoBox,
  GrayBlockTitle,
  RedBlockTitle,
  TopRow,
  InfoBoxWrap,
  DiaryWrapper,
  DesktopWrap,
StyledIcon
};
