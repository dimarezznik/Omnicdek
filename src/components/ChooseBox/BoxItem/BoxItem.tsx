import React, { FC } from "react";
import './BoxItem.module.scss'

const BoxItem: FC<any> = ({isEmpty, params, image, index}) => {
  const item = `item${index}`
  return (
    <div className={item}>
      <img src={image} alt="" />
    </div>
  );
};

export default BoxItem;