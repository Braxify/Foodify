export const isLength = (value: any, { min = 6, max }: any): any => {
  if (typeof value !== "string") {
    return false;
  }
  const { length } = value;

  if (typeof min !== "number" || length < min) {
    return false;
  }

  if (min > max) {
    throw Error("Max length must be greater than min");
  }

  if (max) {
    if (typeof max !== "number" || length > max) {
      return false;
    }
  }

  return true;
};

export const isValidResult = (result: any) => {
  return result.every((item: any) => item[Object.keys(item)[0]]);
};

// Get Keys from Validator Configuration
export const getKeys = (fields: any) => {
  const keys: any = {};
  Object.keys(fields).forEach((item: any) => {
    keys[item] = "";
  });
  return keys;
};

export const validate = (state: any, fields: any): any => {
  const result = Object.keys(fields).map((field) => {
    const current = fields[field];

    // Default valid value - true
    const valid = { [field]: true };

    // Check availability isLength validate
    if (current.isLength) {
      return {
        [field]: isLength(state[field], { ...current.isLength }),
      };
    }

    // Check isEqual
    if (current.equal) {
      const isEqual = state[field] === state[current.equal];
      if (!isEqual) {
        return {
          [field]: false,
        };
      }
    }

    // Check isEmpty
    if (!state[field].length) {
      return {
        [field]: false,
      };
    }
    return valid;
  });

  // Return array of objects { [field]: valid ? true : false }
  return isValidResult(result);
};
