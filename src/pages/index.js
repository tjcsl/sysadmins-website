import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/layout';
import SEO from '../components/seo';

import data from '../data/index.yml';

function IndexPage() {
    return (
        <Layout>
            <SEO keywords={[`sysadmins`, `home`, `index`, `about`]} title="Home" />

            <section>
                <ReactMarkdown source={data.summary} />
            </section>
        </Layout>
    );
}

export default IndexPage;
