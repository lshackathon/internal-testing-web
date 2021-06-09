import React from 'react';
import { Grid, GridCol, GridRow } from '@legalshield/adonis-ux-framework';

const JSDebug: React.FC = () => {
  let jwt_string = 'null';
  if (jwt_payload) {
    jwt_string = JSON.stringify(jwt_payload, null, 2);
  }
  return (
    <Grid>
      <GridRow variant="plain">
        <GridCol>
          <h1>Javascript vars</h1>
          <div>
            <h2>brandName</h2>
            {brandName}
          </div>
          <div>
            <h2>market</h2>
            {market}
          </div>
          <div>
            <h2>jwt_payload</h2>
            <pre>{jwt_string}</pre>
          </div>
          <div>
            <h2>string_table</h2>
            <pre>{JSON.stringify(string_table, null, 2)}</pre>
          </div>
          <div>Can 
            <h2>string_table_market</h2>
            <pre>{JSON.stringify(string_table_market, null, 2)}</pre>
          </div>
        </GridCol>
      </GridRow>
    </Grid>
  );
};

export default JSDebug;
