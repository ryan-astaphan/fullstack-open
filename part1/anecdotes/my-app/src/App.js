import { useState } from 'react'

const DailyAnecdote = ({ anecdotes, selected, votes }) => {
  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </>
  )
}

const MostVotedAnecdote = ({ anecdotes, votes }) => {
  let arr = Object.values(votes);
  let max = Math.max(...arr)
  let index = arr.findIndex((element, index) => element === max)

  // if (max > 0) {
  return (
    <>
      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[index]}</p>
      <p>has {max} votes</p>
      {/* <button onClick={() => console.log(arr)}>Log arr</button>
      <button onClick={() => console.log(max)}>Log max</button>
      <button onClick={() => console.log(index)}>Log index</button> */}
    </>
  )
  // }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0
  })

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * 7);
    setSelected(randomIndex)
    console.log(selected);
  }

  const handleVote = () => {
    const obj = { ...votes }
    obj[selected] += 1
    setVotes(obj)
  }

  return (
    <div>
      <DailyAnecdote anecdotes={anecdotes} selected={selected} votes={votes} />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleRandom}>next anecdote</button>
      {/* <button onClick={() => console.log(votes[selected])}>Log votes for current anecdote</button> */}
      <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App