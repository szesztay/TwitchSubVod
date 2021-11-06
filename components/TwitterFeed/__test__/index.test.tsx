import { render } from '@testing-library/react';
import TwitterFeed from '@/components/TwitterFeed';

describe('<TwitterFeed />', () => {
  it('should render TwitterFeed correctly', () => {
    const wrapper = render(<TwitterFeed />);
    expect(wrapper).toMatchSnapshot();
  });
});
