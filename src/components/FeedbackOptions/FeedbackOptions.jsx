export const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;

  return (
    <>
      <ul>
        {Object.keys(options).map(keys => (
          <li>
            <button name={keys} onClick={onLeaveFeedback}>
              {keys}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
