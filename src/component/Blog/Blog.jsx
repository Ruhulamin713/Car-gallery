import React from "react";

const Blog = () => {
  return (
    <div className="mt-5 pt-4 mx-auto w-75 text-start">
      <div>
        <h1>Difference between JavaScript and Nodejs</h1>
        <ol>
          <li>
            Javascript is a programming language that is used for writing
            scripts on the website. NodeJS is a Javascript runtime environment.
          </li>
          <li>
            Javascript can only be run in the browsers. We can run Javascript
            outside the browser with the help of NodeJS.
          </li>
          <li>
            {" "}
            It is basically used on the client-side. It is mostly used on the
            server-side.
          </li>
          <li>
            Javascript is capable enough to add HTML and play with the DOM.
            Nodejs does not have capability to add HTML tags.{" "}
          </li>
          <li>
            {" "}
            Javascript can run in any browser engine as like JS core in safari
            and Spidermonkey in Firefox. V8 is the Javascript engine inside of
            node.js that parses and runs Javascript.
          </li>
          <li>
            {" "}
            Javascript is used in frontend development. Nodejs is used in
            server-side development.{" "}
          </li>
          <li>
            {" "}
            Some of the javascript frameworks are RamdaJS, TypedJS, etc. Some of
            the Nodejs modules are Lodash, express etc. These modules are to be
            imported from npm.{" "}
          </li>
          <li>
            {" "}
            It is the upgraded version of ECMA script that uses Chrome’s V8
            engine written in C++. Nodejs is written in C, C++ and Javascript.
          </li>
        </ol>
      </div>
      <div>
        <h1>When to use NodeJs</h1>
        <ol>
          <li>For real time messaging,chatting.</li>
          <li>For IOT development projects</li>
          <li>for streaming application.</li>
          <li>When scalability is required.</li>
        </ol>
      </div>
      <div>
        <h1>Difference between SQL and NoSQL Database.</h1>
        <ol>
          <li>
            SQL databases are called Relational Databases and NoSQL database are
            non-relational or distributed database.{" "}
          </li>
          <li>
            SQL databases are vertically scalable. but NoSQL databases are
            horizontally scalable
          </li>
          <li>
            SQL databases are table-based on the other hand NoSQL databases are
            either key-value pairs
          </li>
          <li>
            SQL databases follow ACID properties (Atomicity, Consistency,
            Isolation and Durability) whereas the NoSQL database follows the
            Brewers CAP theorem (Consistency, Availability and Partition
            tolerance).{" "}
          </li>
        </ol>
      </div>
      <div>
        <h1>what is jwt?</h1>
        <p>
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object.
        </p>
      </div>
    </div>
  );
};

export default Blog;
