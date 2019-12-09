const Calculator = (() => {
  let state = 0;

  return {
    add: function(value) {
      state += value;
      return this;
    },

    subtract: function(value) {
      state -= value;
      return this;
    },

    divide: function(value) {
      state /= value;
      return this;
    },

    multiply: function(value) {
      state *= value;
      return this;
    },

    getResult: function() {
      return state;
    },

    reset: function() {
      state = 0;
      return this;
    },

    setState: function(value) {
      state = value;
    },
    fetchData: function(callback) {
      callback.call(this);
    }
  };
})();
