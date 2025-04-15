import {Controller, FormProvider} from 'react-hook-form';
import {useCreatePetsForm} from '@features/pets/pet-create-form/hooks/use-create-pet-form';
import {InputUnderlined} from '@shared/ui/inputs/input-underlined';
import {InputUnderlinedLabel} from '@shared/ui/inputs/input-label';
import {FieldsCategory} from '@features/pets/pet-create-form/ui/fields-category';
import {GenderSelectorField} from '@features/pets/pet-create-form/ui/gender-selector-field';
import {VaccineToggleField} from '@features/pets/pet-create-form/ui/vaccine-toggle-field';
import {DatePickerField} from '@widgets/date-picker';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import {ImagePickerArea} from '@widgets/image-picker/ui/image-picker-area';
import {UIButtonWithText} from '@shared/ui/buttons/button-with-text';
import {useSubmitAction} from '@features/pets/pet-create-form/hooks/use-submit-action';
import {ICreatePetFormData} from '@features/pets/pet-create-form/model/types';
import {petCreateNewPet} from '@entities/pet/model/actions';
import {useAppDispatch} from '@shared/store';

export function PetCreateForm() {
  const methods = useCreatePetsForm();
  const {
    control,
    formState: {isValid, isLoading, isSubmitting},
    handleSubmit,
  } = methods;
  const dispatch = useAppDispatch();

  const [showPicker, setShowPicker] = useState(false);
  const formDisabled = isLoading || isSubmitting;
  // const onSubmit = useSubmitAction();
  const onSubmit = async (data: ICreatePetFormData) => {
    console.log(data);

    dispatch(petCreateNewPet(data));
  };

  return (
    <FormProvider {...methods}>
      <ScrollView
        contentContainerStyle={{gap: 24}}
        showsVerticalScrollIndicator={false}>
        <Controller
          control={control}
          render={({field: {value, onChange}}) => (
            <ImagePickerArea
              type={'post'}
              mediaUrl={value || ''}
              setImageUrl={onChange}
              isAreaDisabled={formDisabled}
            />
          )}
          name="imageUrl"
        />
        <FieldsCategory categoryName="Pet description">
          <Controller
            control={control}
            render={({field: {value, onBlur, onChange}}) => (
              <InputUnderlined
                title={<InputUnderlinedLabel>Name*</InputUnderlinedLabel>}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
            name="name"
          />
          <Controller
            control={control}
            render={({field: {value, onBlur, onChange}}) => (
              <InputUnderlined
                title={<InputUnderlinedLabel>Type</InputUnderlinedLabel>}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
            name="type"
          />
          <Controller
            control={control}
            render={({field: {value, onChange}}) => (
              <GenderSelectorField value={value} onChange={onChange} />
            )}
            name="sex"
          />
          <Controller
            control={control}
            render={({field: {value, onChange}}) => (
              <VaccineToggleField value={!!value} onChange={onChange} />
            )}
            name="vaccine"
          />
          <Controller
            control={control}
            render={({field}) => (
              <DatePickerField
                field={field}
                showPicker={showPicker}
                setShowPicker={setShowPicker}
                loadingForm={formDisabled}
              />
            )}
            name="birthDate"
          />
          <Controller
            control={control}
            render={({field: {value, onBlur, onChange}}) => (
              <InputUnderlined
                title={<InputUnderlinedLabel>Pet's breed</InputUnderlinedLabel>}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
            name="breed"
          />
        </FieldsCategory>
        <FieldsCategory categoryName="Pet identification">
          <Controller
            control={control}
            render={({field: {value, onBlur, onChange}}) => (
              <InputUnderlined
                title={<InputUnderlinedLabel>Chip number</InputUnderlinedLabel>}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
            name="chipNumber"
          />
        </FieldsCategory>
        <UIButtonWithText
          isLoading={formDisabled}
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}>
          Create pet card
        </UIButtonWithText>
      </ScrollView>
    </FormProvider>
  );
}
