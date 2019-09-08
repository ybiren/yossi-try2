function deco(
    target,
    propertyKey,
    descriptor
  ) {
    const startTime = new Date().getTime();
    console.log(`method "${propertyKey}" decorator: begin`);
    if (descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
    }
    const originalMethod = descriptor.value;
    let i = 0;
  
    descriptor.value = function (...args) {
      const id = `${propertyKey}_${i++}`;
      console.log(`${id}: begin`);
      const result = originalMethod.apply(this, args);
      console.log(`${id}: end`);
      return result;
    };
    const endTime = new Date().getTime()
    console.log(`method "${propertyKey}" decorator: end , milisecs:${endTime-startTime}`);
    return descriptor;
  }
  
  