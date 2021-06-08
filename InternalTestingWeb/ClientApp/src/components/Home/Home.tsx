import React from 'react';
import { Grid, GridCol, GridRow } from '@legalshield/adonis-ux-framework';

const Home: React.FC = () => {
  return (
    <>
      <Grid>
        <GridRow variant="plain">
          <GridCol>
            <h2>{string_table.HOME_HEADER}</h2>
          </GridCol>
          <GridCol>
            <p>{string_table.HOME_WELCOME}</p>
          </GridCol>
          <GridCol>
            <p>{string_table.HOME_TEXT1}</p>
          </GridCol>
          <GridCol>
            <p>{string_table.HOME_TEXT2}</p>
          </GridCol>
          <GridCol>
            <p>{string_table.HOME_TEXT3}</p>
          </GridCol>
          <GridCol>
            <p>{string_table.HOME_TEXT4}</p>
          </GridCol>
        </GridRow>
      </Grid>
    </>
  );
};

export default Home;
