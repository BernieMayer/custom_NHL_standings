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
  {conference:"Western", division:"", name: "Nashville Predators", rank: "1", points: 86, wildcard: true  },
  {conference:"Western", division:"", name:"Vegas Golden Knights", rank: "2", points: 81, wildcard: true },
  {conference:"Western", division:"", name:"St. Louis Blues", rank:"3", points: 77, wildcard: true},
  {conference:"Western", division:"", name:"Minnesota Wild", rank: "4", points: 76, wildcard: true},
  {conference:"Western", division:"", name:"Calgary Flames", rank: "5", points: 71, wildcard: true},
  {conference:"Western", division:"", name:"Seattle Kraken", rank: "6", points: 68, wildcard: true},
  {conference:"Western", division:"", name:"Arizona Coyotes", rank: "7", points: 61, wildcard: true},
  {conference:"Western", division:"", name:"Anaheim Ducks", rank: "8", points: 51, wildcard: true},
  {conference:"Western", division:"", name:"Chicago Blackhawks", rank: "9", points: 43, wildcard: true},
  {conference:"Western", division:"", name:"San Jose Sharks", rank: "10", points: 39, wildcard: true},



]
/*
  [6,"","Seattle Kraken",68,28,28,12,68,0.5,22,25,183,199,-16,"14-15-6","14-13-6","3-4","3-6-1","L4"  ],
  [7,"","Arizona Coyotes",69,28,36,5,61,0.442,23,26,203,229,-26,"17-16-0","11-20-5","2-0","5-5-0","L1"  ],
  [8,"","Anaheim Ducks",70,24,43,3,51,0.364,18,23,175,252,-77,"11-24-1","13-19-2","1-1","2-8-0","W1"  ],
  [9,"","Chicago Blackhawks",70,19,46,5,43,0.307,14,18,152,252,-100,"14-18-4","5-28-1","1-1","4-6-0","L2"  ],
  [10,"","San Jose Sharks",69,16,46,7,39,0.283,12,15,151,280,-129,"10-20-3","6-26-4","1-5","1-8-1","L6"  ]
]
  
]*/

function CustomNHLStandings({standings}) {
  return (
    <div>
      <EasternConfernceTable standings={standings} />
      <WesternConferenceTable standings={standings} />
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

function WesternConferenceTable({standings}) {
  const centralRows = [];
  const pacificRows = [];
  const wildcardRows = [];

  standings.forEach( (team) => {

    if (team.conference == "Western") {
      if (team.wildcard) {
        wildcardRows.push( <TeamRow team= {team} key= {team.name} />)
      } else if (team.division == "Central") {
        centralRows.push( <TeamRow team={team} key={team.name} />)
      } else if (team.division == "Pacific") {
        pacificRows.push( <TeamRow team={team} key={team.name} />)
      }
    }
});

return (
  <div>
    <h1>Western</h1>
    <h3>Central</h3>
    <table>
      <tr><th>Rank</th><th>Team</th><th>Points</th></tr>
      <tbody>{centralRows}</tbody>
    </table>

    <h3>Pacific</h3>
    <table>
      <tr><th>Rank</th> <th>Team</th><th>Points</th></tr>
      <tbody>{pacificRows}</tbody>
    </table>

    <h3>Wild Card</h3>
    <table>
      <tr><th>Rank</th> <th>Team</th><th>Points</th></tr>
      <tbody>{wildcardRows}</tbody>
    </table>
  </div>
)


}

function App() {
  return <CustomNHLStandings standings={STANDINGS} />; 
}

export default App;
