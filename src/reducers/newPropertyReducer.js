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
const STEP_TWO = "STEP_TWO"
const STEP_THREE = "STEP_THREE"
const STEP_FOUR = "STEP_FOUR"
const STEP_FIVE = "STEP_FIVE"

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case STEP_ONE:
      return Object.assign({}, state, { propertyName: action.payload.propertyName, propertyDescription: action.payload.propertyDescription })
    case STEP_TWO:
      return Object.assign({}, state, { propertyAddress: action.payload.propertyAddress, propertyCity: action.payload.propertyCity, propertyState: action.payload.propertyState, propertyZip: action.payload.propertyZip })
    case STEP_THREE:
      return Object.assign({}, state, {propertyImage: action.payload.propertyImage})
    case STEP_FOUR:
      return Object.assign({}, state, {loanAmount: action.payload.loanAmount, monthlyMortgage: action.payload.monthlyMortgage})
    case STEP_FIVE:
      return Object.assign({}, state, {desiredRent: action.payload.desiredRent})
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
export function stepTwo(propertyAddress, propertyCity, propertyState, propertyZip) {
  return {
    type: STEP_TWO,
    payload: {
      propertyAddress,
      propertyCity,
      propertyState,
      propertyZip
    }
  }
}

export function stepThree(propertyImage) {
  return {
    type: STEP_THREE,
    payload: {
      propertyImage
    }
  }
}

export function stepFour(loanAmount, monthlyMortgage) {
  return {
    type: STEP_FOUR,
    payload: {
      loanAmount,
      monthlyMortgage
    }
  }
}

export function stepFive(desiredRent) {
  return {
    type: STEP_FIVE,
    payload: {
      desiredRent
    }
  }
}