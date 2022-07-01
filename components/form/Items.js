import Item from "./Item";
import { FieldArray, useFormikContext } from "formik";
import React from "react";
import { AddItemButton } from "../shared/Buttons";

const Items = ({ name }) => {
  const { values } = useFormikContext();
  return (
    <>
      <FieldArray
        name={name}
        render={(helpers) => (
          <div>
            {values.items.map((item, index) => (
              <Item key={index} index={index} helpers={helpers} />
            ))}
            <AddItemButton
              type="button"
              onClick={() =>
                helpers.push({
                  name: "",
                  qty: 0,
                  price: 0,
                  total: 0,
                })
              }
            />
          </div>
        )}
      />
    </>
  );
};

export default Items;
