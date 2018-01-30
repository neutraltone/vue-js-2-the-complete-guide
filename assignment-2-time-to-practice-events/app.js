new Vue({
  el: '#exercise',
  data: {
    value: '',
    alertMsg: 'This is an alert!'
  },
  methods: {
    alert: function () {
      alert(this.alertMsg);
    },
    updateValue: function (event) {
      this.value = event.target.value
    },
  }
});
