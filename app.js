// Chart Color Tester - Main Application
class ChartColorTester {
    constructor() {
        this.charts = {};
        this.currentItemsCount = 3; // Default to 3 items per chart
        this.currentPalette = {
            standard: ['#2C8AA8', '#FF4876', '#00AA62', '#6A6C75', '#EFBE53', '#9B59B6', '#E67E22', '#1ABC9C', '#3498DB', '#F39C12'],
            light: ['#A8D8EA', '#FFB3C6', '#B3E5D1', '#D4D6DD', '#F7E7A3', '#D7BDE2', '#F8C471', '#A3E4D7', '#AED6F1', '#F8C471'],
            funnel: {
                continued: ['#2C8AA8', '#1e6b85', '#0f4a5c', '#073341'],
                dropped: ['#FF4876', '#cc3a5e', '#992d46', '#66202f'],
                hover: ['#00AA62', '#00884e', '#00663a', '#004427'],
                selected: ['#6A6C75', '#55575e', '#404248', '#2b2d31']
            }
        };
        
        this.presets = {
            default: {
                standard: ['#2C8AA8', '#FF4876', '#00AA62', '#6A6C75', '#EFBE53', '#9B59B6', '#E67E22', '#1ABC9C', '#3498DB', '#F39C12'],
                light: ['#A8D8EA', '#FFB3C6', '#B3E5D1', '#D4D6DD', '#F7E7A3', '#D7BDE2', '#F8C471', '#A3E4D7', '#AED6F1', '#F8C471'],
                funnel: {
                    continued: ['#8852DC', '#982595', '#4AB0D0', '#417D4D', '#F59929', '#4570E0', '#D77A0A', '#CA58C7', '#7494E8', '#6825D1'],
                    dropped: ['#CFB5F9', '#E192E0', '#8AD4EC', '#80BD8D', '#FFDDB3', '#7494E8', '#FBB866', '#F3CDF2', '#A2B7F0', '#A77AF0'],
                    hover: ['#51209D', '#791E77', '#135A71', '#2B5334', '#9F5800', '#1E43A6', '#9F5800', '#791E77', '#1E43A6', '#51209D'],
                    selected: ['#390E7C', '#5A0D59', '#083D4E', '#16321C', '#713E00', '#081C54', '#713E00', '#5A0D59', '#081C54', '#390E7C']
                }
            },
            'new-proposal-1': {
                standard: ['#094B7C', '#FF728A', '#53AFFF', '#F05B00', '#DBA211', '#00AA62', '#3300B2', '#FF4876', '#7423E2', '#9A9CA5'],
                light: ['#7BA5C7', '#FFB5C5', '#A8D1FF', '#FF9F66', '#F5D18A', '#66C591', '#8866D4', '#FFB5C5', '#B388F0', '#C5C7CC'],
                funnel: {
                    continued: ['#094B7C', '#FF728A', '#53AFFF', '#F05B00', '#EFBE53', '#00AA62', '#3300B2', '#FF4876', '#7423E2', '#9A9CA5'],
                    dropped: ['#7BA5C7', '#FFB5C5', '#A8D1FF', '#FF9F66', '#F5D18A', '#66C591', '#8866D4', '#FFB5C5', '#B388F0', '#C5C7CC'],
                    hover: ['#073A63', '#CC5B6E', '#428CCC', '#C04800', '#BC9542', '#00884E', '#2800B2', '#CC3A5E', '#5D1CE5', '#7B7D84'],
                    selected: ['#052A4A', '#994452', '#316999', '#903600', '#8F7031', '#006639', '#1E0089', '#99293E', '#461AB8', '#5C5E63']
                }
            },
            'new-proposal-2': {
                standard: ['#FF4876', '#56B4E9', '#0072B2', '#117733', '#88CCEE', '#332288', '#AA4499', '#6699CC', '#CC79A7'],
                light: ['#FFB5C5', '#AAD4F4', '#66B5E6', '#7FBB7F', '#BBE2F7', '#7F7FBB', '#CC99BB', '#99BBE6', '#E6BBD1'],
                funnel: {
                    continued: ['#FF4876', '#56B4E9', '#0072B2', '#117733', '#88CCEE', '#332288', '#AA4499', '#6699CC', '#CC79A7'],
                    dropped: ['#FFB5C5', '#AAD4F4', '#66B5E6', '#7FBB7F', '#BBE2F7', '#7F7FBB', '#CC99BB', '#99BBE6', '#E6BBD1'],
                    hover: ['#CC3A5E', '#4591BA', '#005B8F', '#0E5F2A', '#6BA3BB', '#28226B', '#88377A', '#527A9F', '#A35F85'],
                    selected: ['#992D46', '#346E8B', '#00446C', '#0A4720', '#4F7A8C', '#1E1B50', '#66295B', '#3E5C77', '#7A4863']
                }
            },
            mollys: {
                standard: ['#8852DC', '#982595', '#4AB0D0', '#417D4D', '#F59929', '#4570E0', '#D77A0A', '#CA58C7', '#7494E8', '#6825D1'],
                light: ['#C3A6F1', '#D1A2D5', '#A5D8EC', '#90C09D', '#FDD08A', '#A2B8F0', '#F1B866', '#E8A6E3', '#B4CAF4', '#B089E8'],
                funnel: {
                    continued: ['#8852DC', '#982595', '#4AB0D0', '#417D4D', '#F59929', '#4570E0', '#D77A0A', '#CA58C7', '#7494E8', '#6825D1'],
                    dropped: ['#C3A6F1', '#D1A2D5', '#A5D8EC', '#90C09D', '#FDD08A', '#A2B8F0', '#F1B866', '#E8A6E3', '#B4CAF4', '#B089E8'],
                    hover: ['#5D37A3', '#6F1C70', '#358A9F', '#2F5A38', '#BC6F1C', '#2C4FA7', '#9E5808', '#915195', '#5671B5', '#4B1B9E'],
                    selected: ['#432A7A', '#521554', '#266B7F', '#234429', '#8D5315', '#213C7E', '#754206', '#6B3C71', '#415488', '#371475']
                }
            },
            'warm-cool-contrast': {
                standard: ['#005B94', '#D9A600', '#5000A5', '#FF6100', '#00C47A', '#FF477E', '#4CC3FF', '#8A2BE2', '#FF6F91', '#9E9E9E'],
                light: ['#66A3C7', '#F2D266', '#8066C7', '#FF9166', '#66D8A3', '#FF8DA3', '#8DD8FF', '#B366E8', '#FFA3B8', '#C4C4C4'],
                funnel: {
                    continued: ['#005B94', '#D9A600', '#5000A5', '#FF6100', '#00C47A', '#FF477E', '#4CC3FF', '#8A2BE2', '#FF6F91', '#9E9E9E'],
                    dropped: ['#66A3C7', '#F2D266', '#8066C7', '#FF9166', '#66D8A3', '#FF8DA3', '#8DD8FF', '#B366E8', '#FFA3B8', '#C4C4C4'],
                    hover: ['#003D63', '#A68500', '#35006E', '#CC4D00', '#009959', '#CC2E5A', '#1A9CCC', '#5F1C9F', '#CC4A6E', '#6B6B6B'],
                    selected: ['#002442', '#735900', '#1F003E', '#8A3400', '#006B3F', '#8A1E3C', '#0F6B8A', '#3D115F', '#8A2E46', '#4A4A4A']
                }
            }
        };

        this.init();
    }

