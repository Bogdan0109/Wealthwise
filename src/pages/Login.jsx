import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Main } from '../components/Main/Main';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Wealthwi$e</title>
      </Helmet>
      <Main>
        <LoginForm />
      </Main>
    </>
  );
}
