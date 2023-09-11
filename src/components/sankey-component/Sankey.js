import { useEffect, useState, useRef } from "react";
import Highcharts from 'highcharts'
import highchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from 'highcharts-react-official';
import { useTranslation } from 'react-i18next';


export default function Sankey({ title, data, onNodeSelected }) {



    highchartsSankey(Highcharts);

    // Translation
    const { t } = useTranslation();

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
        plotOptions: {
            sankey: {
                events: {
                    click: (event) => {
                        const { point } = event;
                        if (!point?.options?.id) {
                            onNodeSelected?.(point.options)
                        }

                    }
                }
            }
        },
        events: {
            click: (val) => {
                console.log(val)
            }
        },
        series: [{
            keys: ['from', 'to', 'weight'],
            data: [],
            type: 'sankey',
            name: t('sankey.expenseVisualization')
        }],


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
