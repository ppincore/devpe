export const rules = {
  required: (message = 'Field is required') => ({
    required: true,
    message,
  }),

  validEmail: (message = 'Email incorrect') => ({
    validator(_: unknown, value: string) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!value || emailRegex.test(value)) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),

  validPassword: (message = 'Password incorrect') => ({
    validator(_: unknown, value: string) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
      if (!value || passwordRegex.test(value)) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};
