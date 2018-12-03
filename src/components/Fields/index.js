import TextAreaComponent from './TextArea';
import SelectComponent from './Select';
import InputComponent from './Input';

import FieldWrapper from './FieldWrapper';

export const TextArea = FieldWrapper(TextAreaComponent);
export const Input = FieldWrapper(InputComponent);
export const Select = FieldWrapper(SelectComponent);

