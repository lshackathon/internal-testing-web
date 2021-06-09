import React, { useState, useEffect } from 'react';
import { Grid, GridCol, GridRow, Button, Heading, Table, TableCell, TableRow, Accordion } from '@legalshield/adonis-ux-framework';
import { getTestCases } from '../../services/utils';

const TestCaseList: React.FC = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const testCases = getTestCases();
    setItems(testCases);
  }, []);

  const handleAddButtonClick = () => {
    window.location.href = '/add';
  };

  const handleShowStepsButton = (e) => {
    console.log(e);
  };

  return (
    <>
      <Grid>
        <GridRow variant="plain">
          <GridCol>
            <Heading as="T26" classNames={[]} text="Test Cases" />
          </GridCol>
          <GridCol>
            <Button
              classNames={[]}
              iconLeft="action_add"
              iconSize="medium-small"
              label="Add Test Case"
              textSize="body"
              type="button"
              variant="primary"
              onClick={handleAddButtonClick}
            />
          </GridCol>
          <GridCol>
            {/* table of test cases */}
            <Table classNames={[]} noBorder>
              <TableRow isHeader>
                <TableCell>Test case name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Test steps</TableCell>
                <TableCell>Project</TableCell>
                <TableCell>Environment</TableCell>
              </TableRow>
              {items.map((item, index) => {
                return (
                  <>
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.status}</TableCell>
                      <TableCell>
                        <Accordion childrenBackground="gray" classNames={[]} title="Test steps">
                          {item.testSteps}
                        </Accordion>
                      </TableCell>
                      <TableCell>{item.project}</TableCell>
                      <TableCell>{item.environment}</TableCell>
                    </TableRow>
                  </>
                );
              })}
            </Table>
          </GridCol>
        </GridRow>
      </Grid>
    </>
  );
};

export default TestCaseList;
