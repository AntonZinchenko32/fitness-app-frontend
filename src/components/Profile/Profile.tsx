// import { useFormik } from 'formik';
import { PrimaryButton } from '..';
import {
  Btn,
  Title,
  ImgWrap,
  Text,
  TextWrap,
  BlockWrap,
  BlockData,
  Wrap,
  TitleBlock,
  TextBlockWrap,
  UserAvatar,
  BtnAvatar,
  TextValue,
  UserName,
  UserWrap,
  UserStatus,
  ImgUserAvatar,
} from './Profile.styled';
import { Icon } from '../Icon';
import { useState } from 'react';

const Profile = () => {
  const [buttonHover, setButtonHover] = useState(false);
  // const [buttonFocus, setButtonFocus] = useState(false); через те що ніде не використовується, не проходить деплой, тому поки прибрав щоб змерджити
  return (
    <>
      <Wrap>
        {/* <Title>Profile Settings</Title> */}
        <div>
          <ImgWrap>
            <ImgUserAvatar>
              <Icon
                name="user"
                iconWidth={{ mobile: '64px', tablet: '102px' }}
                iconHeight={{ mobile: '64px', tablet: '102px' }}
              />
            </ImgUserAvatar>
            <UserAvatar>
              <BtnAvatar
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
              >
                <Icon
                  name="add-foto"
                  iconWidth={{ mobile: '24px', tablet: '32px' }}
                  iconHeight={{ mobile: '24px', tablet: '32px' }}
                  stroke={buttonHover ? '#efede8' : '#e6533c'}
                />
              </BtnAvatar>
            </UserAvatar>
          </ImgWrap>

          <UserWrap>
            <UserName>Name Name</UserName>
            <UserStatus>User</UserStatus>
          </UserWrap>

          <BlockWrap>
            <BlockData>
              <TextBlockWrap>
                <Icon
                  name="food"
                  iconWidth={{ mobile: '20px', tablet: '20px' }}
                  iconHeight={{ mobile: '20px', tablet: '20px' }}
                />
                <TitleBlock>Daily calorie intake</TitleBlock>
              </TextBlockWrap>
              <TextValue>0</TextValue>
            </BlockData>
            <BlockData>
              <TextBlockWrap>
                <Icon
                  name="dumbbell"
                  iconWidth={{ mobile: '20px', tablet: '20px' }}
                  iconHeight={{ mobile: '20px', tablet: '20px' }}
                />
                <TitleBlock>Daily physical activity</TitleBlock>
              </TextBlockWrap>
              <TextValue>0 min</TextValue>
            </BlockData>
          </BlockWrap>

          <TextWrap>
            <Icon
              name="warning"
              iconWidth={{ mobile: '24px', tablet: '24px' }}
              iconHeight={{ mobile: '24px', tablet: '24px' }}
            />
            <Text>
              We understand that each individual is unique, so the entire
              approach to diet is relative and tailored to your unique body and
              goals.
            </Text>
          </TextWrap>

          <div>
            <PrimaryButton type="primary" text="Save" sizes="extraSmall" />
            <Btn htmlType="submit" type="primary">
              Save
            </Btn>
          </div>
        </div>
      </Wrap>
    </>
  );
};

export default Profile;
