new Vue({
  el: '#exercise',
  data: {
    value: '',
    alertMsg: 'This is an alert!'
  },
  methods: {
    alert: function () {
      alert(this.alertMsg);
    }
  }
});
