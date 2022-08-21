import { Pie, PieChart,
    CartesianGrid,
    Tooltip,
    Legend } from 'recharts';

const MyPie = ({data, xValue, barData}) => {
    // const data = [
    //     {
    //       name: "Jan",
    //       nominees: 4000,
    //       amt: 2400
    //     },
    //     {
    //       name: "Feb",
    //       nominees: 3000,
    //       amt: 2210
    //     },
    //     {
    //       name: "Mar",
    //       nominees: 2000,
    //       amt: 2290
    //     },
    //     {
    //       name: "Apr",
    //       nominees: 2780,
    //       amt: 2000
    //     },
    //     {
    //       name: "May",
    //       nominees: 1890,
    //       amt: 2181
    //     },
    //     {
    //       name: "Jun",
    //       nominees: 2390,
    //       amt: 2500,
    //       y:'count'
    //     },
    //     {
    //       name: "Jul",
    //       nominees: 3490,
    //       amt: 2100
    //     }
    //   ];
    
      return(
        <PieChart width={330} height={250} >
            <Tooltip />   
            <CartesianGrid strokeDasharray="5 6" />
            <Legend payload={[{ value: 'Nominees', type: 'circle', color: "#F44336", id: 'amt' },/*{ value: 'Payments(GHS)', type: 'circle', color: "#448AFF", id: 'name' }*/]}/>
            <Pie data={data} dataKey={xValue} nameKey={barData} cx="50%" cy="50%" outerRadius={80} fill="#F44336" label/>
            <Pie data={data} dataKey={barData} nameKey={xValue} cx="50%" cy="50%" innerRadius={50} outerRadius={70} fill="#E91E63"  label/>
        </PieChart>
      )
};


export default MyPie;