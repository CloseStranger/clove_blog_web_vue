const timeFunc = () => {
  const timeUnitTranslate = (timeStamp) => {
    return {
      ms: timeStamp,
      s: Math.trunc(timeStamp / 10 ** 3),
      min: Math.trunc(timeStamp / 10 ** 3 / 60),
      hour: Math.trunc(timeStamp / 10 ** 3 / 3600),
      day: Math.trunc(timeStamp / 10 ** 3 / 3600 / 24),
    };
  };
  const localTimeToFormattedTime = (timeInfo) => {
    return new Date(timeInfo).toLocaleDateString().replaceAll("/", "-");
  };

  const timeInterValCalculate = (timeInfo) => {
    const now = new Date().getTime();
    const past = new Date(timeInfo).getTime();
    const res = timeUnitTranslate(now - past);
    if (res.day) {
      return "更新于" + res.day + "天前";
    }
    if (res.hour) {
      return "更新于" + res.hour + "小时前";
    }
    if (res.min) {
      return "更新于" + res.min + "分钟前";
    }
    if (res.s) {
      return "更新于" + res.s + "秒前";
    }
  };

  return { localTimeToFormattedTime, timeInterValCalculate, timeUnitTranslate };
};

export default timeFunc;
