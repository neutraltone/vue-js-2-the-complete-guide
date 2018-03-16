<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <app-header></app-header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
              <app-server-list></app-server-list>
            </div>
            <div class="col-xs-12 col-sm-6">
              <app-server-details></app-server-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
              <app-footer></app-footer>
            </div>
        </div>
    </div>
</template>

<script>
import header from './Header.vue';
import footer from './Footer.vue';
import serverList from './ServerList.vue';
import serverDetails from './ServerDetails.vue';

export default {
  components: {
    'app-header': header,
    'app-footer': footer,
    'app-server-list': serverList,
    'app-server-details': serverDetails,
  }
}
</script>

<style>

</style>
