import React, { useState, useEffect, ReactElement } from 'react';
import { Alert, Table, TableRow, TableCell, Spinner, Grid, GridCol, GridRow } from '@legalshield/adonis-ux-framework';
import { Forecast } from '../../models/forecast.interface';

const FetchData: React.FC = () => {
  const [state, setState] = useState({
    curtainOpen: false,
    errorText: '',
    forecasts: [] as Forecast[],
    loading: true,
  });

  const loadData = () => {
    setState({
      curtainOpen: false,
      errorText: 'null',
      forecasts: [],
      loading: true,
    });

    if (Math.random() < 0.5) {
      setTimeout(() => {
        setState({
          curtainOpen: true,
          errorText: string_table.WEATHER_ERROR,
          forecasts: [],
          loading: false,
        });
      }, 2000);
    } else {
      fetch('/weatherforecast')
        .then((response) => response.json())
        .then((res) => {
          setState({
            curtainOpen: false,
            errorText: '',
            forecasts: res,
            loading: false,
          });
        })
        .catch(() =>
          setState({
            curtainOpen: true,
            errorText: string_table.WEATHER_ERROR,
            forecasts: [],
            loading: false,
          }),
        );
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  let content: ReactElement;
  if (state.loading) {
    content = <Spinner />;
  } else if (!state.forecasts) {
    content = <h2>No data available</h2>;
  } else {
    content = (
      <Table>
        <TableRow columns="25% 25% 25% 25%" isHeader>
          <TableCell>{string_table.WEATHER_DATE}</TableCell>
          <TableCell>{string_table.WEATHER_TEMPC}</TableCell>
          <TableCell>{string_table.WEATHER_TEMPF}</TableCell>
          <TableCell>{string_table.WEATHER_SUMMARY}</TableCell>
        </TableRow>
        {state.forecasts.map((forecast) => (
          <TableRow key={forecast.date} columns="25% 25% 25% 25%">
            <TableCell>{forecast.date}</TableCell>
            <TableCell>{forecast.temperatureC}</TableCell>
            <TableCell>{forecast.temperatureF}</TableCell>
            <TableCell>{forecast.summary}</TableCell>
          </TableRow>
        ))}
      </Table>
    );
  }
  const onCurtainCloseComplete = () => {
    loadData();
  };

  return (
    <>
      {state.errorText && (
        <Alert
          alertAppearance="error"
          alertType="dismissible"
          classNames={[]}
          content={state.errorText}
          onClick={onCurtainCloseComplete}
        />
      )}
      <Grid>
        <GridRow variant="plain">
          <GridCol>
            <h1>{string_table.WEATHER_HEADER}</h1>
            <p>{string_table.WEATHER_DESCRIPTION}</p>
            {content}
          </GridCol>
        </GridRow>
      </Grid>
    </>
  );
};

export default FetchData;
