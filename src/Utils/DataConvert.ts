export const ObjectAllowItem = (allow: string[], Data: { [key: string]: any }): any => {
  const value = Object.keys(Data)
    .filter((key) => allow.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: Data[key]
      };
    }, []);
  return { value };
};

// 페이로드를 받았고, state에 있는 key값과 같은 action.payload를 전부 넣어준다.
// state에 다른 값이 있을 경우, 그 값까지 날라간다.
export const ObjectOnlyStateItem = (
  Payload: { [key: string]: any },
  Data: { [key: string]: any }
): any => {
  return Object.keys(Data)
    .filter((key) => Object.keys(Payload).includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: Payload[key]
      };
    }, []);
};

//위의 문제 해결버전

export const DataInPayload = (
  Payload: { [key: string]: any },
  Data: { [key: string]: any }
): any => {
  const dd = Object.keys(Data)
    .filter((key) => Object.keys(Payload).includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: Payload[key]
      };
    }, []);
  const otherDatakeys = Object.keys(Data)
    .filter((key) => !Object.keys(dd).includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: Data[key]
      };
    }, []);

  const data = Object.assign(otherDatakeys, dd);
  return data;
};

// filter = ['필요한 배열 값']
// reduce = 배열 key값을,

export const RegionCheck = (Data) => {
  return Data.map((data) => data.activeRegion).reduce((obj, key) => {
    return {
      ...obj,
      [key]: true
    };
  }, []);
};

export const ServiceCheck = (Data) => {
  return Data.map((data) => data.serviceType).reduce((obj, key) => {
    return {
      ...obj,
      [key]: true
    };
  }, []);
};
