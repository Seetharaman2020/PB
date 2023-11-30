<template>
  <div class="example">
    <select @change="updateChart">
      <option value="" disabled selected>Please choose staff type</option>
      <option v-for="type in menu" :key="type" :value="type">
        {{ type }}
      </option>
    </select>
    <apexcharts
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
  </div>
</template>

<script>
// Accessing charts and json data inside the script
import VueApexCharts from "vue3-apexcharts";
import pupils from "../data/pupils";
import staff from "../data/staff";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Chart",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          height: 300,
          type: "line",
        },
        stroke: {
          width: [0, 3],
        },
        title: {
          text: "PeopleBench Challenge",
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1],
        },
        labels: [],
        xaxis: {
          type: "datetime",
        },
        yaxis: [
          {
            title: {
              text: "Staff FTE",
            },
          },
          {
            opposite: true,
            title: {
              text: "Pupils per staff member",
            },
          },
        ],
      },
      series: [
        {
          name: "Principals",
          type: "column",
          data: [],
        },
        {
          name: "Pupils per principals",
          type: "line",
          data: [],
        },
      ],
      menu: [
        "Principals",
        "Teachers",
        "Instructional Aides",
        "Librarians",
        "Guidance Counselors",
        "Support Staff",
      ],
    };
  },
  mounted() {
    // by default, let's populate the chart with principals data
    if (this.series[0].data.length == 0) {
      for (var i = 0; i < pupils.length; i++) {
        this.chartOptions.labels.push(pupils[i].schoolYear.toString());
        this.series[0].data.push(staff[i].principals.toFixed(1));
        this.series[1].data.push(pupils[i].principals.toFixed(2));
      }
    }
  },
  methods: {
    updateChart(e) {
      // by default each time the menu is updated, we empty the array so that there is no ovelap of data
      this.series[0].data = [];
      this.series[1].data = [];

      // updating the name of the menu items corresponding to the menu selected
      this.series[0].name = e.target.value.toString();
      this.series[1].name = "Pupils per " + e.target.value.toString();

      // setting the label of the menu items corresponding to the json data
      for (var i = 0; i < pupils.length; i++) {
        this.chartOptions.labels.push(pupils[i].schoolYear.toString());
      }

      // updating the chart options based on the menu selected
      for (i = 0; i < pupils.length; i++) {
        switch (e.target.value) {
          case "Principals":
            this.series[0].data.push(staff[i].principals.toFixed(1));
            this.series[1].data.push(pupils[i].principals.toFixed(2));
            break;
          case "Teachers":
            this.series[0].data.push(staff[i].teachers.toFixed(1));
            this.series[1].data.push(pupils[i].teachers.toFixed(2));
            break;
          case "Instructional Aides":
            this.series[0].data.push(staff[i].instructionalAides.toFixed(1));
            this.series[1].data.push(pupils[i].instructionalAides.toFixed(2));
            break;
          case "Librarians":
            this.series[0].data.push(staff[i].librarians.toFixed(1));
            this.series[1].data.push(pupils[i].librarians.toFixed(2));
            break;
          case "Guidance Counselors":
            this.series[0].data.push(staff[i].guidanceCounselors.toFixed(1));
            this.series[1].data.push(pupils[i].guidanceCounselors.toFixed(2));
            break;
          case "Support Staff":
            this.series[0].data.push(staff[i].supportStaff.toFixed(1));
            this.series[1].data.push(pupils[i].supportStaff.toFixed(2));
            break;
        }
      }
    },
  },
};
</script>
