import { render } from '@testing-library/react';

import CommonWebUi from './common-web-ui';

describe('CommonWebUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonWebUi />);
    expect(baseElement).toBeTruthy();
  });
});
