const ctx = document.querySelector("#myChart").getContext("2d");
const ctx1 = document.querySelector("#myChart2").getContext("2d");
// console.log(ctx)

const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(58, 123, 213, 1)");
gradient.addColorStop(1, "rgba(0, 210, 255, 0.3)");

const labels = [
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
]

const data = {
    labels,
    datasets: [{
        data: [125, 231, 613, 432, 190, 431, 752, 543, 153, 325],
        label: "Minecraft Sales",
        fill: true,
        backgroundColor: gradient,
    }]
}

const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return "$" + value + "m";
                    }
                }
            }
        }
    }
}

const config1 = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return "$" + value + "m";
                    }
                }
            }
        }
    }
}

const myChart = new Chart(ctx, config);
const myChart2 = new Chart(ctx1, config1);