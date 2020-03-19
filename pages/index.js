import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';


export default function IndexPage() {

  const mystyle = {
    color: "black",
    padding: "3vw",
    margin: "0",
    fontFamily:  "helvetica",
    display: "inline-block",
    overflow: "hidden"
  }

  return <div style={mystyle}>
  <h1>Covid19 Stats</h1>
  <h2>Global</h2>
  <Stats url='https://covid19.mathdro.id/api'></Stats>
  <CountrySelector></CountrySelector>
  </div>
}
