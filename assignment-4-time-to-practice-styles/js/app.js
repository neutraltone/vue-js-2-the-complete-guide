new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    arrayClasses: {
      boxed: true,
      red: true
    },
    backgroundColor: 'red',
    backgroundColor2: 'blue',
    backgroundColor3: 'green',
    fadeOut: false,
    progress: 0
  },
  methods: {
    startEffect: function () {
      const vm = this;
      setInterval(function () {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },
    startProgress: function () {
      const vm = this;
      const progressWidth = document.querySelector('.progress').offsetWidth;
      const progressIncrements = progressWidth / 5;
      setInterval(function () {
        if (vm.progress < progressWidth ) {
          vm.progress += progressIncrements;
          console.log(((vm.progress / progressWidth)*100) + '%');
        }
      }, 2000)
    }
  }
});
