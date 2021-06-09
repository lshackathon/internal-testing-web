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
                <FormField id="project" label="Project">
                  <Input
                    placeholder="Project"
                    {...register('project', {
                      required: 'Must provide a project',
                    })}
                  />
                </FormField>
                <Button classNames={['mt-5']} label="Add test case" stretch type="submit" />
              </Form>
            </FormProvider>
          </GridCol>
        </GridRow>
      </Grid>
    </>
  );
};

export default AddTestCase;
