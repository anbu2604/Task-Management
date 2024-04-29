import { FORM_CLEAR, FORM_HANDLE_CHANGE } from '../../types';

const initialState = {
  state: {
    id: '',
    title: '',
    description: '',
    dueDate: '',
    priority: ''
  }
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case FORM_HANDLE_CHANGE:
      return {
        ...state,
        state: {
          ...state.state,
          [action.fieldName]: action.value
        }
      };
    case FORM_CLEAR:
      return { ...initialState };
    default:
      return state;
  }
}
