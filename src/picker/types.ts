/* eslint-disable no-use-before-define */
import type { ComponentPublicInstance } from 'vue';
import type { PickerProps } from './Picker';

export type PickerToolbarPosition = 'top' | 'bottom';

export type PickerFieldNames = {
  text?: string;
  values?: string;
  children?: string;
};

export type PickerObjectOption = {
  text?: string | number;
  disabled?: boolean;
  // for custom filed names
  [key: string]: any;
};

export type PickerOption = string | number | PickerObjectOption;

export type PickerObjectColumn = {
  values?: PickerOption[];
  children?: PickerColumn;
  className?: unknown;
  defaultIndex?: number;
  // for custom filed names
  [key: string]: any;
};

export type PickerColumn = PickerOption[] | PickerObjectColumn;

export type PickerExpose = {
  confirm: () => void;
  getValues: () => PickerOption[];
  setValues: (values: string[]) => void;
  getIndexes: () => number[];
  setIndexes: (indexes: number[]) => void;
  getColumnIndex: (index: number) => number;
  setColumnIndex: (columnIndex: number, optionIndex: number) => void;
  getColumnValue: (index: number) => PickerOption;
  setColumnValue: (index: number, value: string) => void;
  getColumnValues: (index: number) => PickerOption[];
  setColumnValues: (index: number, options: PickerOption[]) => void;
};

export type PickerInstance = ComponentPublicInstance<PickerProps, PickerExpose>;
