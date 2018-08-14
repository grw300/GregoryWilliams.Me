import React from "react";
import Helmet from "react-helmet";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";
import "./index.css";
import { Grid, HeaderArea, FooterArea, SidebarArea, ContentArea } from "./grid";

export default class MainLayout extends React.Component {
    getLocalTitle() {
        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        const currentPath = this.props.location.pathname.replace("/", "");
        let title = "";
        if (currentPath === "") {
            title = "Home";
        } else if (currentPath === "tags/") {
            title = "Tags";
        } else if (currentPath === "categories/") {
            title = "Categories";
        } else if (currentPath === "about/") {
            title = "About";
        } else if (currentPath.indexOf("posts")) {
            title = "Article";
        } else if (currentPath.indexOf("tags/")) {
            const tag = currentPath
                .replace("tags/", "")
                .replace("/", "")
                .replace("-", " ");
            title = `Tagged in ${capitalize(tag)}`;
        } else if (currentPath.indexOf("categories/")) {
            const category = currentPath
                .replace("categories/", "")
                .replace("/", "")
                .replace("-", " ");
            title = `${capitalize(category)}`;
        }
        return title;
    }
    render() {
        const { children } = this.props;
        return (
            <div>
                <Helmet>
                    <title>
                        {`${config.siteTitle} |  ${this.getLocalTitle()}`}
                    </title>
                    <meta name="description" content={config.siteDescription} />
                </Helmet>
                <SEO />
                <Grid>
                    <HeaderArea>
                        <Header />
                    </HeaderArea>
                    <SidebarArea>
                        <Sidebar config={config} />
                    </SidebarArea>
                    <ContentArea>{children}</ContentArea>
                    <FooterArea>
                        <Footer config={config} />
                    </FooterArea>
                </Grid>
            </div>
        );
    }
}
