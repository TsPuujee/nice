<template>
  <div class="hello">
    <gmap-map
      :center="center"
      :zoom="14"
      :options="options"
      :draggable="false"
      style="width:100vw;  height: 70vh;"
    >
      <gmap-marker
        :position="points"
        :title="points.lat + ' '+ points.lng"
        :draggable="true"
        @position_changed="updatePlaceM1($event)"
      ></gmap-marker>
    </gmap-map>
    <h4>{{result.district}} {{result.horoo}}</h4>
  </div>
</template>

<script>
import { geoLoc } from "./helper.js";
export default {
  name: "HelloWorld",
  created() {
    this.calc();
  },
  data() {
    return {
      result: "",
      options: {
        scrollwheel: true,
        mapTypeControl: true,
        streetViewControl: false,
        minZoom: 4,
        maxZoom: 20,
        gestureHandling: "greedy"
      },
      points: { lat: 47.9174, lng: 106.9137 },
      center: {
        lat: 47.9174,
        lng: 106.9137
      }
    };
  },
  methods: {
    updatePlaceM1(path) {
      this.points.lng = path.lng();
      this.points.lat = path.lat();
      this.calc();
    },
    calc() {
      geoLoc(this.points.lat, this.points.lng).then(data => {
        this.result = data;
      });
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