    init() {
        this.setupPresetButtons();
        this.setupItemsDropdown();
        this.setupModalHandlers();
        this.setupOtherButtons();
        
        // Apply default preset to ensure proper initial colors
        this.applyPreset('default');
        
        // Set dropdown to default
        const dropdown = document.getElementById('paletteDropdown');
        if (dropdown) {
            dropdown.value = 'default';
        }
        
        // Set items dropdown to default
        const itemsDropdown = document.getElementById('itemsDropdown');
        if (itemsDropdown) {
            itemsDropdown.value = '3';
        }
        
        this.createCharts();
    }



    setupPresetButtons() {
        const dropdown = document.getElementById('paletteDropdown');
        if (dropdown) {
            dropdown.addEventListener('change', (e) => {
                const preset = e.target.value;
                this.applyPreset(preset);
            });
        }
    }

    setupItemsDropdown() {
        const itemsDropdown = document.getElementById('itemsDropdown');
        if (itemsDropdown) {
            itemsDropdown.addEventListener('change', (e) => {
                const itemsCount = parseInt(e.target.value);
                this.updateItemsCount(itemsCount);
            });
        }
    }

    updateItemsCount(itemsCount) {
        this.currentItemsCount = itemsCount;
        this.createCharts(); // Recreate all charts with new item count
    }

