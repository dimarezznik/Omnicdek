import React, { FC } from "react";
import './BoxItem.scss'

const BoxItem: FC<any> = ({isEmpty, params, image, index}) => {
  const item = `item item${index}`
  return (
    <div className={item}>
      <img src={image} alt="" />
    </div>
  );
};

export default BoxItem;