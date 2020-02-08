export const Submit = (props) => {
  const customColumn = {
    minHeight: '50vh',
  };

  return (
    <div className="columns is-centered is-vcentered" style={customColumn}>
      <div className="column is-half has-text-centered">
        <button onClick={props.handleSubmit} className="button is-large is-primary is-rounded">
          Login
        </button>
      </div>

    </div>
  );
};
