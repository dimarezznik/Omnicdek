import React, { FC, useState } from "react";
import "./BoxItemSmallMid.scss";

const BoxItemSmallMid: FC<any> = ({
  isNotEmpty,
  params,
  image,
  index,
  isEmptyBox,
}) => {
  const [item_small, setItemLarge] = useState(`itemS item_small${index}`);
  const isEmpty = () => {
    isEmptyBox(isNotEmpty, item_small, setItemLarge);
  };
  const removeFocus = () => {
    setItemLarge(`itemS item_small${index}`);
  };
  return (
    <div
      className={item_small}
      tabIndex={0}
      onFocus={isEmpty}
      onBlur={removeFocus}
    >
      <div className="imageS">
        <img src={image.image} alt="" />
      </div>
      <div className="size">
        <span className="size_val">{image.size}</span>
        <span>{image.box}</span>
      </div>
    </div>
  );
};

export default BoxItemSmallMid;
