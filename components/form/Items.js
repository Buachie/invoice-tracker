import Item from "./Item";
import { FieldArray, useFormikContext } from "formik";
import React from "react";
import styles from "./Form.module.scss";

const Items = ({ name }) => {
  const { values } = useFormikContext();
  return (
    <div>
      <FieldArray
        name={name}
        render={(helpers) => (
          <div>
            {values.items.map((item, index) => (
              <Item key={index} index={index} helpers={helpers} />
            ))}
            <button
              type="button"
              onClick={() =>
                helpers.push({
                  name: "",
                  qty: 0,
                  price: 0,
                  total: 0,
                })
              }
              className={styles.addItem}
            >
              + Add New Item
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default Items;
