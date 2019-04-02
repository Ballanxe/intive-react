const default_state = {

    player_name: null,
    position: null,
    number:null,
    error: {
      string_error:null,
      number_error:null,
      long_age_error:null
    },
    formInvalid: true

  }

export const PlayersSearch = (state = default_state, action) => {
  switch (action.type) {
    case 'STRING_ERROR':
      return {
        ...state,
        error:{
          ...state.error,
          string_error:"Just letters"
        },
        formInvalid: true
      }
    case 'NUMBER_ERROR':
      return {
        ...state,
        error:{
          ...state.error,
          number_error:"Just numbers"
        },
        formInvalid:true
      }
    case 'LONG_NUMBER_ERROR':
      return {
        ...state,
        error:{
          ...state.error,
          number_error:"Just numbers"
        },
        formInvalid:true
      }

    case 'UPDATE_FIELD_AUTH':
      return { ...state, [action.key]: action.value };
  }

  return state;
};