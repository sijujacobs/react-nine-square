// import React, { useReducer } from 'react';
// // import withFetch from './components/hoc/withFetch';
// // import InputOne from './components/InputOne';
// import InputTwo from './components/InputTwo';
// const LazyInputOne = React.lazy(() => new Promise((res, rej) => {
//   setTimeout(() => {
//     res(import('./components/InputOne'))
//   }, 5000);
// }));

// export const AppContext = React.createContext();
// const initialState = {
//   inputData: '',
//   defaultInput: '',
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE':
//       return { ...initialState, inputData: action.payload };
//     default:
//       return initialState;
//   }
// }


// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <React.Fragment>
//       <AppContext.Provider value={{ state, dispatch }}>
//         {/* <InputOne /> */}
//         <InputTwo />
//         <Suspense fallback={<div>Loading</div>}>
//           <LazyInputOne />
//         </Suspense>
//       </AppContext.Provider>
//     </React.Fragment>
//   );
// }

// export default App;