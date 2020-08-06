const validators = {
  name: (value) => {
    if (value.length < 1 || value.length > 30) {
      return {
        passed: false,
        message: "name should be between 1 and 30 characters",
      };
    }

    return {
      passed: true,
    };
  },

  description: (value) => {
    if (value.length < 1 || value.length > 200) {
      return {
        passed: false,
        message: "description should be between 1 and 200 characters",
      };
    }

    return {
      passed: true,
    };
  },

  imageUrl: (value) => {
    // TODO: find a good regex for this
    if (value.length < 1 || value.length > 200) {
      return {
        passed: false,
        message: "url should be maximum of 200 characters",
      };
    }

    return {
      passed: true,
    };
  },
};

export { validators };
