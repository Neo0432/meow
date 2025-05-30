import {Controller, useFormContext} from 'react-hook-form';
import {ImagePickerArea} from '@widgets/image-picker/ui/image-picker-area';
import {FieldsCategory} from '@widgets/fields-category';
import {InputUnderlined} from '@shared/ui/inputs/input-underlined';
import {InputUnderlinedLabel} from '@shared/ui/inputs/input-label';
import {GenderSelectorField} from '@widgets/gender-selector-field';
import {VaccineToggleField} from '@features/pets/pet-create-form/ui/vaccine-toggle-field';
import {DatePickerField} from '@widgets/date-picker';
import {UIButtonWithText} from '@shared/ui/buttons/button-with-text';
import {ScrollView} from 'react-native';
import {useState} from 'react';
import {UIButtonWithTextIcon} from '@shared/ui/buttons/button-with-text-icon';
import {IPetUpsertForm} from '@widgets/pet-forms/types';

export function PetUpsertForm({onSubmit, formType}: IPetUpsertForm) {
  const {
    control,
    formState: {isValid, isLoading, isSubmitting},
    handleSubmit,
  } = useFormContext();

  const formDisabled = isLoading || isSubmitting;
  const [showPicker, setShowPicker] = useState<boolean>(false);

  return (
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
      {formType === 'create' ? (
        <UIButtonWithText
          isLoading={formDisabled}
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}>
          Create pet card
        </UIButtonWithText>
      ) : (
        <UIButtonWithTextIcon
          icon="delete"
          iconPosition="left"
          isLoading={formDisabled}
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}>
          Delete pet card
        </UIButtonWithTextIcon>
      )}
    </ScrollView>
  );
}
