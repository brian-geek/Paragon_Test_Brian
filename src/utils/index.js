export const handleFunctionStrings = string => {
  try {
    const parsedFunc = new Function('return ' + string)();
    return {
      result: parsedFunc(),
      resultCode: 1,
    };
  } catch {
    return {
      result: 'Your code is invalid.',
      resultCode: 2,
    };
  }
};

export const getMinutes = (date1, date2) => {
  const diffMs = date1 - date2;
  const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
  return diffMins;
};
