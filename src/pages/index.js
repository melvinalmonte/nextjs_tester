import Layout from "../components/layout";
import Banner from "../components/banner";
import {handleAuthSSR} from "../utils/auth";

const index = () => {
    return (
        <Layout>
            <Banner/>
        </Layout>
    );
};

// Server-Side Rendering
index.getInitialProps = async (ctx) => {
    // Must validate JWT
    // If the JWT is invalid it must redirect
    // back to the main page. You can do that
    // with Router from 'next/router
    await handleAuthSSR(ctx);

    // Must return an object
    return {}
};

export default index;
