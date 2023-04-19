const isInValidWindow = () => typeof window === 'undefined';

export const get = (key: string) => {
  if (isInValidWindow()) {
    return;
  }

  const data = sessionStorage.getItem(key);
  if (!data) {
    return;
  }

  try {
    const parsed = JSON.parse(data);
    return parsed;
  } catch (e) {
    //
  }
  return data;
};

export const set = <T>(key: string, value: T) => {
  if (isInValidWindow()) {
    return;
  }

  if (!key) {
    return;
  }

  const data = JSON.stringify(value);

  sessionStorage.setItem(key, data);
};

