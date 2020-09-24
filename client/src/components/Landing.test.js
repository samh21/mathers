import React from 'react';
import Landing from './Landing';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

it('Matches snapshot', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly without crashing', () => {
  render(
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
});

it('displays correctly', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
  getByText('Ice Cream');
  getByText('Coffee');
  getByText('Burgers');
});
