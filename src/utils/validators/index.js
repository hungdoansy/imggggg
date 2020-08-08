const categoryValidator = {
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

const photoValidator = {
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

const userInfoValidator = {
  name: (value) => {
    if (value.length < 1 || value.length > 30) {
      return {
        passed: false,
        message: "name should be maximum of 30 characters",
      };
    }

    return {
      passed: true,
    };
  },
  email: (value) => {
    if (value === null || value === "") {
      return {
        passed: false,
        message: "email cannot be empty",
      };
    }
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(value)) {
      return {
        passed: false,
        message: "email should have proper format",
      };
    }

    return {
      passed: true,
    };
  },

  password: (value) => {
    if (value.length < 6) {
      return {
        passed: false,
        message: "password should have at least 6 characters",
      };
    }

    return {
      passed: true,
    };
  },
};

export { categoryValidator, photoValidator, userInfoValidator };
