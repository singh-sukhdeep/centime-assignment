import { useEffect, useState ,useRef} from "react";
import Highcharts from 'highcharts'
import highchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from 'highcharts-react-official';


export default function Sankey({ title, data }) {



    highchartsSankey(Highcharts);


    // Use Ref
    const chartComponent = useRef(null);

    // Use State
    const [chartOptions, setChartOptions] = useState({
        title: {
            text: title
        },
        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
            }
        },
        series: [{
            keys: ['from', 'to', 'weight'],
            data: [],
            type: 'sankey',
            name: 'Expense Visulaization'
        }]

    })


    useEffect(() => {

        setChartOptions((state) => {
            state.title.text = title;
            state.series[0].data = data;
            // Return updated State
            return {
                ...state
            }
        })
    }, [title, data]);




    return (
        <HighchartsReact ref={chartComponent} highcharts={Highcharts} options={chartOptions} />
    )
}



// ['Brazil', 'Portugal', 5],
//                 ['Brazil', 'France', 1],
//                 ['Brazil', 'Spain', 1],
//                 ['Brazil', 'England', 1],
//                 ['Canada', 'Portugal', 1],
//                 ['Canada', 'France', 5],
//                 ['Canada', 'England', 1],
//                 ['Mexico', 'Portugal', 1],
//                 ['Mexico', 'France', 1],
//                 ['Mexico', 'Spain', 5],
//                 ['Mexico', 'England', 1],
//                 ['USA', 'Portugal', 1],
//                 ['USA', 'France', 1],
//                 ['USA', 'Spain', 1],
//                 ['USA', 'England', 5],
//                 ['Portugal', 'Angola', 2],
//                 ['Portugal', 'Senegal', 1],
//                 ['Portugal', 'Morocco', 1],
//                 ['Portugal', 'South Africa', 3],
//                 ['France', 'Angola', 1],
//                 ['France', 'Senegal', 3],
//                 ['France', 'Mali', 3],
//                 ['France', 'Morocco', 3],
//                 ['France', 'South Africa', 1],
//                 ['Spain', 'Senegal', 1],
//                 ['Spain', 'Morocco', 3],
//                 ['Spain', 'South Africa', 1],
//                 ['England', 'Angola', 1],
//                 ['England', 'Senegal', 1],
//                 ['England', 'Morocco', 2],
//                 ['England', 'South Africa', 7],
//                 ['South Africa', 'China', 5],
//                 ['South Africa', 'India', 1],
//                 ['South Africa', 'Japan', 3],
//                 ['Angola', 'China', 5],
//                 ['Angola', 'India', 1],
//                 ['Angola', 'Japan', 3],
//                 ['Senegal', 'China', 5],
//                 ['Senegal', 'India', 1],
//                 ['Senegal', 'Japan', 3],
//                 ['Mali', 'China', 5],
//                 ['Mali', 'India', 1],
//                 ['Mali', 'Japan', 3],
//                 ['Morocco', 'China', 5],
//                 ['Morocco', 'India', 1],
//                 ['Morocco', 'Japan', 3]