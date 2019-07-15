import React from "react";
import {inject} from "mobx-react";
import {
    Button,
    Dialog,
    DialogContent,
    WithStyles
} from "@material-ui/core";
import SearchResultContent from "./SearchResultContent";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {createStyles, Theme} from "@material-ui/core/styles";
import {withStyles} from "@material-ui/styles";


function SearchResult({item, query}: any): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null {

    const getHighlightedText = (text: string, higlight: string) => {
        let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
        return <span> {parts.map((part, i) =>
            <span key={i} style={part.toLowerCase() === higlight.toLowerCase() ? {
                fontWeight: 'bold',
                color: '#e10e0e',
                fontSize: 17
            } : {}}>{part}</span>)
        } </span>;
    };

    const [open, setOpen] = React.useState(false);
    // const theme = useTheme();
    // const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));

    const styles = (theme: Theme) =>
        createStyles({
            root: {
                margin: 0,
                padding: theme.spacing(2),
            },
            closeButton: {
                position: 'absolute',
                right: theme.spacing(1),
                top: theme.spacing(1),
                color: theme.palette.grey[500],
            },
        });

    interface DialogTitleProps extends WithStyles<typeof styles> {
        id: string;
        children: React.ReactNode;
        onClose: () => void;
    }

    const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
        const {children, classes, onClose} = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <>
            <h3>{item.doc_id}</h3>
            <p>{getHighlightedText(item.text, query)}</p>
            <Button color="primary" onClick={handleClickOpen}>
                הצג מקור מלא
            </Button>

            <Dialog
                dir={'rtl'}
                fullScreen
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {item.doc_id}
                </DialogTitle>

                <DialogContent style={{'maxWidth': 1400, margin: '0 auto'}}>
                    <SearchResultContent id={item.hashId}/>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default inject('searchStore')(SearchResult);