    applyPreset(presetName) {
        if (!this.presets[presetName]) return;

        const preset = this.presets[presetName];
        this.currentPalette = JSON.parse(JSON.stringify(preset));

        this.updateAllCharts();
    }


    createCharts() {
        // Destroy existing charts first
        Object.keys(this.charts).forEach(key => {
            if (this.charts[key] && this.charts[key].destroy) {
                this.charts[key].destroy();
            }
        });
        this.charts = {};

        this.createLineChart();
        this.createBarChart();
        this.createPieChart();
        this.createAreaChart();
        this.createLightChart();
        this.createMixedChart();
        this.createGoalChart();
        this.createPeopleDWMChart();
        this.createPESChart();
        this.createUserFrequencyChart();
        this.createFunnelChart();
    }

    createLineChart() {
        const seriesData = [
            {
                name: 'Series 1',
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0],
                color: this.currentPalette.standard[0]
            }, {
                name: 'Series 2',
                data: [24.9, 65.5, 89.4, 102.2, 134.0, 156.0],
                color: this.currentPalette.standard[1]
            }, {
                name: 'Series 3',
                data: [19.9, 55.5, 76.4, 89.2, 114.0, 136.0],
                color: this.currentPalette.standard[2]
            }, {
                name: 'Series 4',
                data: [15.9, 45.5, 66.4, 79.2, 104.0, 126.0],
                color: this.currentPalette.standard[3]
            }, {
                name: 'Series 5',
                data: [12.9, 35.5, 56.4, 69.2, 94.0, 116.0],
                color: this.currentPalette.standard[4]
            }, {
                name: 'Series 6',
                data: [9.9, 25.5, 46.4, 59.2, 84.0, 106.0],
                color: this.currentPalette.standard[5]
            }, {
                name: 'Series 7',
                data: [6.9, 15.5, 36.4, 49.2, 74.0, 96.0],
                color: this.currentPalette.standard[6]
            }, {
                name: 'Series 8',
                data: [3.9, 5.5, 26.4, 39.2, 64.0, 86.0],
                color: this.currentPalette.standard[7]
            }, {
                name: 'Series 9',
                data: [2.9, 3.5, 16.4, 29.2, 54.0, 76.0],
                color: this.currentPalette.standard[8] || this.currentPalette.standard[0]
            }, {
                name: 'Series 10',
                data: [1.9, 2.5, 10.4, 19.2, 44.0, 66.0],
                color: this.currentPalette.standard[9] || this.currentPalette.standard[1]
            }
        ];

        this.charts.lineChart = Highcharts.chart('lineChart', {
            chart: {
                type: 'line',
                backgroundColor: 'transparent'
            },
            title: {
                text: null
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: {
                title: {
                    text: 'Values'
                }
            },
            legend: {
                enabled: true
            },
            series: seriesData.slice(0, this.currentItemsCount),
            credits: {
                enabled: false
            }
        });
    }

