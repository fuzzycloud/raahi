import { render } from '@testing-library/react';

import HotelList from './hotel-list';

describe('HotelList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HotelList />);
    expect(baseElement).toBeTruthy();
  });
});
