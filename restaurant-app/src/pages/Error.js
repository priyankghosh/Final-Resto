import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section errImg'>
      {/* <h2>OOPs Page Not Found !!!</h2> */}
      {/* <img src='https://c.tenor.com/IHdlTRsmcS4AAAAC/404.gif' /> */}
      <img src='https://cdn.dribbble.com/users/469578/screenshots/2597126/404-drib23.gif' height={"390"} />
      {/* <p>page not found</p> */}
      <p>
        <br />
        <Link to='/'>Back Home</Link>
      </p>
      <p>
        <Link to='/Login'>Return to Login</Link>
      </p>

    </section>
  );
};
export default Error;