    createBarChart() {
        const seriesData = [
            {
                name: '2022',
                data: [49.9, 71.5, 106.4, 129.2],
                color: this.currentPalette.standard[0]
            }, {
                name: '2023',
                data: [54.9, 85.5, 116.4, 149.2],
                color: this.currentPalette.standard[1]
            }, {
                name: '2024',
                data: [59.9, 95.5, 126.4, 159.2],
                color: this.currentPalette.standard[2]
            }, {
                name: '2025',
                data: [64.9, 105.5, 136.4, 169.2],
                color: this.currentPalette.standard[3]
            }, {
                name: '2026',
                data: [69.9, 115.5, 146.4, 179.2],
                color: this.currentPalette.standard[4]
            }, {
                name: '2027',
                data: [74.9, 125.5, 156.4, 189.2],
                color: this.currentPalette.standard[5]
            }, {
                name: '2028',
                data: [79.9, 135.5, 166.4, 199.2],
                color: this.currentPalette.standard[6]
            }, {
                name: '2029',
                data: [84.9, 145.5, 176.4, 209.2],
                color: this.currentPalette.standard[7]
            }, {
                name: '2030',
                data: [89.9, 155.5, 186.4, 219.2],
                color: this.currentPalette.standard[8] || this.currentPalette.standard[0]
            }, {
                name: '2031',
                data: [94.9, 165.5, 196.4, 229.2],
                color: this.currentPalette.standard[9] || this.currentPalette.standard[1]
            }
        ];

        this.charts.barChart = Highcharts.chart('barChart', {
            chart: {
                type: 'column',
                backgroundColor: 'transparent'
            },
            title: {
                text: null
            },
            xAxis: {
                categories: ['Q1', 'Q2', 'Q3', 'Q4']
            },
            yAxis: {
                title: {
                    text: 'Revenue'
                }
            },
            series: seriesData.slice(0, this.currentItemsCount),
            credits: {
                enabled: false
            }
        });
    }

    createPieChart() {
        const pieData = [
            { name: 'Category A', y: 45, color: this.currentPalette.standard[0] },
            { name: 'Category B', y: 25, color: this.currentPalette.standard[1] },
            { name: 'Category C', y: 20, color: this.currentPalette.standard[2] },
            { name: 'Category D', y: 10, color: this.currentPalette.standard[3] },
            { name: 'Category E', y: 8, color: this.currentPalette.standard[4] },
            { name: 'Category F', y: 6, color: this.currentPalette.standard[5] },
            { name: 'Category G', y: 4, color: this.currentPalette.standard[6] },
            { name: 'Category H', y: 2, color: this.currentPalette.standard[7] },
            { name: 'Category I', y: 3, color: this.currentPalette.standard[8] || this.currentPalette.standard[0] },
            { name: 'Category J', y: 1, color: this.currentPalette.standard[9] || this.currentPalette.standard[1] }
        ];

        this.charts.pieChart = Highcharts.chart('pieChart', {
            chart: {
                type: 'pie',
                backgroundColor: 'transparent'
            },
            title: {
                text: null
            },
            series: [{
                name: 'Share',
                data: pieData.slice(0, this.currentItemsCount)
            }],
            credits: {
                enabled: false
            }
        });
    }

    createAreaChart() {
        const seriesData = [
            {
                name: 'Desktop',
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0],
                color: this.currentPalette.standard[0]
            }, {
                name: 'Mobile',
                data: [24.9, 65.5, 89.4, 102.2, 134.0, 156.0],
                color: this.currentPalette.standard[1]
            }, {
                name: 'Tablet',
                data: [19.9, 55.5, 76.4, 89.2, 114.0, 136.0],
                color: this.currentPalette.standard[2]
            }, {
                name: 'Smart TV',
                data: [14.9, 45.5, 66.4, 79.2, 104.0, 126.0],
                color: this.currentPalette.standard[3]
            }, {
                name: 'Gaming Console',
                data: [9.9, 35.5, 56.4, 69.2, 94.0, 116.0],
                color: this.currentPalette.standard[4]
            }, {
                name: 'Smart Watch',
                data: [4.9, 25.5, 46.4, 59.2, 84.0, 106.0],
                color: this.currentPalette.standard[5]
            }, {
                name: 'VR Headset',
                data: [2.9, 15.5, 36.4, 49.2, 74.0, 96.0],
                color: this.currentPalette.standard[6]
            }, {
                name: 'IoT Device',
                data: [1.9, 5.5, 26.4, 39.2, 64.0, 86.0],
                color: this.currentPalette.standard[7]
            }, {
                name: 'Smart Home',
                data: [0.9, 3.5, 16.4, 29.2, 54.0, 76.0],
                color: this.currentPalette.standard[8] || this.currentPalette.standard[0]
            }, {
                name: 'Wearables',
                data: [0.5, 2.5, 10.4, 19.2, 44.0, 66.0],
                color: this.currentPalette.standard[9] || this.currentPalette.standard[1]
            }
        ];

