import React from "react";

const Blogs = () => {
  return (
    <div className="card  shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          How will you improve the performance of a React Application?
        </h2>
        <p>
          <span className="text-xl font-bold">
            1. Using Immutable Data Structures <br />
            2. Function/Stateless Components and React.PureComponent <br />
            3. Multiple Chunk Files <br />
            4.Dependency optimization <br />
            5. Use React.Fragments to Avoid Additional HTML Element Wrappers{" "}
            <br />
            6. Avoid Inline Function Definition in the Render Function. <br />
            7. Avoid using Index as Key for map <br />
            8. Avoiding Props in Initial States <br />
            9.Spreading props on DOM elements <br />
            10.Use Reselect in Redux to Avoid Frequent Re-render <br />
          </span>
        </p>
      </div>
      <div>
        <div className="card shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              <span className="text-xl font-bold">
                1.Local state <br /> 2.Global state <br /> 3.Server state <br />{" "}
                4.URL state
              </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="card shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              How does prototypical inheritance work?
            </h2>
            <p>
              <span className="text-xl font-bold">
                prototypical inheritance refers to the ability to access object
                properties from another object. We use a JavaScript prototype to
                add new properties and methods to an existing object
                constructor. We can then essentially tell our JS code to inherit
                properties from a prototype. Prototypical inheritance allows us
                to reuse the properties or methods from one JavaScript object to
                another through a reference pointer function. <br />
                In a class-based model, you have Classes, which are represented
                by the triple “Parents, Variables, Methods”. Where: Parents is
                the list of classes youre extending. Classes may only extend
                other classes; Variables is the number of variable slots that
                instances will have. For example, a “class Point2d(int x, int y)
                ” has 2 instance variables; Methods is a table of “name →
                function” that describes which services each instance of the
                class will support;
              </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="card shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              Why you do not set the state directly in React.
            </h2>
            <p>
              <span className="text-xl font-bold">
                One should never update the state directly because of the
                following reasons: <br /> 1.If you update it directly, calling
                the setState() afterward may just replace the update you made.{" "}
                <br /> 2.When you directly update the state, it does not change
                this.state immediately. Instead, it creates a pending state
                transition, and accessing it after calling this method will only
                return the present value. <br /> 3. You will lose control of the
                state across all components.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="card shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What is a unit test? Why should write unit tests?
            </h2>
            <p>
              <span className="text-xl font-bold">
                <small>
                  A unit test is a way of testing a unit - the smallest piece of
                  code that can be logically isolated in a system. In most
                  programming languages, that is a function, a subroutine, a
                  method or property. The isolated part of the definition is
                  important. In his book "Working Effectively with Legacy Code",
                  author Michael Feathers states that such tests are not unit
                  tests when they rely on external systems: “If it talks to the
                  database, it talks across the network, it touches the file
                  system, it requires system configuration, or it can't be run
                  at the same time as any other test."
                </small>
                <br />
                1.Unit tests save time and money. Usually, we tend to test the
                happy path more than the unhappy path. If you release such an
                app without thorough testing, you would have to keep fixing
                issues raised by your potential users. The time to fix these
                issues couldve been used to build new features or optimize the
                existing system. Bear in mind that fixing bugs without running
                tests could also introduce new bugs into the system
                <br />
                2.Well-written unit tests act as documentation for your code.
                Any developer can quickly look at your tests and know the
                purpose of your functions. <br />
                3.It simplifies the debugging process. <br />
                4.Unit testing is an integral part of extreme programming.
                Extreme programming is basically a
                “test-everything-that-can-possibly-break” programming strategy.{" "}
                <br />
                5.Unit tests make code reuse easier. If you want to reuse
                existing code in a new project, you can simply migrate both the
                code and tests to your new project, then run your tests to make
                sure you have the desired results. <br />
                6.Unit testing improves code coverage. A debatable topic is to
                have 100% code coverage across your application. <br />
                7.In the testing pyramid, unit tests are faster than integration
                and end-to-end. They are more assertive and return quick
                feedback.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
