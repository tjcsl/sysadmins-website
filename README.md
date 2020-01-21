# Website - Sysadmins

Official website of Thomas Jefferson High School for Science and Technology's systems administrator team.

## Architecture

The sysadmins' site is built using React and Gatsby. YAML files serve as the content management system.

## Development

1. Install the required dependencies

    ```shell
    npm install
    ```

2. Start the server

    Navigate into the source code folder and start the development server.

    ```shell
    gatsby develop
    ```

3. Edit code

    The site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

4. Build and serve for production

    When you're ready to build for production, stop the development server.

    ```shell
    gatsby build && gatsby serve
    ```

    The production server is running at `http://localhost:9000`!

## Content Management

This site stores content in the form of YAML files, located in _src/data_.
After editing the data, make sure to restart the production server.