        this.charts.areaChart = Highcharts.chart('areaChart', {
            chart: {
                type: 'area',
                backgroundColor: 'transparent'
            },
            title: {
                text: null
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: {
                title: {
                    text: 'Values'
                }
            },
            plotOptions: {
                area: {
                    stacking: 'normal'
                }
            },
            series: seriesData.slice(0, this.currentItemsCount),
            credits: {
                enabled: false
            }
        });
    }

    createLightChart() {
        const seriesData = [
            {
                name: 'Light Series 1',
                data: [29.9, 71.5, 106.4, 129.2],
                color: this.currentPalette.light[0]
            }, {
                name: 'Light Series 2',
                data: [24.9, 65.5, 89.4, 102.2],
                color: this.currentPalette.light[1]
            }, {
                name: 'Light Series 3',
                data: [19.9, 55.5, 76.4, 89.2],
                color: this.currentPalette.light[2]
            }, {
                name: 'Light Series 4',
                data: [14.9, 45.5, 66.4, 79.2],
                color: this.currentPalette.light[3]
            }, {
                name: 'Light Series 5',
                data: [9.9, 35.5, 56.4, 69.2],
                color: this.currentPalette.light[4]
            }, {
                name: 'Light Series 6',
                data: [4.9, 25.5, 46.4, 59.2],
                color: this.currentPalette.light[5]
            }, {
                name: 'Light Series 7',
                data: [2.9, 15.5, 36.4, 49.2],
                color: this.currentPalette.light[6]
            }, {
                name: 'Light Series 8',
                data: [1.9, 5.5, 26.4, 39.2],
                color: this.currentPalette.light[7]
            }
        ];

        this.charts.lightChart = Highcharts.chart('lightChart', {
            chart: {
                type: 'column',
                backgroundColor: 'transparent'
            },
            title: {
                text: null
            },
            xAxis: {
                categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
            },
            yAxis: {
                title: {
                    text: 'Engagement'
                }
            },
            series: seriesData.slice(0, this.currentItemsCount),
            credits: {
                enabled: false
            }
        });
    }

    createMixedChart() {
        this.charts.mixedChart = Highcharts.chart('mixedChart', {
            chart: {
                backgroundColor: 'transparent'
            },
            title: {
                text: null
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: [{
                title: {
                    text: 'Revenue'
                }
            }, {
                title: {
                    text: 'Users'
                },
                opposite: true
            }],
            series: [{
                name: 'Revenue',
                type: 'column',
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0],
                color: this.currentPalette.light[0]
            }, {
                name: 'Users',
                type: 'line',
                yAxis: 1,
                data: [24.9, 65.5, 89.4, 102.2, 134.0, 156.0],
                color: this.currentPalette.standard[0]
            }],
            credits: {
                enabled: false
            }
        });
    }

    createGoalChart() {
        this.charts.goalChart = Highcharts.chart('goalChart', {
            chart: {
                type: 'line',
                backgroundColor: 'transparent'
            },
            title: {
                text: null
            },
            xAxis: {
                categories: ['Q1', 'Q2', 'Q3', 'Q4']
            },
            yAxis: {
                title: {
                    text: 'Performance'
                }
            },
            series: [{
                name: 'Baseline',
                data: [50, 55, 60, 65],
                color: this.currentPalette.standard[3],
                dashStyle: 'ShortDash'
            }, {
                name: 'Target',
                data: [80, 85, 90, 95],
                color: this.currentPalette.standard[1],
                dashStyle: 'Dot'
            }, {
                name: 'Actual',
                data: [45, 70, 85, 92],
                color: this.currentPalette.standard[0],
                lineWidth: 3
            }],
            credits: {
                enabled: false
            }
        });
    }

