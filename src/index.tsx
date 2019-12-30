import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import styled from 'styled-components';
import VisuallyHidden from '@reach/visually-hidden';

const ButtonNubWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const ButtonNub = styled.button<{ backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 2px;
  border: 0;
  margin: 0 0 0 5px;
  cursor: pointer;
  background: none;
  padding: 10px 0;

  ::after {
    content: '';
    width: 30px;
    height: 2px;
    background: ${props => props.backgroundColor};
    border-radius: 2px;
    display: inline-flex;
  }
`;

interface Props {
  activeColor: string;
  title: string;
  color?: string;
}

const useCarousel = () => {
  const [index, setIndex] = React.useState(0);
  const handleChange = (newIndex: number) => setIndex(newIndex);

  return { index, handleChange };
};

const Carousel: React.FC<Props> = ({
  color = '#ccc',
  activeColor,
  title,
  children,
}) => {
  const { index, handleChange } = useCarousel();
  const childrenCount = Array.from(
    Array(React.Children.count(children)).keys()
  );

  return (
    <div>
      <h1>{title}</h1>
      <SwipeableViews
        index={index}
        enableMouseEvents
        onChangeIndex={handleChange}
      >
        {children}
      </SwipeableViews>
      <ButtonNubWrapper>
        {childrenCount.map(child => (
          <ButtonNub
            key={child}
            type="button"
            backgroundColor={child === index ? activeColor : color}
            onClick={() => handleChange(child)}
          >
            <VisuallyHidden>Switch to tab {child + 1}</VisuallyHidden>
          </ButtonNub>
        ))}
      </ButtonNubWrapper>
    </div>
  );
};

export { Carousel };
