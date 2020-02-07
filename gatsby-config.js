module.exports = {
    siteMetadata: {
        title: `tjCSL Sysadmins`,
        description: `Official website of Thomas Jefferson High School for Science and Technology's systems administrator team.`,
        author: `tjCSL`,
        siteUrl: `https://sysadmins.tjhsst.edu`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `tjCSL Sysadmins`,
                short_name: `Sysadmins`,
                start_url: `/`,
                background_color: `#f2f7ff`,
                theme_color: `#0048AB`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`
            }
        },
        `gatsby-plugin-postcss`,
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/data`
            }
        },
        'gatsby-plugin-sitemap',
        'gatsby-plugin-robots-txt'
    ]
};