    createPeopleDWMChart() {
        const seriesData = [
            {
                name: 'Daily',
                data: [1000, 1200, 1100, 1300, 1250, 1400],
                color: this.currentPalette.standard[0]
            }, {
                name: 'Weekly',
                data: [2500, 2800, 2600, 2900, 2750, 3100],
                color: this.currentPalette.standard[1]
            }, {
                name: 'Monthly',
                data: [5000, 5500, 5200, 5800, 5600, 6200],
                color: this.currentPalette.standard[2]
            }, {
                name: 'Quarterly',
                data: [8000, 8500, 8200, 8900, 8600, 9200],
                color: this.currentPalette.standard[3]
            }, {
                name: 'Yearly',
                data: [12000, 12500, 12200, 12900, 12600, 13200],
                color: this.currentPalette.standard[4]
            }, {
                name: 'New Users',
                data: [800, 900, 850, 950, 900, 1000],
                color: this.currentPalette.standard[5]
            }, {
                name: 'Returning',
                data: [4200, 4600, 4350, 4850, 4650, 5200],
                color: this.currentPalette.standard[6]
            }, {
                name: 'Power Users',
                data: [300, 350, 320, 380, 360, 420],
                color: this.currentPalette.standard[7]
            }
        ];

        this.charts.peopleDWMChart = Highcharts.chart('peopleDWMChart', {
            chart: {
                type: 'column',
                backgroundColor: 'transparent'
            },
            title: {
                text: null
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: {
                title: {
                    text: 'Users'
                }
            },
            series: seriesData.slice(0, this.currentItemsCount),
            credits: {
                enabled: false
            }
        });
    }

    createPESChart() {
        this.charts.pesChart = Highcharts.chart('pesChart', {
            chart: {
                type: 'line',
                backgroundColor: 'transparent'
            },
            title: {
                text: null
            },
            xAxis: {
                categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6']
            },
            yAxis: {
                title: {
                    text: 'PES Score'
                },
                min: 0,
                max: 100
            },
            series: [{
                name: 'Product Engagement Score',
                data: [65, 68, 72, 69, 75, 78],
                color: this.currentPalette.standard[0],
                lineWidth: 3,
                marker: {
                    radius: 5
                }
            }],
            credits: {
                enabled: false
            }
        });
    }

    createUserFrequencyChart() {
        const seriesData = [
            {
                name: 'Daily Users',
                data: [30, 35, 32, 38, 36, 40],
                color: this.currentPalette.standard[0]
            }, {
                name: 'Weekly Users',
                data: [40, 42, 45, 43, 46, 44],
                color: this.currentPalette.standard[1]
            }, {
                name: 'Monthly Users',
                data: [30, 23, 23, 19, 18, 16],
                color: this.currentPalette.standard[2]
            }, {
                name: 'Quarterly Users',
                data: [15, 18, 20, 22, 25, 28],
                color: this.currentPalette.standard[3]
            }, {
                name: 'Annual Users',
                data: [8, 10, 12, 14, 16, 18],
                color: this.currentPalette.standard[4]
            }, {
                name: 'Power Users',
                data: [5, 7, 9, 11, 13, 15],
                color: this.currentPalette.standard[5]
            }, {
                name: 'New Users',
                data: [20, 22, 18, 25, 30, 27],
                color: this.currentPalette.standard[6]
            }, {
                name: 'Returning Users',
                data: [12, 15, 17, 20, 22, 25],
                color: this.currentPalette.standard[7]
            }
        ];

        this.charts.userFrequencyChart = Highcharts.chart('userFrequencyChart', {
            chart: {
                type: 'area',
                backgroundColor: 'transparent'
            },
            title: {
                text: null
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: {
                title: {
                    text: 'Percentage'
                },
                labels: {
                    format: '{value}%'
                }
            },
            plotOptions: {
                area: {
                    stacking: 'percent'
                }
            },
            series: seriesData.slice(0, this.currentItemsCount),
            credits: {
                enabled: false
            }
        });
    }

    createFunnelChart() {
        // Sample funnel data matching your reference
        const funnelData = [
            { index: 0, name: 'Product Homepage', count: 39023, previousCount: 39023, emoji: '🏠' },
            { index: 1, name: 'All Dashboard Pages', count: 17629, previousCount: 39023, emoji: '📊' },
            { index: 2, name: 'Funnels | Funnels List', count: 1306, previousCount: 17629, emoji: '📈' }
        ];

        this.renderFunnelChart(funnelData);
    }

    calculateStepHeight(step, firstStep) {
        // Height should represent the total users who reached this step
        const heightPercent = (step.count / firstStep.count) * 100;
        const maxHeight = 200; // Max height in pixels
        const heightPx = (heightPercent / 100) * maxHeight;
        return `${heightPx}px`;
    }

    calculateSectionHeights(step, nextStep, firstStep) {
        if (!nextStep) {
            // Last step: show all as continued (no more steps)
            return {
                continued: `100%`,
                dropped: `0%`
            };
        }
        
        // The continued section should represent the next step's size relative to current step
        const continuedHeight = (nextStep.count / step.count) * 100;
        const droppedHeight = 100 - continuedHeight;
        
        return {
            continued: `${continuedHeight}%`,
            dropped: `${droppedHeight}%`
        };
    }

    renderFunnelChart(data) {
        const container = document.getElementById('funnelSteps');
        if (!container) return;

        // Clear existing content
        container.innerHTML = '';

        const firstStep = data[0];

        data.forEach((step, index) => {
            const stepHeight = this.calculateStepHeight(step, firstStep);
            const nextStep = data[index + 1] || null;
            const sectionHeights = this.calculateSectionHeights(step, nextStep, firstStep);
            
            
            // Get colors from current palette - use first color from each funnel state
            const continuedColor = this.currentPalette.funnel.continued[0]; // First continued color
            const droppedColor = this.currentPalette.funnel.dropped[0]; // First dropped color
            const hoverColor = this.currentPalette.funnel.hover[0]; // First hover color
            const selectedColor = this.currentPalette.funnel.selected[0]; // First selected color

            const stepElement = document.createElement('div');
            stepElement.className = 'funnel-step';
            stepElement.style.cssText = `
                --continued-color: ${continuedColor};
                --dropped-color: ${droppedColor};
                --hover-color: ${hoverColor};
                --selected-color: ${selectedColor};
                height: ${stepHeight};
            `;

            const conversionPercent = Math.round((step.count / firstStep.count) * 100);
            const badgeText = step.index === 0 
                ? `${step.count.toLocaleString()} (100%) started`
                : `${step.count.toLocaleString()} (${conversionPercent}%) continued`;

            stepElement.innerHTML = `
                <div class="step-sections" data-step="${index}">
                    <div class="dropped-section" style="height: ${sectionHeights.dropped}; background-color: ${droppedColor};"></div>
                    <div class="continued-section" style="height: ${sectionHeights.continued}; background-color: ${continuedColor};"></div>
                </div>
                <div class="step-badge">
                    <span class="badge-dot" style="background: ${continuedColor};">${step.emoji}</span>
                    <span>${badgeText}</span>
                </div>
                <div class="step-label">${step.name}</div>
            `;

            container.appendChild(stepElement);
        });

        // Add interactive behavior
        this.setupFunnelInteractions();
    }

    setupFunnelInteractions() {
        document.querySelectorAll('.step-sections').forEach(section => {
            section.addEventListener('click', function() {
                // Remove selected from all
                document.querySelectorAll('.step-sections').forEach(s => 
                    s.classList.remove('selected'));
                // Add selected to clicked
                this.classList.add('selected');
            });
        });
    }


    updateAllCharts() {
        // Update line chart
        if (this.charts.lineChart) {
            this.charts.lineChart.series.forEach((series, index) => {
                if (this.currentPalette.standard[index]) {
                    series.update({ color: this.currentPalette.standard[index] });
                }
            });
        }

        // Update bar chart
        if (this.charts.barChart) {
            this.charts.barChart.series.forEach((series, index) => {
                if (this.currentPalette.standard[index]) {
                    series.update({ color: this.currentPalette.standard[index] });
                }
            });
        }

        // Update pie chart
        if (this.charts.pieChart) {
            this.charts.pieChart.series[0].data.forEach((point, index) => {
                if (this.currentPalette.standard[index]) {
                    point.update({ color: this.currentPalette.standard[index] });
                }
            });
        }

        // Update area chart
        if (this.charts.areaChart) {
            this.charts.areaChart.series.forEach((series, index) => {
                if (this.currentPalette.standard[index]) {
                    series.update({ color: this.currentPalette.standard[index] });
                }
            });
        }

        // Update light chart
        if (this.charts.lightChart) {
            this.charts.lightChart.series.forEach((series, index) => {
                if (this.currentPalette.light[index]) {
                    series.update({ color: this.currentPalette.light[index] });
                }
            });
        }

        // Update mixed chart
        if (this.charts.mixedChart) {
            if (this.charts.mixedChart.series[0]) {
                this.charts.mixedChart.series[0].update({ color: this.currentPalette.light[0] });
            }
            if (this.charts.mixedChart.series[1]) {
                this.charts.mixedChart.series[1].update({ color: this.currentPalette.standard[0] });
            }
        }

        // Update goal chart
        if (this.charts.goalChart) {
            this.charts.goalChart.series.forEach((series, index) => {
                const colorIndex = index === 0 ? 3 : index === 1 ? 1 : 0;
                if (this.currentPalette.standard[colorIndex]) {
                    series.update({ color: this.currentPalette.standard[colorIndex] });
                }
            });
        }

        // Update people DWM chart
        if (this.charts.peopleDWMChart) {
            this.charts.peopleDWMChart.series.forEach((series, index) => {
                if (this.currentPalette.standard[index]) {
                    series.update({ color: this.currentPalette.standard[index] });
                }
            });
        }

        // Update PES chart
        if (this.charts.pesChart) {
            this.charts.pesChart.series[0].update({ color: this.currentPalette.standard[0] });
        }

        // Update user frequency chart
        if (this.charts.userFrequencyChart) {
            this.charts.userFrequencyChart.series.forEach((series, index) => {
                if (this.currentPalette.standard[index]) {
                    series.update({ color: this.currentPalette.standard[index] });
                }
            });
        }

        // Update funnel chart
        this.updateFunnelChart();
    }

    updateFunnelChart() {
        // Re-render the funnel chart with new colors
        const funnelData = [
            { index: 0, name: 'Product Homepage', count: 39023, previousCount: 39023, emoji: '🏠' },
            { index: 1, name: 'All Dashboard Pages', count: 17629, previousCount: 39023, emoji: '📊' },
            { index: 2, name: 'Funnels | Funnels List', count: 1306, previousCount: 17629, emoji: '📈' }
        ];
        this.renderFunnelChart(funnelData);
    }



    darkenColor(color, percent) {
        const num = parseInt(color.slice(1), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) - amt;
        const G = (num >> 8 & 0x00FF) - amt;
        const B = (num & 0x0000FF) - amt;
        return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }

    lightenColor(color, percent) {
        const num = parseInt(color.slice(1), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }



    setupModalHandlers() {
        const modal = document.getElementById('helpModal');
        const helpBtn = document.getElementById('helpBtn');
        const closeBtn = document.querySelector('.modal-close');

        helpBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    setupOtherButtons() {
        // No additional buttons to set up currently
    }

    generateRandomColors() {
        const generateRandomColor = () => {
            return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        };

        // Generate random standard colors
        this.currentPalette.standard = this.currentPalette.standard.map(() => generateRandomColor());
        
        // Generate random light colors (lighter versions)
        this.currentPalette.light = this.currentPalette.standard.map(color => this.lightenColor(color, 40));
        
        // Generate random funnel colors
        this.currentPalette.funnel.continued = this.currentPalette.funnel.continued.map(() => generateRandomColor());

        this.updateAllCharts();
    }

}

// Initialize the application when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ChartColorTester();
});
