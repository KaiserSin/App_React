import React from 'react';
import { Item } from '../ProductItem/ProductItem'
import './RenderGrid.scss';

const RenderGrid = ({ products }) => {
  let answer = [];
  let one_gr = [];
  let counter_id = 0;

  products.forEach(element => {
    one_gr.push(
      <Item
        key={element.id}
        id={element.id}
        image_url={element.image_url}
        currentprice={element.currentprice}
        oldprice={element.oldprice}
        text={element.text}
      />
    );

    if (one_gr.length === 6) {
      answer.push(
        <div
          id={`itemsgrid${counter_id}`}
          key={`itemsgrid${counter_id}`}
          className={`w-layout-grid itemsgrid${2}`}
        >
          {one_gr}
        </div>
      );
      counter_id += 1;
      one_gr = [];
    }
  });

  if (one_gr.length !== 0) {
    answer.push(
      <div
        id={`itemsgrid${counter_id}`}
        key={`itemsgrid${counter_id}`}
        className={`w-layout-grid itemsgrid${2}`}
      >
        {one_gr}
      </div>
    );
  }

  return answer;
};

export { RenderGrid };