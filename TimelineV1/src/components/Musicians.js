//Components
import Musician from "./Musician";

//Materia-UI 
import Grid from '@material-ui/core/Grid';

const Musicians = ( { selectedMusicians }) => {
    return (
        <div className="musicians">
            <Grid container spacing={3}>
                {selectedMusicians.map(element => {
                    return <Musician musician={element} />
                })}
            </Grid>
        </div>
    )
}

export default Musicians;