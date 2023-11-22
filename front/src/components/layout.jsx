    import PropTypes from 'prop-types';
    import HomeNavbar from './HomeNavbar';
    import HomeFooter from './HomeFooter';

    const Layout = ({ children }) => (
    <div className="flex flex-col min-h-screen">
        <HomeNavbar />
        <main className="flex-1">{children}</main>
        <HomeFooter />
    </div>
    );

    Layout.propTypes = {
    children: PropTypes.node.isRequired,
    };

    export default Layout;
