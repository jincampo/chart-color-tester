// Chart Color Tester - Main Application
class ChartColorTester {
    constructor() {
        this.charts = {};
        this.currentItemsCount = 3; // Default to 3 items per chart
        this.showShapes = false; // Default to hiding shapes on line charts (toggle is hidden)
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
                standardDark: ['#3FA3C7', '#FF6B8F', '#1FBB7B', '#808289', '#F2C76C', '#B470D1', '#F2913B', '#2FD1B5', '#5BB1F2', '#F5AC2B'],
                light: ['#A8D8EA', '#FFB3C6', '#B3E5D1', '#D4D6DD', '#F7E7A3', '#D7BDE2', '#F8C471', '#A3E4D7', '#AED6F1', '#F8C471'],
                lightDark: ['#1B5A6B', '#8B2429', '#006640', '#444549', '#A07B35', '#63407A', '#9B4E15', '#119A7C', '#2373A3', '#A0670A'],
                funnel: {
                    continued: ['#8852DC', '#982595', '#4AB0D0', '#417D4D', '#F59929', '#4570E0', '#D77A0A', '#CA58C7', '#7494E8', '#6825D1'],
                    dropped: ['#CFB5F9', '#E192E0', '#8AD4EC', '#80BD8D', '#FFDDB3', '#7494E8', '#FBB866', '#F3CDF2', '#A2B7F0', '#A77AF0'],
                    hover: ['#51209D', '#791E77', '#135A71', '#2B5334', '#9F5800', '#1E43A6', '#9F5800', '#791E77', '#1E43A6', '#51209D'],
                    selected: ['#390E7C', '#5A0D59', '#083D4E', '#16321C', '#713E00', '#081C54', '#713E00', '#5A0D59', '#081C54', '#390E7C']
                }
            },
            'bright-blues-pinks': {
                standard: ['#FF4876', '#0072B2', '#87A96B', '#332288', '#56B4E9', '#117733', '#CC79A7', '#88CCEE', '#AA4499', '#E69F00'],
                standardDark: ['#FF6B8F', '#1F8FCF', '#9FBB84', '#4A3FA5', '#73C8F6', '#2E9450', '#DFA4C4', '#A5E1FB', '#C166B6', '#F2B233'],
                light: ['#FFB5C5', '#AAD4F4', '#66B5E6', '#7FBB7F', '#BBE2F7', '#7F7FBB', '#CC99BB', '#99BBE6', '#E6BBD1', '#F5C866'],
                lightDark: ['#8B2429', '#004F7A', '#5A7047', '#221A5A', '#3A7BA3', '#0D4F26', '#8A5277', '#5A99B3', '#704D6B', '#B8750A'],
                funnel: {
                    continued: ['#FF4876', '#56B4E9', '#0072B2', '#117733', '#88CCEE', '#332288', '#AA4499', '#6699CC', '#CC79A7', '#E69F00'],
                    dropped: ['#FFB5C5', '#AAD4F4', '#66B5E6', '#7FBB7F', '#BBE2F7', '#7F7FBB', '#CC99BB', '#99BBE6', '#E6BBD1', '#F5C866'],
                    hover: ['#CC3A5E', '#4591BA', '#005B8F', '#0E5F2A', '#6BA3BB', '#28226B', '#88377A', '#527A9F', '#A35F85', '#B8750A'],
                    selected: ['#992D46', '#346E8B', '#00446C', '#0A4720', '#4F7A8C', '#1E1B50', '#66295B', '#3E5C77', '#7A4863', '#8A5907']
                }
            },
            'vibrant-purples': {
                standard: ['#8852DC', '#982595', '#4AB0D0', '#417D4D', '#F59929', '#4570E0', '#D77A0A', '#CA58C7', '#7494E8', '#6825D1'],
                standardDark: ['#A56FF9', '#B542B2', '#67CDDD', '#5E9A6A', '#F8B246', '#6D8DF7', '#F49727', '#E775E4', '#91B1F5', '#8542EE'],
                light: ['#C3A6F1', '#D1A2D5', '#A5D8EC', '#90C09D', '#FDD08A', '#A2B8F0', '#F1B866', '#E8A6E3', '#B4CAF4', '#B089E8'],
                lightDark: ['#5A35A3', '#651B63', '#32789F', '#2C5938', '#B0671C', '#2F4FA7', '#9E5808', '#905195', '#5071B5', '#4B1B9E'],
                funnel: {
                    continued: ['#8852DC', '#982595', '#4AB0D0', '#417D4D', '#F59929', '#4570E0', '#D77A0A', '#CA58C7', '#7494E8', '#6825D1'],
                    dropped: ['#C3A6F1', '#D1A2D5', '#A5D8EC', '#90C09D', '#FDD08A', '#A2B8F0', '#F1B866', '#E8A6E3', '#B4CAF4', '#B089E8'],
                    hover: ['#5D37A3', '#6F1C70', '#358A9F', '#2F5A38', '#BC6F1C', '#2C4FA7', '#9E5808', '#915195', '#5671B5', '#4B1B9E'],
                    selected: ['#432A7A', '#521554', '#266B7F', '#234429', '#8D5315', '#213C7E', '#754206', '#6B3C71', '#415488', '#371475']
                }
            },
            'navy-bright-spectrum': {
                standard: ['#094B7C', '#FF728A', '#53AFFF', '#F05B00', '#00AA62', '#3300B2', '#FF4876', '#7423E2', '#E6AF2D', '#777777'],
                standardDark: ['#2668A1', '#FF8FA7', '#70C2FF', '#FF7E33', '#33C585', '#5533CF', '#FF6B8F', '#9140FF', '#F2C250', '#949494'],
                light: ['#7BA5C7', '#FFB5C5', '#A8D1FF', '#FF9F66', '#66C591', '#8866D4', '#FFB5C5', '#B388F0', '#F5D18A', '#BBBBBB'],
                lightDark: ['#073A63', '#8B4D59', '#3E7FBF', '#B04000', '#006640', '#2200789', '#8B2429', '#5B1CAF', '#A0781F', '#525252'],
                funnel: {
                    continued: ['#094B7C', '#FF728A', '#53AFFF', '#F05B00', '#00AA62', '#3300B2', '#FF4876', '#7423E2', '#E6AF2D', '#777777'],
                    dropped: ['#7BA5C7', '#FFB5C5', '#A8D1FF', '#FF9F66', '#66C591', '#8866D4', '#FFB5C5', '#B388F0', '#F5D18A', '#BBBBBB'],
                    hover: ['#073A63', '#CC5B6E', '#428CCC', '#C04800', '#00884E', '#2800B2', '#CC3A5E', '#5D1CE5', '#BC9542', '#5C5C5C'],
                    selected: ['#052A4A', '#994452', '#316999', '#903600', '#006639', '#1E0089', '#99293E', '#461AB8', '#8F7031', '#414141']
                }
            },
            'soft-pastels': {
                standard: ['#5EA870', '#7479D6', '#D6D174', '#AA74D6', '#74D683', '#D6748D', '#74B4D6', '#D69674', '#A0D674', '#D674C8'],
                standardDark: ['#7BC18D', '#919CF3', '#F3F391', '#C791F3', '#91F3A0', '#F391AA', '#91D1F3', '#F3B391', '#BDF391', '#F391E5'],
                light: ['#B1E8D6', '#B1B4E8', '#E8E8B1', '#D1B1E8', '#B1E8C0', '#E8B1C4', '#B1D1E8', '#E8C4B1', '#CCE8B1', '#E8B1DF'],
                lightDark: ['#4A8760', '#5A62A6', '#A6A65A', '#7A5AA6', '#5AA673', '#A65A7A', '#5A8AA6', '#A6795A', '#7AA65A', '#A65A94'],
                funnel: {
                    continued: ['#74D6BE', '#7479D6', '#D6D174', '#AA74D6', '#74D683', '#D6748D', '#74B4D6', '#D69674', '#A0D674', '#D674C8'],
                    dropped: ['#B1E8D6', '#B1B4E8', '#E8E8B1', '#D1B1E8', '#B1E8C0', '#E8B1C4', '#B1D1E8', '#E8C4B1', '#CCE8B1', '#E8B1DF'],
                    hover: ['#5CAAA0', '#5C60AA', '#AAAA5C', '#8A5CAA', '#5CAA6B', '#AA5C73', '#5C93AA', '#AA795C', '#82AA5C', '#AA5CA4'],
                    selected: ['#457E7B', '#444684', '#7E7E44', '#674584', '#457E50', '#7E4456', '#446E7E', '#7E5944', '#617E44', '#7E447A']
                }
            },
            'modern-vibrant': {
                standard: ['#636EFA', '#EF553B', '#00CC96', '#AB63FA', '#FFA15A', '#19D3F3', '#FF6692', '#B6E880', '#FF97FF', '#FECB52'],
                standardDark: ['#808BFF', '#FF7258', '#1FE0B3', '#C880FF', '#FFB877', '#36E0F6', '#FF83AF', '#D3F59D', '#FFB4FF', '#FFD86F'],
                light: ['#A5AFFC', '#F59B8A', '#66E0BE', '#D1A5FC', '#FFC49F', '#7DE3F8', '#FFA5BE', '#D9F2B3', '#FFB3FF', '#FEE0A1'],
                lightDark: ['#4A58C8', '#BF442F', '#00A378', '#8950C8', '#CC8148', '#14A9C2', '#CC5274', '#93BA66', '#CC78CC', '#CB9F42'],
                funnel: {
                    continued: ['#636EFA', '#EF553B', '#00CC96', '#AB63FA', '#FFA15A', '#19D3F3', '#FF6692', '#B6E880', '#FF97FF', '#FECB52'],
                    dropped: ['#A5AFFC', '#F59B8A', '#66E0BE', '#D1A5FC', '#FFC49F', '#7DE3F8', '#FFA5BE', '#D9F2B3', '#FFB3FF', '#FEE0A1'],
                    hover: ['#4A58C8', '#BF442F', '#00A378', '#8950C8', '#CC8148', '#14A9C2', '#CC5274', '#93BA66', '#CC78CC', '#CB9F42'],
                    selected: ['#384496', '#96331F', '#007A5A', '#673C96', '#996136', '#0F7F91', '#993D56', '#6E8C4C', '#995999', '#987731']
                }
            },
            'violet-sage-spectrum': {
                standard: ['#8852DC', '#87A96B', '#0072B2', '#332288', '#FF4876', '#E69F00', '#128297', '#56B4E9', '#CC79A7', '#AA4499'],
                standardDark: ['#A56FF9', '#A4C088', '#1F8FCF', '#4A3FA5', '#FF6B8F', '#F2B233', '#2FA0B4', '#73C8F6', '#E196C4', '#C166B6'],
                light: ['#C3A6F1', '#B8CBA0', '#66B5E6', '#7F7FBB', '#FFB5C5', '#F5C866', '#7BC1CC', '#AAD4F4', '#E8B1C4', '#E6BBD1'],
                lightDark: ['#5A35A3', '#5A7047', '#004F7A', '#221A5A', '#8B2429', '#B8750A', '#0E5A68', '#3A7BA3', '#8A5277', '#704D6B'],
                funnel: {
                    continued: ['#8852DC', '#87A96B', '#0072B2', '#332288', '#FF4876', '#E69F00', '#128297', '#56B4E9', '#CC79A7', '#AA4499'],
                    dropped: ['#C3A6F1', '#B8CBA0', '#66B5E6', '#7F7FBB', '#FFB5C5', '#F5C866', '#7BC1CC', '#AAD4F4', '#E8B1C4', '#E6BBD1'],
                    hover: ['#5A35A3', '#5A7047', '#004F7A', '#221A5A', '#8B2429', '#B8750A', '#0E5A68', '#3A7BA3', '#8A5277', '#704D6B'],
                    selected: ['#432A7A', '#455944', '#003A5C', '#1A1444', '#661B1E', '#8A5907', '#0A4751', '#2C5C7A', '#673D5A', '#523A50']
                }
            },
            'cobalt-spectrum': {
                standard: ['#005EB8', '#FF728A', '#00AA62', '#F05B00', '#53AFFF', '#FF4876', '#3300B2', '#E6AF2D', '#7423E2', '#777777'],
                standardDark: ['#3381D1', '#FF8FA7', '#33C585', '#FF7E33', '#70C2FF', '#FF6B8F', '#5533CF', '#F2C250', '#9140FF', '#949494'],
                light: ['#66A1E6', '#FFB5C5', '#66C591', '#FF9F66', '#A8D1FF', '#FFB5C5', '#8866D4', '#F5D18A', '#B388F0', '#BBBBBB'],
                lightDark: ['#004785', '#B3516B', '#007A4A', '#B04000', '#3E7FBF', '#8B2429', '#2200789', '#A0781F', '#5B1CAF', '#525252'],
                funnel: {
                    continued: ['#005EB8', '#FF728A', '#00AA62', '#F05B00', '#53AFFF', '#FF4876', '#3300B2', '#E6AF2D', '#7423E2', '#777777'],
                    dropped: ['#66A1E6', '#FFB5C5', '#66C591', '#FF9F66', '#A8D1FF', '#FFB5C5', '#8866D4', '#F5D18A', '#B388F0', '#BBBBBB'],
                    hover: ['#004785', '#B3516B', '#007A4A', '#B04000', '#3E7FBF', '#8B2429', '#2200789', '#A0781F', '#5B1CAF', '#525252'],
                    selected: ['#003661', '#8A3E52', '#005C38', '#803000', '#2E5F8F', '#661B1E', '#1A005C', '#785B17', '#44138A', '#3E3E3E']
                }
            },
            'indigo-amber-spectrum': {
                standard: ['#636EFA', '#E69F00', '#0072B2', '#FF4876', '#87A96B', '#332288', '#56B4E9', '#117733', '#CC79A7', '#AA4499'],
                standardDark: ['#808BFF', '#F2B233', '#1F8FCF', '#FF6B8F', '#A4C088', '#4A3FA5', '#73C8F6', '#2E9450', '#E196C4', '#C166B6'],
                light: ['#A5AFFC', '#F5C866', '#66B5E6', '#FFB5C5', '#B8CBA0', '#7F7FBB', '#AAD4F4', '#7FBB7F', '#E8B1C4', '#E6BBD1'],
                lightDark: ['#4A58C8', '#B8750A', '#004F7A', '#8B2429', '#5A7047', '#221A5A', '#3A7BA3', '#0D4F26', '#8A5277', '#704D6B'],
                funnel: {
                    continued: ['#636EFA', '#E69F00', '#0072B2', '#FF4876', '#87A96B', '#332288', '#56B4E9', '#117733', '#CC79A7', '#AA4499'],
                    dropped: ['#A5AFFC', '#F5C866', '#66B5E6', '#FFB5C5', '#B8CBA0', '#7F7FBB', '#AAD4F4', '#7FBB7F', '#E8B1C4', '#E6BBD1'],
                    hover: ['#4A58C8', '#B8750A', '#004F7A', '#8B2429', '#5A7047', '#221A5A', '#3A7BA3', '#0D4F26', '#8A5277', '#704D6B'],
                    selected: ['#384496', '#8A5907', '#003A5C', '#661B1E', '#455944', '#1A1444', '#2C5C7A', '#0A3A1D', '#673D5A', '#523A50']
                }
            },
            'navy-sage-spectrum': {
                standard: ['#0072B2', '#FF4876', '#87A96B', '#332288', '#56B4E9', '#CC79A7', '#117733', '#E69F00', '#AA4499', '#7A7F87'],
                standardDark: ['#1F8FCF', '#FF6B8F', '#A4C088', '#4A3FA5', '#73C8F6', '#E196C4', '#2E9450', '#F2B233', '#C166B6', '#9BA3AB'],
                light: ['#66B5E6', '#FFB5C5', '#B8CBA0', '#7F7FBB', '#AAD4F4', '#E8B1C4', '#7FBB7F', '#F5C866', '#E6BBD1', '#C4C7CD'],
                lightDark: ['#004F7A', '#8B2429', '#5A7047', '#221A5A', '#3A7BA3', '#8A5277', '#0D4F26', '#B8750A', '#704D6B', '#5C6068'],
                funnel: {
                    continued: ['#0072B2', '#FF4876', '#87A96B', '#332288', '#56B4E9', '#CC79A7', '#117733', '#E69F00', '#AA4499', '#7A7F87'],
                    dropped: ['#66B5E6', '#FFB5C5', '#B8CBA0', '#7F7FBB', '#AAD4F4', '#E8B1C4', '#7FBB7F', '#F5C866', '#E6BBD1', '#C4C7CD'],
                    hover: ['#004F7A', '#8B2429', '#5A7047', '#221A5A', '#3A7BA3', '#8A5277', '#0D4F26', '#B8750A', '#704D6B', '#5C6068'],
                    selected: ['#003A5C', '#661B1E', '#455944', '#1A1444', '#2C5C7A', '#673D5A', '#0A3A1D', '#8A5907', '#523A50', '#464B52']
                }
            },
            'cobalt-sage-spectrum': {
                standard: ['#005EB8', '#FF4876', '#87A96B', '#332288', '#56B4E9', '#CC79A7', '#117733', '#E69F00', '#AA4499', '#7A7F87'],
                standardDark: ['#2F81D1', '#FF6B8F', '#A4C088', '#4A3FA5', '#73C8F6', '#E196C4', '#2E9450', '#F2B233', '#C166B6', '#9BA3AB'],
                light: ['#66A1E6', '#FFB5C5', '#B8CBA0', '#7F7FBB', '#AAD4F4', '#E8B1C4', '#7FBB7F', '#F5C866', '#E6BBD1', '#C4C7CD'],
                lightDark: ['#004685', '#8B2429', '#5A7047', '#221A5A', '#3A7BA3', '#8A5277', '#0D4F26', '#B8750A', '#704D6B', '#5C6068'],
                funnel: {
                    continued: ['#005EB8', '#FF4876', '#87A96B', '#332288', '#56B4E9', '#CC79A7', '#117733', '#E69F00', '#AA4499', '#7A7F87'],
                    dropped: ['#66A1E6', '#FFB5C5', '#B8CBA0', '#7F7FBB', '#AAD4F4', '#E8B1C4', '#7FBB7F', '#F5C866', '#E6BBD1', '#C4C7CD'],
                    hover: ['#004685', '#8B2429', '#5A7047', '#221A5A', '#3A7BA3', '#8A5277', '#0D4F26', '#B8750A', '#704D6B', '#5C6068'],
                    selected: ['#003561', '#661B1E', '#455944', '#1A1444', '#2C5C7A', '#673D5A', '#0A3A1D', '#8A5907', '#523A50', '#464B52']
                }
            },
            'vibrant-fluent-spectrum': {
                standard: ['#637CEF', '#E3008C', '#2AA0A4', '#9373C0', '#13A10E', '#3A96DD', '#CA5010', '#57811B', '#B146C2', '#AE8C00'],
                standardDark: ['#8095F2', '#F533A7', '#4FB3B7', '#A88DD6', '#3CB831', '#5CAAEA', '#E26B33', '#7BA038', '#C866D8', '#C8A533'],
                light: ['#A8BBFF', '#F366B8', '#7FC7C9', '#BFA6E3', '#66C963', '#7FBCF0', '#E49966', '#99BF66', '#D48BE3', '#DFBE66'],
                lightDark: ['#4A5FBC', '#A6006A', '#1F7A7D', '#6C5591', '#0E790B', '#2C70A3', '#973C0C', '#415F14', '#854491', '#826900'],
                funnel: {
                    continued: ['#637CEF', '#E3008C', '#2AA0A4', '#9373C0', '#13A10E', '#3A96DD', '#CA5010', '#57811B', '#B146C2', '#AE8C00'],
                    dropped: ['#A8BBFF', '#F366B8', '#7FC7C9', '#BFA6E3', '#66C963', '#7FBCF0', '#E49966', '#99BF66', '#D48BE3', '#DFBE66'],
                    hover: ['#4A5FBC', '#A6006A', '#1F7A7D', '#6C5591', '#0E790B', '#2C70A3', '#973C0C', '#415F14', '#854491', '#826900'],
                    selected: ['#38478F', '#7A004F', '#175C5E', '#51406E', '#0A5B08', '#21547A', '#712D09', '#31470F', '#63336E', '#624F00']
                }
            },
            'material-spectrum': {
                standard: ['#00B789', '#F57C00', '#0066CC', '#E91E63', '#9C27B0', '#FFB300', '#00897B', '#8E24AA', '#C21807', '#455A64'],
                standardDark: ['#33C79E', '#F89A33', '#3385D6', '#ED4976', '#B855C4', '#FFBF33', '#33A598', '#A954BE', '#D44A3A', '#6B7C87'],
                light: ['#66D7B8', '#FAB366', '#66A3E6', '#F27BA3', '#C866D4', '#FFD166', '#66BBA8', '#C587D4', '#E68A7A', '#9BAAB0'],
                lightDark: ['#008A66', '#B85D00', '#004D99', '#AE1547', '#731D85', '#BF8600', '#00665C', '#681B7F', '#911205', '#33404A'],
                funnel: {
                    continued: ['#00B789', '#F57C00', '#0066CC', '#E91E63', '#9C27B0', '#FFB300', '#00897B', '#8E24AA', '#C21807', '#455A64'],
                    dropped: ['#66D7B8', '#FAB366', '#66A3E6', '#F27BA3', '#C866D4', '#FFD166', '#66BBA8', '#C587D4', '#E68A7A', '#9BAAB0'],
                    hover: ['#008A66', '#B85D00', '#004D99', '#AE1547', '#731D85', '#BF8600', '#00665C', '#681B7F', '#911205', '#33404A'],
                    selected: ['#006B50', '#8A4600', '#003A73', '#851040', '#561563', '#8F6500', '#004D47', '#4E1460', '#6D0E04', '#263038']
                }
            },
            'scientific-spectrum': {
                standard: ['#4D5A61', '#FF4876', '#8D45FF', '#009E73', '#E69F00', '#56B4E9', '#005951', '#A0522D', '#C7A600', '#1C2A39'],
                standardDark: ['#6A7981', '#FF6B8F', '#A962FF', '#33B896', '#F2B233', '#79C8F6', '#338074', '#C06F50', '#E0C333', '#394857'],
                light: ['#B1BCC2', '#FFD4DF', '#DCBBFF', '#85D4BB', '#F7D685', '#C4E4F7', '#85B5AC', '#DEB8A8', '#EDE285', '#718A95'],
                lightDark: ['#3A444A', '#8B2429', '#6D35BF', '#007552', '#B87600', '#3E85B0', '#004A43', '#7A3E22', '#9E8800', '#141D28'],
                funnel: {
                    continued: ['#4D5A61', '#FF4876', '#8D45FF', '#009E73', '#E69F00', '#56B4E9', '#005951', '#A0522D', '#C7A600', '#1C2A39'],
                    dropped: ['#B1BCC2', '#FFD4DF', '#DCBBFF', '#85D4BB', '#F7D685', '#C4E4F7', '#85B5AC', '#DEB8A8', '#EDE285', '#718A95'],
                    hover: ['#3A444A', '#8B2429', '#6D35BF', '#007552', '#B87600', '#3E85B0', '#004A43', '#7A3E22', '#9E8800', '#141D28'],
                    selected: ['#2A3338', '#661B1E', '#531EA9', '#00563D', '#8A5700', '#2E6385', '#003B36', '#5D2F1A', '#786600', '#0F1520']
                }
            }
        };

        this.init();
    }

    init() {
        this.setupThemeHighlight();
        this.setupPresetButtons();
        this.setupItemsDropdown();
        this.setupShapesToggle();
        this.setupDarkModeToggle();
        this.setupButtonColorToggle();
        this.setupModalHandlers();
        this.setupOtherButtons();
        
        // Initialize theme from localStorage or default to light
        this.initializeTheme();
        
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

    setupThemeHighlight() {
        // Show theme selector highlight on page load
        const themeHighlight = document.getElementById('themeHighlight');
        if (themeHighlight) {
            // Initialize Lucide icons for the highlight
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
            
            // Hide if user hovers over the highlight or palette selector
            const paletteSelector = document.getElementById('paletteSelector');
            const dismissHighlight = () => {
                if (themeHighlight && !themeHighlight.classList.contains('fade-out')) {
                    themeHighlight.classList.add('fade-out');
                    setTimeout(() => {
                        if (themeHighlight.parentNode) {
                            themeHighlight.parentNode.removeChild(themeHighlight);
                        }
                    }, 500);
                }
            };
            
            // Dismiss on hover over the entire palette selector area
            if (paletteSelector) {
                paletteSelector.addEventListener('mouseenter', dismissHighlight);
            }
            
            // Also dismiss when hovering directly over the highlight
            themeHighlight.addEventListener('mouseenter', dismissHighlight);
            
            // Also hide if user interacts with the palette dropdown
            const paletteDropdown = document.getElementById('paletteDropdown');
            if (paletteDropdown) {
                paletteDropdown.addEventListener('change', dismissHighlight);
            }
        }
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

    setupShapesToggle() {
        const shapesToggle = document.getElementById('shapesToggle');
        if (shapesToggle) {
            shapesToggle.addEventListener('change', (e) => {
                this.showShapes = e.target.checked;
                // Recreate charts to ensure marker settings are applied correctly
                this.createCharts();
            });
        }
    }

    setupDarkModeToggle() {
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('change', (e) => {
                const isDark = e.target.checked;
                this.setTheme(isDark ? 'dark' : 'light');
            });
        }
    }

    setupButtonColorToggle() {
        const buttonColorToggle = document.getElementById('buttonColorToggle');
        if (buttonColorToggle) {
            buttonColorToggle.addEventListener('change', (e) => {
                const isTeal = e.target.checked;
                this.setButtonColor(isTeal ? 'teal' : 'neutral');
            });
        }
    }

    initializeTheme() {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem('chartTester-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Use saved theme, or fall back to system preference, or default to light
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        
        // Set the theme without saving to localStorage (since it might be system preference)
        this.setTheme(theme, savedTheme === null);
        
        // Update the toggle to match current theme
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.checked = theme === 'dark';
        }

        // Initialize button color preference
        this.initializeButtonColor();
    }

    initializeButtonColor() {
        const savedButtonColor = localStorage.getItem('chartTester-buttonColor');
        const buttonColor = savedButtonColor || 'teal';
        
        this.setButtonColor(buttonColor, savedButtonColor === null);
        
        // Set the toggle state to match the button color preference
        const buttonColorToggle = document.getElementById('buttonColorToggle');
        if (buttonColorToggle) {
            buttonColorToggle.checked = buttonColor === 'teal';
        }
    }

    setButtonColor(color, skipStorage = false) {
        const helpBtn = document.getElementById('helpBtn');
        if (helpBtn) {
            if (color === 'neutral') {
                helpBtn.classList.add('neutral');
            } else {
                helpBtn.classList.remove('neutral');
            }
        }
        
        if (!skipStorage) {
            localStorage.setItem('chartTester-buttonColor', color);
        }
    }

    setTheme(theme, skipStorage = false) {
        // Update the document's data-theme attribute
        document.documentElement.setAttribute('data-theme', theme);
        
        // Save to localStorage unless explicitly skipped
        if (!skipStorage) {
            localStorage.setItem('chartTester-theme', theme);
        }
        
        // Update charts if they exist (for better dark mode support)
        if (Object.keys(this.charts).length > 0) {
            this.updateChartsForTheme(theme);
        }
    }

    getChartThemeConfig() {
        // Get current theme from document
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const gridLineColor = isDark ? '#4A4C55' : '#DADCE5';
        const axisLineColor = isDark ? 'transparent' : '#DADCE5';
        
        return {
            chart: {
                backgroundColor: 'transparent',
                plotBorderWidth: 0,
                borderWidth: 0
            },
            xAxis: {
                labels: {
                    style: {
                        color: 'var(--text-secondary)'
                    }
                },
                lineColor: axisLineColor,
                tickColor: axisLineColor,
                gridLineColor: gridLineColor
            },
            yAxis: {
                title: {
                    style: {
                        color: 'var(--text-secondary)'
                    }
                },
                labels: {
                    style: {
                        color: 'var(--text-secondary)'
                    }
                },
                gridLineColor: gridLineColor,
                lineColor: axisLineColor,
                tickColor: axisLineColor
            },
            legend: {
                itemStyle: {
                    color: 'var(--text-primary)'
                }
            },
            plotOptions: {
                series: {
                    borderWidth: 0
                },
                column: {
                    borderWidth: 0,
                    borderColor: 'transparent'
                },
                bar: {
                    borderWidth: 0,
                    borderColor: 'transparent'
                },
                pie: {
                    borderWidth: 0,
                    borderColor: 'transparent'
                },
                area: {
                    borderWidth: 0,
                    borderColor: 'transparent'
                },
                line: {
                    borderWidth: 0
                }
            }
        };
    }

    updateChartsForTheme(theme) {
        // Adjust colors for the new theme
        this.adjustColorsForTheme();
        
        // Recreate charts with theme-aware styling
        this.createCharts();
    }

    updateItemsCount(itemsCount) {
        this.currentItemsCount = itemsCount;
        this.createCharts(); // Recreate all charts with new item count
    }


    applyPreset(presetName) {
        if (!this.presets[presetName]) return;

        const preset = this.presets[presetName];
        this.currentPalette = JSON.parse(JSON.stringify(preset));
        
        // Store original colors for theme switching
        this.originalStandardColors = [...preset.standard];
        this.originalLightColors = [...preset.light];
        
        // Adjust colors based on theme
        this.adjustColorsForTheme();

        this.updateAllCharts();
    }

    adjustColorsForTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            // In dark mode, use predefined dark colors if available
            if (this.currentPalette.standardDark) {
                this.currentPalette.standard = [...this.currentPalette.standardDark];
            }
            if (this.currentPalette.lightDark) {
                this.currentPalette.light = [...this.currentPalette.lightDark];
            }
        } else {
            // In light mode, restore the original colors
            if (this.originalStandardColors) {
                this.currentPalette.standard = [...this.originalStandardColors];
            }
            if (this.originalLightColors) {
                this.currentPalette.light = [...this.originalLightColors];
            }
        }
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

        const chartConfig = {
            ...this.getChartThemeConfig(),
            chart: {
                ...this.getChartThemeConfig().chart,
                type: 'line'
            },
            title: {
                text: null
            },
            xAxis: {
                ...this.getChartThemeConfig().xAxis,
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: {
                ...this.getChartThemeConfig().yAxis,
                title: {
                    ...this.getChartThemeConfig().yAxis.title,
                    text: 'Values'
                }
            },
            legend: {
                ...this.getChartThemeConfig().legend,
                enabled: true
            },
            plotOptions: {
                line: {
                    marker: {
                        enabled: this.showShapes
                    }
                }
            },
            series: seriesData.slice(0, this.currentItemsCount),
            credits: {
                enabled: false
            }
        };

        this.charts.lineChart = Highcharts.chart('lineChart', chartConfig);
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
            ...this.getChartThemeConfig(),
            chart: {
                ...this.getChartThemeConfig().chart,
                type: 'column'
            },
            title: {
                text: null
            },
            xAxis: {
                ...this.getChartThemeConfig().xAxis,
                categories: ['Q1', 'Q2', 'Q3', 'Q4']
            },
            yAxis: {
                ...this.getChartThemeConfig().yAxis,
                title: {
                    ...this.getChartThemeConfig().yAxis.title,
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
            ...this.getChartThemeConfig(),
            chart: {
                ...this.getChartThemeConfig().chart,
                type: 'pie'
            },
            title: {
                text: null
            },
            plotOptions: {
                pie: {
                    borderWidth: 4,
                    borderColor: getComputedStyle(document.documentElement).getPropertyValue('--bg-page').trim() || '#F8F8F9',
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Share',
                data: pieData.slice(0, this.currentItemsCount),
                innerSize: '50%'
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
            ...this.getChartThemeConfig(),
            chart: {
                ...this.getChartThemeConfig().chart,
                type: 'area'
            },
            title: {
                text: null
            },
            xAxis: {
                ...this.getChartThemeConfig().xAxis,
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: {
                ...this.getChartThemeConfig().yAxis,
                title: {
                    ...this.getChartThemeConfig().yAxis.title,
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
            ...this.getChartThemeConfig(),
            chart: {
                ...this.getChartThemeConfig().chart,
                type: 'column'
            },
            title: {
                text: null
            },
            xAxis: {
                ...this.getChartThemeConfig().xAxis,
                categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
            },
            yAxis: {
                ...this.getChartThemeConfig().yAxis,
                title: {
                    ...this.getChartThemeConfig().yAxis.title,
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
        // Create multiple series data that respond to items toggle
        const barSeriesData = [
            { name: 'Q1 Revenue', data: [45.2, 89.1, 62.3, 134.7, 98.5, 156.2, 89.4, 123.8, 67.9, 145.6], color: this.currentPalette.light[0] },
            { name: 'Q2 Revenue', data: [67.8, 34.5, 178.9, 98.1, 145.3, 87.6, 201.2, 156.7, 89.3, 167.4], color: this.currentPalette.light[1] },
            { name: 'Q3 Revenue', data: [123.4, 156.8, 89.2, 67.1, 189.5, 134.2, 78.9, 198.3, 145.7, 89.6], color: this.currentPalette.light[2] }
        ];

        const lineData = [78.5, 123.2, 145.8, 89.3, 167.4, 134.1, 156.7, 98.2, 189.3, 123.8];

        // Adjust categories based on number of items
        const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
        const adjustedCategories = categories.slice(0, this.currentItemsCount * 2); // More data points than items

        this.charts.mixedChart = Highcharts.chart('mixedChart', {
            ...this.getChartThemeConfig(),
            title: {
                text: null
            },
            xAxis: {
                ...this.getChartThemeConfig().xAxis,
                categories: adjustedCategories
            },
            yAxis: [{
                ...this.getChartThemeConfig().yAxis,
                title: {
                    ...this.getChartThemeConfig().yAxis.title,
                    text: 'Revenue ($K)'
                }
            }, {
                ...this.getChartThemeConfig().yAxis,
                title: {
                    ...this.getChartThemeConfig().yAxis.title,
                    text: 'Target ($K)'
                },
                opposite: true
            }],
            series: [
                // Add bar series based on current items count
                ...barSeriesData.slice(0, this.currentItemsCount).map(series => ({
                    ...series,
                    type: 'column',
                    data: series.data.slice(0, adjustedCategories.length)
                })),
                // Add line series
                {
                    name: 'Target',
                    type: 'line',
                    yAxis: 1,
                    data: lineData.slice(0, adjustedCategories.length),
                    color: this.currentPalette.standard[3], // Use standard palette for darker line color
                    marker: {
                        enabled: this.showShapes
                    },
                    lineWidth: 3
                }
            ],
            credits: {
                enabled: false
            }
        });
    }

    createGoalChart() {
        this.charts.goalChart = Highcharts.chart('goalChart', {
            ...this.getChartThemeConfig(),
            chart: {
                ...this.getChartThemeConfig().chart,
                type: 'line'
            },
            title: {
                text: null
            },
            xAxis: {
                ...this.getChartThemeConfig().xAxis,
                categories: ['Q1', 'Q2', 'Q3', 'Q4']
            },
            yAxis: {
                ...this.getChartThemeConfig().yAxis,
                title: {
                    ...this.getChartThemeConfig().yAxis.title,
                    text: 'Performance'
                }
            },
            plotOptions: {
                ...this.getChartThemeConfig().plotOptions,
                line: {
                    ...this.getChartThemeConfig().plotOptions.line,
                    marker: {
                        enabled: this.showShapes
                    }
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
            ...this.getChartThemeConfig(),
            chart: {
                ...this.getChartThemeConfig().chart,
                type: 'column'
            },
            title: {
                text: null
            },
            xAxis: {
                ...this.getChartThemeConfig().xAxis,
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: {
                ...this.getChartThemeConfig().yAxis,
                title: {
                    ...this.getChartThemeConfig().yAxis.title,
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
            ...this.getChartThemeConfig(),
            chart: {
                ...this.getChartThemeConfig().chart,
                type: 'line'
            },
            title: {
                text: null
            },
            xAxis: {
                ...this.getChartThemeConfig().xAxis,
                categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6']
            },
            yAxis: {
                ...this.getChartThemeConfig().yAxis,
                title: {
                    ...this.getChartThemeConfig().yAxis.title,
                    text: 'PES Score'
                },
                min: 0,
                max: 100
            },
            plotOptions: {
                ...this.getChartThemeConfig().plotOptions,
                line: {
                    ...this.getChartThemeConfig().plotOptions.line,
                    marker: {
                        enabled: this.showShapes,
                        radius: this.showShapes ? 5 : 0
                    }
                }
            },
            series: [{
                name: 'Product Engagement Score',
                data: [65, 68, 72, 69, 75, 78],
                color: this.currentPalette.standard[0],
                lineWidth: 3
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
            ...this.getChartThemeConfig(),
            chart: {
                ...this.getChartThemeConfig().chart,
                type: 'area'
            },
            title: {
                text: null
            },
            xAxis: {
                ...this.getChartThemeConfig().xAxis,
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: {
                ...this.getChartThemeConfig().yAxis,
                title: {
                    ...this.getChartThemeConfig().yAxis.title,
                    text: 'Percentage'
                },
                labels: {
                    ...this.getChartThemeConfig().yAxis.labels,
                    format: '{value}%'
                }
            },
            plotOptions: {
                ...this.getChartThemeConfig().plotOptions,
                area: {
                    ...this.getChartThemeConfig().plotOptions.area,
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
            // Update all bar series to use light colors
            this.charts.mixedChart.series.forEach((series, index) => {
                if (series.type === 'column' && this.currentPalette.light[index]) {
                    series.update({ color: this.currentPalette.light[index] });
                } else if (series.type === 'line') {
                    // Keep line chart with standard color for contrast
                    series.update({ color: this.currentPalette.standard[3] });
                }
            });
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



    desaturateColor(color, percent) {
        const num = parseInt(color.slice(1), 16);
        const R = (num >> 16);
        const G = (num >> 8 & 0x00FF);
        const B = (num & 0x0000FF);
        
        // Calculate grayscale value using luminance formula
        const gray = Math.round(0.299 * R + 0.587 * G + 0.114 * B);
        
        // Blend each channel towards gray by the specified percentage
        const factor = percent / 100;
        const newR = Math.round(R + (gray - R) * factor);
        const newG = Math.round(G + (gray - G) * factor);
        const newB = Math.round(B + (gray - B) * factor);
        
        return "#" + (0x1000000 + newR * 0x10000 + newG * 0x100 + newB).toString(16).slice(1);
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
