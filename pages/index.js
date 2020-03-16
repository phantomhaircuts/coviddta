import useStats from '../utils/useStats';
import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'

export default function IndexPage() {

  const mystyle = {
    color: "black",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily:  "monospace"
  }

  return <div style={mystyle}>
  <Stats url='https://covid19.mathdro.id/api'></Stats>
  </div>
}
