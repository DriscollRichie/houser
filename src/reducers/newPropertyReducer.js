const initalState = {
  propertyName: '',
  propertyDescription: '',
  propertyAddress: '',
  propertyCity: '',
  propertyState: '',
  propertyZip: '',
  propertyImage: '',
  loanAmount: '',
  monthlyMortgage: '',
  desiredRent: '',
}

const STEP_ONE = "STEP_ONE"

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case STEP_ONE:
      return Object.assign({}, state, {propertyName: action.payload.propertyName, propertyDescription: action.payload.propertyDescription})
    default:
      return state
  }
}

export function stepOne(propertyName, propertyDescription) {
  return {
    type: STEP_ONE,
    payload: {
      propertyName,
      propertyDescription
    }
  }
}