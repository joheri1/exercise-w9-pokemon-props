export const Weaknesses = ({ weaknesses }) => {
    return (
      <div>
        {weaknesses.map((weakness, index) => (
          <div key={index}>{weakness}</div>
        ))}
      </div>
    )
  }