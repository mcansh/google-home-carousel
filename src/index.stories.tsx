import React from 'react';
import { Carousel } from '.';
import { storiesOf } from '@storybook/react';

storiesOf('Carousel', module).add('Default', () => (
  <Carousel activeColor="#1eb273" color="#ccc" title="Key Platform Features">
    <div>
      <h2>Tab 1</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, inventore
        laboriosam earum provident exercitationem sint tenetur debitis at dolor
        facilis asperiores vero error rem culpa, nostrum neque dolorum libero
        obcaecati!
      </p>
    </div>
    <div>
      <h2>Tab 1</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, inventore
        laboriosam earum provident exercitationem sint tenetur debitis at dolor
        facilis asperiores vero error rem culpa, nostrum neque dolorum libero
        obcaecati!
      </p>
    </div>
  </Carousel>
));
