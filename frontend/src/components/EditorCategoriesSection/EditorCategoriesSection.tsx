import React from "react";
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { Select, MultiValue } from 'chakra-react-select';
import { UseFormSetValue, UseFormClearErrors, FormState } from 'react-hook-form';
import { EditFormInput } from '../EditModal/EditModal';

interface EditorCategoriesSectionProp {
  formState: FormState<EditFormInput>;
  clearErrors: UseFormClearErrors<EditFormInput>;
  setValue: UseFormSetValue<EditFormInput>;
}

const EditorCategoriesSection = (
  { formState, clearErrors, setValue }: EditorCategoriesSectionProp
) => {
  const setCategoryValue = (selectedCategories: MultiValue<{
    label: string;
    value: string;
  }>) => {
    clearErrors("category");
    setValue("category", selectedCategories.map(category => category.value));
  }

  return (
    <FormControl isRequired>
      <FormLabel htmlFor='tag' fontSize="sm">카테고리</FormLabel>
      <Select
        isInvalid={(formState.errors.category || false) as boolean}
        onChange={setCategoryValue}
        placeholder='카테고리를 선택해주세요.'
        isMulti
        size="sm"
        tagVariant="solid"
        options={[
          {
            label: "backend",
            value: "backend",
          },
          {
            label: "frontend",
            value: "frontend",
          },
        ]}
      />
    </FormControl>
  )
}

export default EditorCategoriesSection;