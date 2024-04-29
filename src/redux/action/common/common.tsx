import React from 'react';

export const handleChange =
  (
    type: string,
    e: React.FormEvent<HTMLInputElement> | any,
    name?: string,
    value?: string
  ) =>
    (dispatch: any) => {
      return dispatch({
        type,
        fieldName: name ? name : e.currentTarget.name,
        value: value
          ? value
          : e?.currentTarget?.value
            ? e.currentTarget.value
            : ''
      });
    };

export const clearState = (type: string) => (dispatch: any) =>
  dispatch({ type });
