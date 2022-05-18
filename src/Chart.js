import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import moment from "moment";
// Generate Sales Data
function createData(dt, amount) {
  return { dt, amount };
}

const data = [
  createData(moment(new Date("2022-05-10")).unix(), 1958.65),
  createData(moment(new Date("2022-05-11")).unix(), 1958.65),
  createData(moment(new Date("2022-05-12")).unix(), 1958.65),
  createData(moment(new Date("2022-05-13")).unix(), 942.85),
  createData(moment(new Date("2022-05-14")).unix(), 942.85),
  createData(moment(new Date("2022-05-15")).unix(), 5899.42),
  createData(moment(new Date("2022-05-16")).unix(), 5899.42),
  createData(moment(new Date("2022-05-17")).unix(), 5899.42),
  createData(moment(new Date("2022-05-18")).unix(), 5899.42),
];

export default function Chart() {
  const theme = useTheme();

  const formatXAxis = (tickFormat) => {
    return moment.unix(tickFormat).format("DD/MM/YYYY");
  };
  
  return (
    <React.Fragment>
      <Title></Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="dt"
            tickFormatter={(tick) => formatXAxis(tick)}
            type={"category"}
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Balance (AUD)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
