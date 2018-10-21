// module
import { Language } from './language.model';

export const LANGUAGE = 'i18n--language';

export interface State {
  selectedItem: Language;
  isProcessing?: boolean;
  error?: any;
}

export const initialState: State = {
  selectedItem: undefined,
  isProcessing: false,
  error: undefined
};
