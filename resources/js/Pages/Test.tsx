import React, { FunctionComponent } from "react";

interface TestProps {
    props?: string;
}

const Test: FunctionComponent<TestProps> = () => {
    return <div>test</div>;
};

export default Test;
