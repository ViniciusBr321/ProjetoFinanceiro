import React from 'react';
import "./homerightbar.css"
import Navbar from "../Navbar"
import { Cell, PieChart, Pie, ComposedChart, Bar, BarChart, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function HomeRightbar() {
  const data7 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 8800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
  ]

  const data2 = [
    {
      "name": "Page A",
      "uv": 5000,
      "pv": 3500,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 5500,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

  const data3 = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2400,
      "pv": 2600,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 3780,
      "pv": 2908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 4290,
      "pv": 2500,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 2000,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

  const data4 = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },


  ]

  const data6 = [
    {
      "name": "Jan",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Fev",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Abr",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Maio",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Jun",
      "uv": 2390,
      "pv": 2400,
      "amt": 2500
    },
    {
      "name": "Jul",
      "uv": 3490,
      "pv": 7000,
      "amt": 2100
    },
    {
      "name": "Ago",
      "uv": 2390,
      "pv": 2400,
      "amt": 2500
    },
    {
      "name": "Set",
      "uv": 2390,
      "pv": 3400,
      "amt": 2500
    },
    {
      "name": "Out",
      "uv": 2390,
      "pv": 4000,
      "amt": 2500
    },
    {
      "name": "Nov",
      "uv": 2390,
      "pv": 4800,
      "amt": 2500
    },
    {
      "name": "Dez",
      "uv": 2300,
      "pv": 9000,
      "amt": 2500
    },
  ]

  return (
    <div className='mainHomeRightbar'>
      <Navbar />
      <div>
        <div className='ItemContainer'>
          <div className='ItemContainer1'>
            <div className='subitemContainer'>
              <p className='taskProgress'>Contas a pagar</p>
              <p className='taskCounter'>21</p>
              <p className='currentmonth1'>Semanal</p>
            </div>
            <div className='barchartContainer'>
              <BarChart width={175} height={110} data={data}>
                <Tooltip />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
          <div className='ItemContainer1'>
            <div className='subitemContainer'>
              <p className='taskProgress'>Contas a receber</p>
              <p className='taskCounter2'>32</p>
              <p className='currentmonth1'>Semanal</p>
            </div>
            <div className='barchartContainer'>
              <BarChart width={175} height={110} data={data2}>
                <Tooltip />
                <Bar dataKey="pv" fill="#82ca9d" />
                <Bar dataKey="" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
          <div className='ItemContainer1'>
            <div className='subitemContainer'>
              <p className='taskProgress'>Pagar/Receber</p>
              <p className='taskCounter3'>53</p>
              <p className='currentmonth1'>Semanal</p>
            </div>
            <div className='barchartContainer2'>
              <LineChart width={200} height={110} data={data3}
                margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </div>
          </div>
          <div className='MiddleTaskChart'>
            <div>
              <p className='TaskCreated'>Pagar/Receber</p>
            </div>
            <AreaChart width={1087} height={190} data={data4}
              margin={{ top: 10, right: 20, left: 50, bottom: 10 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
              <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
          </div>
          <div className='TasksContainer'>
            <div className='TaskChart'>
              <p className='taskContainerText'>Relatorio Clientes</p>
              <PieChart width={280} height={200}>
                <Pie
                  data={data7}
                  cx={165}
                  cy={130}
                  startAngle={180}
                  endAngle={0}
                  innerRadius={50}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
              <p className='pieChartText'>8% dos clientes deixaram de fazer notinha este mês</p>
            </div>
            <div className='MonthlyEarning'>
              <p className='taskContainerText'>Pagar/Receber Anual</p>
              <div className='chartDirection'>
                <ComposedChart width={770} height={200} data={data6}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                  <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}