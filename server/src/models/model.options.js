const modelOptions = {
  toJSON: {
    virtuals: true,
    transform: (_, obj) => {
      delete obj.id;
      return obj;
    },
  },
  toObject: {
    virtuals: true,
    transform: (_, obj) => {
      delete obj.id;
      return obj;
    },
  },
  versionKey: false,
  timestamp: true,
};

export default modelOptions;
