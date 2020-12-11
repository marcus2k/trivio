import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    props: {
      fieldset: {
        FormControl: 'secondary',
      }
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      color: 'white',
    },
}));

const formStyles = {
  "useStyles": useStyles,
}
export default formStyles;