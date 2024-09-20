// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './layout';
// import RecipeDetails from './sections/home/recipe/recipe-details';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />} />
//         <Route path="/recipe-details/:id" element={<RecipeDetails />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from 'react'
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { Box } from '@mui/material';


function App() {
  const pages = useRoutes(routes);
  return (
    <>
      <Box>{pages}</Box>
    </>
  );
}
export default App;


// import { Outlet, useNavigate } from 'react-router-dom'
// import { Box } from '@mui/material';
// <div className="wrapper-layout-outlet">
// <Outlet />
// </div>
 