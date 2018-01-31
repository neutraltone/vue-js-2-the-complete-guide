new Vue({
  el: '#exercise',
  data: {
    value: 0
  },
  watch: {
    value: function (value) {
      const vm = this;
      setTimeout(function () {
        return vm.value = 0;
      }, 5000)
    }
  },
  computed: {
    result: function () {
      return this.value != 37 ? 'Not there yet' : 'Done';
    }
  }
});
