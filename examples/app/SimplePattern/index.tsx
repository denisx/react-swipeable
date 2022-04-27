import React from 'react';
import { Item } from '../components';
import Carousel from './pattern';
// Carousel originally copied from:
// https://medium.com/@incubation.ff/build-your-own-css-carousel-in-react-part-one-86f71f6670ca

function SimplePattern() {
  return (
    <div>
      <h5 style={{ marginBottom: '20px' }}>
        <strong>👉 Swipe pattern</strong>
      </h5>
      <Carousel>
        <Item img="https://unsplash.it/475/205" />
        <Item img="https://unsplash.it/476/205" />
        <Item img="https://unsplash.it/477/205" />
        <Item img="https://unsplash.it/478/205" />
        <Item img="https://unsplash.it/479/205" />
      </Carousel>
      <h6>
        <a href="https://github.com/FormidableLabs/react-swipeable/blob/main/examples/app/SimplePattern/pattern.tsx">See code</a> for example usage of <code>onTouchStartOrMouseDown</code> and <code>touchEventOptions</code>
      </h6>
    </div>
  );
}

export default SimplePattern;
