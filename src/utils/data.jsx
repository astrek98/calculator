import { OPERATORS } from './constants';

export const calculatorButtons = [
  {
    label: OPERATORS.CLEAR,
    value: OPERATORS.CLEAR,
  },
  {
    label: OPERATORS.PLUS_MINUS,
    value: OPERATORS.PLUS_MINUS,
  },
  {
    // label: <BackspaceIcon />,
    label: OPERATORS.DELETE,
    value: OPERATORS.DELETE,
  },
  {
    label: OPERATORS.DIVIDE,
    color: 'orange',
    value: OPERATORS.DIVIDE,
  },
  {
    label: '7',
    value: '7',
  },
  {
    label: '8',
    value: '8',
  },
  {
    label: '9',
    value: '9',
  },
  {
    label: OPERATORS.MULTIPLY,
    value: OPERATORS.MULTIPLY,
    color: 'orange',
  },
  {
    label: '4',
    value: '4',
  },
  {
    label: '5',
    value: '5',
  },
  {
    label: '6',
    value: '6',
  },
  {
    label: OPERATORS.SUBTRACT,
    value: OPERATORS.SUBTRACT,
    color: 'orange',
  },
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },

  {
    label: '3',
    value: '3',
  },
  {
    label: OPERATORS.ADD,
    value: OPERATORS.ADD,
    color: 'orange',
  },
  {
    label: OPERATORS.DECIMAL,
    value: OPERATORS.DECIMAL,
  },
  {
    label: '0',
    value: '0',
  },
  {
    label: OPERATORS.EQUALS,
    value: OPERATORS.EQUALS,
    color: 'orange',
    colSpan: 2,
  },
];
