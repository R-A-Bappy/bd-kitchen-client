import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <div>
            <Pdf targetRef={ref} filename="QuestionAnswer.pdf">
                {({ toPdf }) => <div className='text-center'><button onClick={toPdf} className='btn btn-primary'>Generate Pdf</button></div>}
            </Pdf>
            <main ref={ref}>
                <section className="w-11/12 md:w-10/12 mx-auto mt-10">
                    <div className="py-4 rounded">
                        <h2 className="bg-violet-600 text-xl font-medium p-2"><span className="font-bold">Question:</span> Tell us the differences between uncontrolled and controlled components.</h2>
                        <h4 className="bg-violet-400 p-2"><span className="font-bold pr-3">Answer:</span>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.</h4>
                    </div>
                    <div className="py-4 rounded">
                        <h2 className="bg-violet-600 p-2 text-xl font-medium"><span className="font-bold">Question:</span> How to validate React props using PropTypes.</h2>
                        <h4 className="bg-violet-400 p-2"><span className="font-bold pr-3">Answer:</span> React provides a built-in library called PropTypes to validate the props passed to a component. PropTypes allow developers to specify the type and shape of the props that a component expects.By using PropTypes, we can ensure that the props passed to a component conform to the expected type and shape, which can help to prevent bugs and improve the maintainability of our code.</h4>
                    </div>
                    <div className="py-4 rounded">
                        <h2 className="bg-violet-600 p-2 text-xl font-medium"><span className="font-bold">Question:</span> Tell us the difference between nodejs and express js.
                        </h2>
                        <h4 className="bg-violet-400 p-2"><span className="font-bold pr-3">Answer:</span> NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</h4>
                    </div>
                    <div className="py-4 rounded">
                        <h2 className="bg-violet-600 text-xl p-2 font-medium"><span className="font-bold">Question:</span> What is a custom hook, and why will you create a custom hook?</h2>
                        <h4 className="bg-violet-400 p-2"><span className="font-bold pr-3">Answer:</span> Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.Custom hooks are a way to reuse code and logic across different components in a React application. They allow developers to extract common functionality into a separate function that can be easily reused in multiple components.</h4>
                    </div>
                </section>
            </main>
        </div>
    )
};

export default Blog;