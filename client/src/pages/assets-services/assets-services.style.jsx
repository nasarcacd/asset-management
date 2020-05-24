import { makeStyles, createStyles } from '@material-ui/core/styles';

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

export default useStyles;