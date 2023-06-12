const configClsNameInit = (prefixCls) => {
  let output = prefixCls;

  return function(suffixCls) {
    if (suffixCls && typeof suffixCls === 'string') {
      output = `${prefixCls}-${suffixCls}`;
    }
    if (suffixCls && Array.isArray(suffixCls)) {
      const strStore = [];
      suffixCls.forEach((item) => {
        if (!item) {
          return;
        }
        strStore.push(`${prefixCls}-${item}`);
      });
      output = strStore.join(' ');
    }
    return output;
  };
};

export default configClsNameInit;
