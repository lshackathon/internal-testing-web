import React from 'react';
import { Button, Form, FormField, Grid, GridCol, GridRow, Input } from '@legalshield/adonis-ux-framework';
import { useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  lastName: string;
};

export const EditForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => alert(`Saved data: ${JSON.stringify(data)}`);

  return (
    <Grid>
      <GridRow variant="half">
        <GridCol>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormField
              id="name"
              label={string_table.FORM_NAME}
              validationHint={errors.name ? 'This field is required' : undefined}
              status={errors.name ? 'invalid' : 'valid'}
              required
            >
              <Input {...register('name', { required: true })} />
            </FormField>
            <FormField
              id="lastName"
              label={string_table.FORM_LASTNAME}
              validationHint={errors.lastName ? 'This field is required' : undefined}
              status={errors.lastName ? 'invalid' : 'valid'}
              required
            >
              <Input {...register('lastName', { required: true })} />
            </FormField>
            <Button label={string_table.FORM_SUBMIT} type="submit" classNames={['mt-3']} />
          </Form>
        </GridCol>
      </GridRow>
    </Grid>
  );
};
