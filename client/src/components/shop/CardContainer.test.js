import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import axiosMock from 'axios';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import CardContainer from './CardContainer';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('Renders correctly without crashing', async () => {
  await act(async () => {
    const { debug } = render(<CardContainer />);
  });
});

jest.mock('./Card', () => <div>Mock Card component</div>);

it('fetches and displays data', async () => {
  axiosMock.get.mockResolvedValueOnce([{ dbRequest: { greeting: 'test' } }]);
  await act(async () => {
    const { getByTestId } = render(<CardContainer />);
    expect(getByTestId('myTest').textContent).toBe('');
  });
});
