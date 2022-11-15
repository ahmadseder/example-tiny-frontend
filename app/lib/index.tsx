import React, { useEffect, useState } from "react";

import { ExampleTinyFrontendProps } from "../../contract/src/props";
import { Button } from "./button";
import styles from "./index.module.css";

const ExampleTinyFrontend: React.FC<ExampleTinyFrontendProps> = ({
  name,
  onCounterChange,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => onCounterChange?.(value), [value, onCounterChange]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello {name}! 🎉</h1>

      <div className={styles.descriptionContainer}>
        Rayyan inner app 1 
        Test
      </div>

      <Button onClick={() => setValue((value) => value + 1)}>
        Rayyam Action from outside
      </Button>
    </div>
  );
};

export default ExampleTinyFrontend;
