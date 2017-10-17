import React from 'react';
import Carousel from '../components/Carousel';

const Index = () => {
  const items = [
    {
      title: 'Tab 1',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien est, faucibus non fringilla at, tincidunt in dui. Sed risus risus, tincidunt a lectus et, semper mattis justo. Sed sollicitudin sollicitudin hendrerit. Aliquam lacus lectus, molestie ut nulla at, tincidunt auctor augue. Fusce euismod mi a enim mattis, a auctor turpis luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur at maximus sem. Aenean porta arcu eget arcu sodales, placerat malesuada turpis blandit. Praesent id semper neque. Nunc pharetra id turpis sit amet sagittis. Pellentesque id euismod libero. Vivamus sit amet felis et mauris facilisis pretium. Morbi et commodo enim.',
    },
    {
      title: 'Tab 2',
      text:
        'Nunc porttitor odio libero, at fringilla massa feugiat sit amet. Nullam sed tempus ipsum. Nam non risus eget quam rhoncus hendrerit. Aliquam at quam orci. Phasellus auctor tellus a fermentum tempus. Donec tempor purus est. Vivamus placerat enim eget est dignissim, nec convallis mauris bibendum. Integer ac dolor iaculis, dapibus turpis et, tristique lorem. Nunc lobortis, magna in efficitur scelerisque, risus nisl aliquet lacus, a suscipit neque ante ut nibh. Mauris nunc orci, condimentum vel lectus sit amet, tempor commodo erat. Aenean mollis dui vel placerat facilisis. Donec condimentum nulla et interdum efficitur. Nullam ac porttitor ipsum. Nulla at accumsan metus. Pellentesque efficitur sem quis finibus facilisis.',
    },
    {
      title: 'Tab 3',
      text:
        'Proin suscipit aliquam nulla eu accumsan. Aliquam vitae ipsum sit amet odio sagittis scelerisque at placerat neque. Morbi eget nisl egestas, sagittis eros malesuada, feugiat lorem. Etiam tempor odio mauris, non luctus tortor interdum eu. Nam egestas faucibus aliquam. Aenean condimentum condimentum erat at ultrices. Proin consequat elementum euismod. Pellentesque elit nisi, ultrices quis vestibulum sed, iaculis porttitor est. Mauris egestas augue vitae tellus suscipit lobortis.',
    },
  ];
  return (
    <Carousel
      title="Key Platform Features"
      items={items}
      activeColor="#1eb273"
    />
  );
};

export default Index;
