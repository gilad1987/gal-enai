import React from "react";
import {inject} from "mobx-react";
import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import SearchResultContent from "./SearchResultContent";

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
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

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
            <Button color="primary"  onClick={handleClickOpen}>
                הצג מקור מלא
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <SearchResultContent id={item.hashId}/>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default inject('searchStore')(SearchResult);
