import { useState } from 'react';

import {
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
} from './ProductsItem.styled';
import { Icon } from '../../Icon';

interface ProductsItemProps {
  recommended: boolean;
}

const ProductsItem: React.FC<ProductsItemProps> = ({ recommended }) => {
  const [buttonHover, setButtonHover] = useState(false);

  return (
    <Item>
      <TopRow>
        <Badge>DIET</Badge>
        <Status>
          <StatusRound recommended={recommended}></StatusRound>
          {recommended ? 'Recommended' : 'Not recommended'}
        </Status>
        <AddButton
          type="text"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Add
          <Icon
            name="arrow-secondary"
            iconWidth={{ mobile: '16px', tablet: '16px' }}
            stroke={buttonHover ? '#efede8' : '#e6533c'}
          />
        </AddButton>
      </TopRow>
      <BottomRow>
        <NameRow>
          <NameIconWrapper>
            <Icon
              name="running"
              iconWidth={{ mobile: '16px', tablet: '16px' }}
              fill="#EFEDE8"
              stroke="#EFEDE8"
            />
          </NameIconWrapper>
          <Name>Rice semolina Garnets gluten-free</Name>
        </NameRow>
        <SpecificationsList>
          <SpecificationsItem>
            <SpecificationName>Calories:</SpecificationName>
            <SpecificationValue>340</SpecificationValue>
          </SpecificationsItem>
          <SpecificationsItem>
            <SpecificationName>Category:</SpecificationName>
            <SpecificationValue>Cereals</SpecificationValue>
          </SpecificationsItem>
          <SpecificationsItem>
            <SpecificationName>Weight:</SpecificationName>
            <SpecificationValue>100</SpecificationValue>
          </SpecificationsItem>
        </SpecificationsList>
      </BottomRow>
    </Item>
  );
};

export default ProductsItem;