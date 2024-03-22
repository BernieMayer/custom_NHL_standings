import logo from './logo.svg';
import './App.css';

const STANDINGS = [
  {conference: "Eastern", division:"Atlantic", name: "Boston Bruins", rank: "1", points: 97, wildcard: false},
  {conference:"Eastern", division:"Atlantic", name: "Florida Panthers", rank: "2", points: 94, wildcard: false },
  {conference:"Eastern", division:"Atlantic", name: "Toronto Maple Leafs", rank: "3", points: 85, wildcard: false},
  {conference:"Eastern", division:"Metropolitan", name: "New York Rangers", rank: "1", points: 94, wildcard: false},
  {conference:"Eastern", division:"Metropolitan", name: "Carolina Hurricanes", rank: "2", points: 92, wildcard: false},
  {conference:"Eastern", division:"Metropolitan", name: "Philadelphia Flyers", rank: "3", points: 78, wildcard: false},
  {conference:"Eastern", division:"", name: "Tampa Bay Lightning", rank: "1", points: 80, wildcard: true},
  {conference:"Eastern", division:"", name: "Detroit Red Wings", rank: "2", points: 76, wildcard: true},
  {conference:"Eastern", division:"", name: "Washington Capitals", rank: "3", points: 75, wildcard: true},
  {conference:"Eastern", division:"", name: "New York Islanders", rank: "4", points: 73, wildcard: true},
  {conference:"Eastern", division:"", name: "Buffalo Sabres", rank: "5", points: 71, wildcard: true},
  {conference:"Eastern", division:"", name: "New Jersey Devils", rank: "6", points: 70, wildcard: true},
  {conference:"Eastern", division:"", name: "Pittsburgh Penguins", rank: "7", points: 69, wildcard: true},
  {conference:"Western", division:"Central", name: "Winnipeg Jets", rank: "1", points: 93, wildcard: false},
  {conference:"Western", division:"Central", name: "Colorado Avalanche", rank: "2", points: 93, wildcard: false},
  {conference:"Western", division:"Central", name: "Dallas Stars", rank: "3", points: 93, wildcard: false},
  {conference:"Western", division:"Pacific", name: "Vancouver Canucks",rank: "1", points: 94, wildcard: false},
  {conference:"Western", division:"Pacific", name: "Edmonton Oilers", rank: "2", points: 86, wildcard: false},
  {conference:"Western", division:"Pacific", name: "Los Angeles Kings",rank: "3", points: 83, wildcard: false},  
]

function CustomNHLStandings({standings}) {
  return (
    <div>
      <EasternConfernceTable standings={standings} />
      <WesternConferenceTable />
    </div>
  )
}

function EasternConfernceTable({standings}) {
  const atlanticRows = [];
  const metropolitanRows = [];
  const wildcardRows = [];

  standings.forEach( (team) => {

      if (team.conference == "Eastern") {
        if (team.wildcard) {
          wildcardRows.push( <TeamRow team= {team} key= {team.name} />)
        } else if (team.division == "Atlantic") {
          atlanticRows.push( <TeamRow team={team} key={team.name} />)
        } else if (team.division == "Metropolitan") {
          metropolitanRows.push( <TeamRow team={team} key={team.name} />)
        }
      }
    
  });

  return (
    <div>
      <h1>Eastern</h1>
      <h3>Atlantic</h3>
      <table>
        <tr><th>Rank</th><th>Team</th><th>Points</th></tr>
        <tbody>{atlanticRows}</tbody>
      </table>

      <h3>Metropolitan</h3>
      <table>
        <tr><th>Rank</th> <th>Team</th><th>Points</th></tr>
        <tbody>{metropolitanRows}</tbody>
      </table>

      <h3>Wild Card</h3>
      <table>
        <tr><th>Rank</th> <th>Team</th><th>Points</th></tr>
        <tbody>{wildcardRows}</tbody>
      </table>
    </div>
  )
}

function TeamRow ( {team} ) {
  return (
    <tr> <td> { team.rank }</td> <td> {team.name}</td>  <td> {team.points} </td></tr>
  )
}

function WesternConferenceTable() {

}

function App() {
  return <CustomNHLStandings standings={STANDINGS} />; 
}

export default App;
