import React, { useState } from 'react';
import { Button, Grid, GridCol, GridRow } from '@legalshield/adonis-ux-framework';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Grid>
      <GridRow variant="plain">
        <GridCol>
          <h2>{string_table.COUNTER_HEADER}</h2>
        </GridCol>
        <GridCol>
          <p aria-live="polite">
            {string_table.COUNTER_CONTENT}: <strong>{count}</strong>
          </p>
        </GridCol>
        <GridCol>
          <Button
            classNames={[]}
            iconSize="medium-small"
            label={string_table.COUNTER_ADD}
            textSize="body"
            type="button"
            variant="standard"
            iconLeft="alert_success"
            onClick={() => {
              setCount(count + 1);
            }}
          />
        </GridCol>
      </GridRow>
    </Grid>
  );
};

export default Counter;
