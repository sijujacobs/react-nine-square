import React from "react";
const ComponentWithNavBar = (InputComponent) => {
    return (isLoading, props) => {
        if (!isLoading) return <InputComponent {...props} />;
        return <p>Hold on, fetching data might take some time.</p>;
    }
}

export default ComponentWithNavBar;

// import React from 'react';
// function WithLoading(Component) {
//   return function WihLoadingComponent({ isLoading, ...props }) {
//     if (!isLoading) return <Component {...props} />;
//     return <p>Hold on, fetching data might take some time.</p>;
//   };
// }
// export default WithLoading;

// return class extends React.Component{
//     render() {
//         return <InputComponent name="HOC" {...this.props}/>;
//     }
// }