import React from 'react';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/layout';
import SEO from '../components/seo';

import data from '../data/understudy.yml';

function UnderstudyPage() {
    return (
        <Layout>
            <SEO keywords={[`sysadmins`, `understudy`, `join`]} title="Understudy" />

            <section className="p-12 transition">
                <h1 className="text-3xl uppercase mb-6">Understudy</h1>
                <ReactMarkdown className="transition mb-6 content" source={data.body} />
            </section>
        </Layout>
    );
}

export default UnderstudyPage;
