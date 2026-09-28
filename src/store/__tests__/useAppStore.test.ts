import { useAppStore } from '@/store/useAppStore';

describe('useAppStore', () => {
  it('defaults to not ready', () => {
    expect(useAppStore.getState().isReady).toBe(false);
  });

  it('updates ready state', () => {
    useAppStore.getState().setReady(true);
    expect(useAppStore.getState().isReady).toBe(true);
  });
});
