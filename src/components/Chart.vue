<template>
  <div class="example">
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
          name: "Staff FTE",
          type: "column",
          data: [],
        },
        {
          name: "Pupils per staff member",
          type: "line",
          data: [],
        },
      ],
    };
  },
  mounted() {
    for (var i = 0; i < pupils.length; i++) {
      // Assumption: Is FTE summation of all the staff members in staff.json?
      var sumFte =
        staff[i].principals +
        staff[i].teachers +
        staff[i].instructionalAides +
        staff[i].librarians +
        staff[i].guidanceCounselors +
        staff[i].supportStaff;

      // Assumption: Is the pupils per staff equal summation of all the pupil members in pupils.json?
      var pupilsPerStaff =
        pupils[i].principals +
        pupils[i].teachers +
        pupils[i].instructionalAides +
        pupils[i].librarians +
        pupils[i].guidanceCounselors +
        pupils[i].supportStaff;

      // dynamically updating the chart data here (if it's an API call, we can use a similar update function)
      this.chartOptions.labels.push(pupils[i].schoolYear.toString());
      // NOTE: to make the UI look good, I'm rounding off to 1 and 2 decimal places here.
      this.series[0].data.push(sumFte.toFixed(1));
      this.series[1].data.push(pupilsPerStaff.toFixed(2));
    }
  },
};
</script>
