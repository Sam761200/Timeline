//Materia-UI 
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Musician = ( { musician }) => {
    return (
        <Grid item xs={12} md={3}  key={musician.id}>
            <Card>
                <CardActionArea>
                    <CardMedia className="img__musician"
                    image={musician.image}
                    title={musician.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {musician.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {musician.description.substring(0, 200)} ...
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href={musician.link} target="_blank">
                        <Button size="small" color="primary">
                        learn more
                        </Button>
                    </a>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Musician;