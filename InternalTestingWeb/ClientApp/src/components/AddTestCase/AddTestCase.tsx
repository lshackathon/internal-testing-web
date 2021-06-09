import React from 'react';
import {
  Grid,
  GridCol,
  GridRow,
  Button,
  Heading,
  FormField,
  Form,
  Input,
  Dropdown,
  Radio,
  LinkContent,
  Select,
  TextArea,
} from '@legalshield/adonis-ux-framework';
import { FormProvider, useForm } from 'react-hook-form';
import { saveTestCase } from '../../services/utils';

const AddTestCase: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    console.log(e);
    e.status = 'not run';
    saveTestCase(e);
    window.location.href = '/';
  };

  const handleCancelButtonClick = () => {
    window.location.href = '/';
  };

  return (
    <>
      <Grid>
        <GridRow variant="plain">
          <GridCol>
            <Heading as="T26" classNames={[]} text="Add test case" />
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol>
            <FormProvider {...useForm({ mode: 'onTouched' })}>
              <Form classNames={[]} onSubmit={handleSubmit(onSubmit)}>
                <FormField id="name" label="Name">
                  <Input
                    placeholder="Test case name"
                    {...register('name', {
                      required: 'Must provide a name',
                    })}
                  />
                </FormField>
                <FormField classNames={[]} id="environment" label="Environment">
                  <Radio rightLabel="Dev/Sandbox" {...register('environment')} value="dev" />
                  <Radio rightLabel="UAT" {...register('environment')} value="uat" />
                  <Radio rightLabel="Production" {...register('environment')} value="production" />
                </FormField>
                <FormField classNames={[]} id="base-select" label="Project">
                  <Select
                    {...register('project', {
                      required: 'Must provide a project',
                    })}
                    options={[
                      {
                        label: 'Login',
                        value: 'login',
                      },
                      {
                        label: 'Wals',
                        value: 'wals',
                      },
                      {
                        label: 'D2C',
                        value: 'd2c',
                      },
                    ]}
                  />
                </FormField>
                <FormField classNames={[]} id="base-text-area" label="Test steps">
                  <TextArea 
                    placeholder="1. Log in user..."
                    rows={5}
                    {...register('testSteps', {
                      required: 'Must provide test steps',
                    })}/>
                </FormField>
                <Button classNames={['mt-5']} label="Add test case" stretch type="submit" />
              </Form>
            </FormProvider>
          </GridCol>
        </GridRow>
        <GridRow variant="plain">
          <GridCol>
            <Button
              classNames={[]}
              label="Cancel adding test case"
              textSize="body"
              type="button"
              variant="destructive"
              onClick={handleCancelButtonClick}
              stretch
            />
          </GridCol>
        </GridRow>
      </Grid>
    </>
  );
};

export default AddTestCase;
