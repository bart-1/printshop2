import React, {FunctionComponent} from 'react'

interface TestingProps {
    props?: string;
    testingProps?: string;
}

const Testing: FunctionComponent<TestingProps> = (props) => {

    return (
        <div>test {props && `result: ${props.testingProps}`}</div>
      );
}

export default Testing;
