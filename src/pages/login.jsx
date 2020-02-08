import Layout from '../components/layout';
import Submit from '../components/button';
import useSubmit from '../components/button/helpers';

const login = () => {
  const [handleSubmit] = useSubmit();

  return (
    <Layout>
      <Submit handleSubmit={handleSubmit} />
    </Layout>
  );
};

export default login;
