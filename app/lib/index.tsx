import React, { useEffect, useState } from "react";

import { ExampleTinyFrontendProps } from "../../contract/src/props";
import { Button } from "./button";
import styles from "./index.module.css";

const ExampleTinyFrontend: React.FC<ExampleTinyFrontendProps> = ({
  name,
  onCounterChange,
  client
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => onCounterChange?.(value), [value, onCounterChange]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello Inner App! 🎉</h1>

      <div className={styles.descriptionContainer}>
        Rayyan inner app 1 
        Test
      </div>

      <Button onClick={() => {
        if(client){
          client.publish("HELLO_WORLD",{
            value:value
          })
          try{

            setValue((value) => value + 1)
          }catch(e){

          }
        }
      }}>
        Rayyam Action from outside
      </Button>
    </div>
  );
};

export default ExampleTinyFrontend;
