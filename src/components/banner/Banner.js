export const Banner = () => {
    return (
        <section className="hero is-info is-large">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-primary">
                        Success!
                    </h1>
                    <h2 className="subtitle">
                        You have successfully accessed a protected route.
                        A JWT token is stored in cookies. Go check it out.
                    </h2>
                </div>
            </div>
        </section>
    );
};