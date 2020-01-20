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

            <section className="my-6">
                <h1 className="text-3xl uppercase mb-6">Services</h1>
                <div className="flex flex-wrap -mx-3">
                    {data.services.map(service => (
                        <div className="cursor-pointer w-full md:w-1/3 px-3 mb-6">
                            <a
                                className="block border-2 hover:border-blue border-gray-300 shadow p-6"
                                href={service.link}>
                                <h3 className="text-2xl mb-3">{service.name}</h3>
                                <ReactMarkdown source={service.summary} />
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
}

export default IndexPage;
