import { CustomButton } from './PrimaryButton.styled';
import { ButtonProps } from 'antd';

interface PrimaryButtonProps extends ButtonProps {
  type: 'link' | 'text' | 'default' | 'primary' | 'dashed';
  text: string;
  sizes: 'large' | 'middle' | 'small' | 'extraSmall';
  padding?: string;
  fontSize?: number;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  type,
  text,
  sizes,
  padding,
  fontSize,
}) => {
  return (
    <CustomButton
      type={type}
      sizes={sizes}
      fontSize={fontSize}
      padding={padding}
    >
      {text}
    </CustomButton>
  );
};

export default PrimaryButton;