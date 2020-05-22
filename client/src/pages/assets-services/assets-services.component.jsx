import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { DataGrid } from 'tubular-react';
import {
  assetsServicesColumns,
  API_URL,
  mobileBreakpointWidth,
  toolbarOptions
} from "./assets-services.resources";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginTop: 30,
    },
    title: {
      fontSize: '2rem',
      color: theme.palette.primary.main,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
      },
    },
  })
);

function AssetsServices() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth='lg'>
      <p className={classes.title}>Assets Services</p>
      <DataGrid
        columns={assetsServicesColumns}
        dataSource={API_URL}
        gridName='Assets Services'
        mobileBreakpointWidth={mobileBreakpointWidth}
        toolbarOptions={toolbarOptions}
      />
    </Container>
  );
}

export default AssetsServices;
