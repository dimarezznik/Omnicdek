import React, { FC, useState } from "react";
import "./BoxItemSmallMid.scss";
import { IBoxes } from "../../../types/types";

const BoxItemSmallMid: FC<IBoxes> = ({
  isNotEmpty,
  image,
  index,
  isEmptyBox,
}) => {
  const [item_small, setItemLarge] = useState<string>(
    `itemS item_small${index}`
  );

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
