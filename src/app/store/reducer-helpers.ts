export function updateObject<T>(object: T, changes: any): T {
  return Object.assign({}, object, changes);
}

export function updateChildObject<T>(
  objects: T[],
  shouldModify: (child: T) => boolean,
  modifyChild: (child: T) => any
): T[] {
  return objects.map(
    child => shouldModify(child) ? updateObject(child, modifyChild(child)) : child
  );
}
