import { render, screen } from '@testing-library/react-native';

import { ThemedText } from '@/components/themed-text';

describe('ThemedText', () => {
  it('renders its children', async () => {
    await render(<ThemedText>Hello Solve Along</ThemedText>);
    expect(screen.getByText('Hello Solve Along')).toBeTruthy();
  });
});
