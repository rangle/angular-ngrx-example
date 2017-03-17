import {
  updateObject,
  updateChildObject
} from './reducer-helpers';

describe('reducer helpers', () => {
  it('should update an object', () => {
    const objectToChange = {
      id: 1,
      value: 123
    };
    const newInformation = {
      value: 234,
      info: 'abc'
    };
    expect(updateObject(objectToChange, newInformation))
      .toEqual({
        id: 1,
        value: 234,
        info: 'abc'
      });
  });

  it('should update child objects', () => {

    const children = [
      { a: 1, isTarget: true },
      { a: 2, isTarget: false },
      { a: 9, isTarget: true }
    ];
    const shouldModify = child => {
      return child.isTarget;
    };
    const modification = child => {
      return { a: 10, isTarget: false };
    };

    const result = updateChildObject(children, shouldModify, modification);

    expect(result).toEqual([
      { a: 10, isTarget: false },
      { a: 2, isTarget: false },
      { a: 10, isTarget: false }
    ]);

  });
});
