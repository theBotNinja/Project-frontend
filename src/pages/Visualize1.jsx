// File: FemaleVictimVisualizer.jsx
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/Visualize1.css";

const Visualize1 = () => {
  const [femaleData, setFemaleData] = useState([]);
  const [totalChartData, setTotalChartData] = useState([]);
    const [seedatabtn,setbtn] = useState(false); 
  useEffect(() => {
    Papa.parse("NCRB-2021_Table_2D.2.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const d = result.data.filter((row) => row["City Col. (2)"]);
        const data = d.slice(0,19)
        // Extract only columns related to FEMALE
        let formatted = data.map((row) => ({
          city: row["City Col. (2)"],
          below6: Number(
            row["Child Victims - Below 6 Years - Female - Col. (4)"] || 0
          ),
          age6to12: Number(
            row["Child Victims - 6 Years to 12 Years - Female - Col. (8)"] || 0
          ),
          age12to16: Number(
            row["Child Victims - 12 Years to 16 Years - Female - Col. (12)"] ||
              0
          ),
          age16to18: Number(
            row["Child Victims - 16 Years to 18 Years - Female - Col. (16)"] ||
              0
          ),
          childTotal: Number(
            row["Child Victims - Total Child Victims - Female - Col. (20)"] || 0
          ),
          adult18to30: Number(
            row["Adult Victims - 18 Years to 30 Years - Female - Col. (24)"] ||
              0
          ),
          adult30to60: Number(
            row["Adult Victims - 30 Years to 60 Years - Female - Col. (28)"] ||
              0
          ),
          adult60plus: Number(
            row["Adult Victims - 60 Years & above - Female - Col. (32)"] || 0
          ),
          adultTotal: Number(
            row["Adult Victims - Total Adult Victims - Female - Col. (36)"] || 0
          ),
          totalFemale: Number(
            row["Total Victims (Child + Adult) - Female - Col. (40)"] || 0
          ),
        }));
        setFemaleData(formatted);

        // Prepare data for total female victims comparison
        const total = formatted.map((row) => ({
          city: row.city,
          totalFemale: row.totalFemale,
        }));
        setTotalChartData(total);
      },
    });
  }, []);

  return (
    <div className="female-dashboard">
      <h1>NCRB 2021 — Female Victim Statistics Dashboard</h1>

      {/* Total Female Victims Chart */}
      <section className="chart-section">
        <h2>Total Female Victims per City</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={totalChartData}
            margin={{ top: 20, right: 30, left: 10, bottom: 80 }}
          >
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis  tick={{ fill: "black",fontWeight:"Bold", fontSize: 14 }} dataKey="city" angle={-45} textAnchor="end" height={150} />
            <YAxis  tick={{ fill: "black",fontWeight:"Bold", fontSize: 14 }} />
            <Bar dataKey="totalFemale" fill="#a246ffff" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Age Group-wise Female Victims Chart */}
      <section className="chart-section" >
        <h2>Female Victims by Age Group (per City)</h2>
        <ResponsiveContainer width="100%" height={600}>
          <BarChart
            data={femaleData}
            margin={{ top: 20, right: 30, left: 10, bottom: 80 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tick={{ fill: "black",fontWeight:"Bold", fontSize: 14 }} dataKey="city" angle={-45} textAnchor="end" height={200} />
            <YAxis tick={{ fill: "black",fontWeight:"Bold", fontSize: 14 }} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="below6"
              stackId="a"
              fill="rgba(153, 0, 255, 1)"
              name="Below 6 Years"
            />
            <Bar
              dataKey="age6to12"
              stackId="a"
              fill="rgba(202, 122, 255, 1)"
              name="6–12 Years"
            />
            <Bar
              dataKey="age12to16"
              stackId="a"
              fill="rgba(223, 174, 255, 1)"
              name="12–16 Years"
            />
            <Bar
              dataKey="age16to18"
              stackId="a"
              fill="rgba(34, 0, 56, 1)"
              name="16–18 Years"
            />
            <Bar
              dataKey="adult18to30"
              stackId="a"
              fill="rgba(74, 36, 100, 1)"
              name="18–30 Years"
            />
            <Bar
              dataKey="adult30to60"
              stackId="a"
              fill="rgba(65, 47, 76, 1)"
              name="30–60 Years"
            />
            <Bar
              dataKey="adult60plus"
              stackId="a"
              fill="rgba(45, 39, 49, 1)"
              name="60+ Years"
            />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Raw Data Table */}
      <section className="table-section" style={{display:`${seedatabtn?"":"none"}`}}>
        <h2>Detailed Female Victim Data</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>City</th>
                <th>Below 6 Years</th>
                <th>6–12 Years</th>
                <th>12–16 Years</th>
                <th>16–18 Years</th>
                <th>Child Total</th>
                <th>18–30 Years</th>
                <th>30–60 Years</th>
                <th>60+ Years</th>
                <th>Adult Total</th>
                <th>Total Female Victims</th>
              </tr>
            </thead>
            <tbody>
              {femaleData.map((row, i) => (
                <tr key={i}>
                  <td>{row.city}</td>
                  <td>{row.below6}</td>
                  <td>{row.age6to12}</td>
                  <td>{row.age12to16}</td>
                  <td>{row.age16to18}</td>
                  <td>{row.childTotal}</td>
                  <td>{row.adult18to30}</td>
                  <td>{row.adult30to60}</td>
                  <td>{row.adult60plus}</td>
                  <td>{row.adultTotal}</td>
                  <td>{row.totalFemale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <button type="button" className="clickbtn seebtncss" onClick={()=>{seedatabtn?setbtn(false):setbtn(true)}} >{`${seedatabtn?"Remove":"See"}`} table</button>
    </div>
  );
};

export default Visualize1;
