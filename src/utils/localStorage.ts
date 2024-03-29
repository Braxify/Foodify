export const getItemFromStorage = (key: string, defaultValue = "") => {
  let value = localStorage.getItem(key);
  if (value === null) {
    localStorage.setItem(key, defaultValue);
    return defaultValue;
  }
  return value;
};

export const getArrayFromStorage = (key: string, defaultValue = []) => {
  let value = localStorage.getItem(key);
  if (value === null) {
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  }
  return JSON.parse(value);
};

export const saveItemToStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export const saveArrayToStorage = <T>(key: string, value: T[]) => {
  saveItemToStorage(key, JSON.stringify(value));
};
