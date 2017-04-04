import { createAction } from './create-action';

describe('create-action', () => {
  it('should return a standard action', () => {
    const type = 'FAKE_ACTION';
    const payload = { abc: 123 };
    expect(createAction(type, payload))
      .toEqual({ type: 'FAKE_ACTION', payload: { abc: 123 } });
  });

  it('should return an undefined payload when it is not provided', () => {
    const type = 'FAKE_ACTION';
    expect(createAction(type))
      .toEqual({ type: 'FAKE_ACTION', payload: undefined });
  });
});
