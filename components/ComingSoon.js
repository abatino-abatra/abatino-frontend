import { TailSpin } from 'react-loader-spinner';

const ComingSoon = () => {
  return (
    <div
      style={{ height: '100vh', display: 'flex' }}
      className="flex-column justify-content-center align-items-center"
    >
      <h1>Coming Soon!!</h1>
      <br />
      <br />
      <TailSpin color="yellow" height={80} width={80} />
    </div>
  );
};

export default ComingSoon;
