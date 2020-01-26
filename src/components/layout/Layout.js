import Header from "../header";

export const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className="container">
                {children}
            </div>
        </>
    )
};