import styled from '@emotion/styled';
import { Button } from 'antd';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1441px) {
    flex-direction: row-reverse;
    gap: 30px;
  }
`;

const LabelWrapBlock = styled.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 769px) {
    gap: 0;
  }
`;

const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 14px;
  width: 100%;

  @media screen and (min-width: 769px) {
    margin: 0 14px 14px 0;
    width: 100%;
  }
`;

const Label = styled.label`
  color: rgba(239, 237, 232, 0.5);
  font-size: 12px;
  line-height: 18px;
  display: inline-block;
  margin: 0 0 5px;

  @media screen and (min-width: 769px) {
    font-size: 14px;
    margin: 0 0 8px;
  }
`;

const BlockWrapRadio = styled.div`
  display: flex;
  gap: 21px;
  margin: 0 0 32px;
`;

const BlockWrapInput = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

const RadioWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioWrapBlock = styled.div`
  position: relative;
  gap: 8px;
  display: flex;
  flex-direction: row;
`;

const LableRadio = styled.label`
  display: flex;
  height: 28px;
`;

const Input = styled.input`
  position: relative;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + span {
    border: 2px solid #ef8964;
  }
  &:checked + span:after {
    opacity: 1;
  }
`;

const CheckRadio = styled.span`
  top: 2px;
  left: 0px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border: 2px solid #9a9a9a;
  border-radius: 50%;
  display: flex;
  position: relative;
  &::after {
    content: '';
    width: 10px;
    height: 10px;
    background: #ef8964;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
`;

const ErrorText = styled.div`
  color: #d80027;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.12px;
  margin: 5px 0 0;
`;

const TextRadio = styled.span`
  color: #efede8;
  font-size: 14px;
  line-height: 18px;
  margin: 0 0 0 8px;

  @media screen and (min-width: 769px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Btn = styled(Button)`
  width: 115px;
  height: 42px;
  border: none;
  background-color: #e6533c;
  color: #efede8;
  margin-top: 64px;
  // padding: 12px 40px;

  &:hover,
  &:focus {
    background-color: #ef8964;
  }
`;

export {
  Btn,
  Label,
  TextRadio,
  RadioWrap,
  Input,
  CheckRadio,
  LableRadio,
  BlockWrapRadio,
  BlockWrapInput,
  LabelWrap,
  LabelWrapBlock,
  ErrorText,
  Wrap,
  RadioWrapBlock,
};