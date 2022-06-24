import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Layout from '../components/Layout';

const Football = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  let i = 0;

  useEffect(() => {
    setLoading(true);
    fetch('http://38.242.211.41:5010/WeatherForecast/GetTodaysGames')
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setTimeout(function () {
          setLoading(false);
        }, 3000);
      });
  }, []);

  if (isLoading)
    return (
      <div
        style={{ height: '100vh', display: 'flex' }}
        className="flex-row justify-content-center align-items-center"
      >
        <Circles height="150" width="150" color="yellow" ariaLabel="loading" />
      </div>
    );
  if (!data) return <p>No data</p>;
  let matches = Object.keys(data);
  // console.log(matches);

  return (
    <Layout title={'Football'} breadcrums={'Football'}>
      <div className="container-fluid">
        <div style={{ overflowX: 'scroll' }}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Home Team</th>
                <th scope="col">Away Team</th>
                <th scope="col">Team</th>
                <th scope="col">DNB</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((item) => {
                let match = data[item];
                // console.log(match.homeTeamOdd);
                if (match.homeTeamOdd !== 0 || match.awayTeamOdd !== 0) {
                  return (
                    <tr key={i}>
                      <th scope="row">{i++}</th>
                      <td>{match.homeTeamTitle}</td>
                      <td>{match.awayTeamTitle}</td>
                      <td>
                        {match.homeTeamOdd == 0
                          ? match.awayTeamOdd
                          : match.homeTeamOdd}
                      </td>
                      <td>
                        {match.homeTeamDNBOdd == 0
                          ? match.awayTeamDNBOdd
                          : match.homeTeamDNBOdd}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Football;
