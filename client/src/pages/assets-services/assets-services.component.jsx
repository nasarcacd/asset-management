import React from 'react';
import Container from '@material-ui/core/Container';
import { DataGrid } from 'tubular-react';
import customOptions from "./assets-services.resources";
import useStyles from './assets-services.style';

function AssetsServices() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth='lg'>
      <p className={classes.title}>{customOptions.gridName}</p>
      <DataGrid {...customOptions} />
    </Container>
  );
}

export default AssetsServices;
