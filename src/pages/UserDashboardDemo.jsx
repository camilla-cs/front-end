// import * as React from 'react';
// import { extendTheme, styled } from '@mui/material/styles';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import ListAltIcon from '@mui/icons-material/ListAlt';
// import DescriptionIcon from '@mui/icons-material/Description';
// import SearchIcon from '@mui/icons-material/Search';
// import AnnouncementIcon from '@mui/icons-material/Announcement';
// import { AppProvider } from '@toolpad/core/AppProvider';
// import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// import { PageContainer } from '@toolpad/core/PageContainer';
// import Grid from '@mui/material/Grid2';

// const NAVIGATION = [
  
//   {
//     segment: 'dashboard',
//     title: 'Dashboard',
//     icon: <DashboardIcon />,
//   },
//   {
//     segment: 'profile',
//     title: 'Profile',
//     icon: <AccountBoxIcon />,
//   },

//   {
//     segment: 'lists',
//     title: 'Lists',
//     icon: <ListAltIcon />,
//     children: [
//       {
//         segment: 'list 1',
//         title: 'List 1',
//         icon: <DescriptionIcon />,
//       },
//       {
//         segment: 'list 2',
//         title: 'List 2',
//         icon: <DescriptionIcon />,
//       },
//     ],
//   },
//   {
//     segment: 'discover',
//     title: 'Discover',
//     icon: <SearchIcon />,
//   },

//   {
//     segment: 'news',
//     title: 'News', 
//     icon: <AnnouncementIcon/>, 
//   }
// ];

// const demoTheme = extendTheme({
//   colorSchemes: { light: true, dark: true },
//   colorSchemeSelector: 'class',
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// function useDemoRouter(initialPath) {
//   const [pathname, setPathname] = React.useState(initialPath);

//   const router = React.useMemo(() => {
//     return {
//       pathname,
//       searchParams: new URLSearchParams(),
//       navigate: (path) => setPathname(String(path)),
//     };
//   }, [pathname]);

//   return router;
// }

// const Skeleton = styled('div')(({ theme, height }) => ({
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: theme.shape.borderRadius,
//   height,
//   content: '" "',
// }));

// export default function DashboardLayoutBasic(props) {
//   const { window } = props;

//   const router = useDemoRouter('/dashboard');

//   // Remove this const when copying and pasting into your project.
// //   const demoWindow = window ? window() : undefined;

//   return (
//     <AppProvider
//       navigation={NAVIGATION}
//       router={router}
//       theme={demoTheme}
//     //   window={demoWindow}
//     >
//       <DashboardLayout>
//         <PageContainer>
//           <Grid container spacing={1}>
//             <Grid size={5} />
//             <Grid size={12}>
//               <Skeleton height={14} />
//             </Grid>
//             <Grid size={12}>
//               <Skeleton height={14} />
//             </Grid>
//             <Grid size={4}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={8}>
//               <Skeleton height={100} />
//             </Grid>

//             <Grid size={12}>
//               <Skeleton height={150} />
//             </Grid>
//             <Grid size={12}>
//               <Skeleton height={14} />
//             </Grid>

//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//             <Grid size={3}>
//               <Skeleton height={100} />
//             </Grid>
//           </Grid>
//         </PageContainer>
//       </DashboardLayout>
//     </AppProvider>
//   );
// }

