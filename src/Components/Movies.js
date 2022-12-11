import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Kantara from './Images/k.jpeg';
import Yashoda from './Images/y1.jpg';
import Ramsetu from './Images/r.jpg';
import Ginna from './Images/g.jpg';
import Urvasivo from './Images/u.jpg';
import Repeat from './Images/re.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Stack from '@mui/material/Stack'

function Movies() {
  return (
    <div>
        <Stack direction={"row"}>
            <div className="col-md-4" sx={{width: 350}}>
            <a href="https://ww4.ibomma.one/a/kantara-telugu-2022-n1fgc-watch-online.html" target="_blank">
            <Card sx={{ maxWidth: 345, margin:10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Kantara}
          alt="kantara"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>Kantara</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Kantara, which translates to a mystical forest, tells the story of a local demigod, who trades forest land with a king in 1870, in exchange for happiness.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </a>
            </div>

            <div className="col-md-4" sx={{width: 350}}>
            <a href="https://ww4.ibomma.one/a/yashoda-telugu-2022-n1dfj-watch-online.html" target="_blank">
            <Card sx={{ maxWidth: 345, margin:10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Yashoda}
          alt="kantara"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>Yashoda</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Plot. Yashoda, who works in Zomato, becomes a surrogate mother, as she needs to fund her sister's surgery. 
          She is taken to Eva, a state-of-the-art surrogacy center owned by Dr. Madhubala.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </a>
            </div>
            <div className="col-md-4" sx={{width: 350}}>
            <a href="https://ww4.ibomma.one/a/ram-setu-telugu-2022-n1yxs-watch-online.html" target="_blank">
            <Card sx={{ maxWidth: 345, margin:10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Ramsetu}
          alt="kantara"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>Ram setu</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Ram Setu ( transl. The bridge of Rama) is a 2022 Indian Hindi-language action-adventure 
          film directed by Abhishek Sharma. The film stars Akshay Kumar, Jacqueline Fernandez, 
          Nushrratt Bharuccha and Satya Dev and follows an archeologist who is investigating the nature 
          of Ram Setu, also known as Adam's Bridge.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </a>
            </div>
            </Stack>

            <Stack direction={"row"}>
            <div className="col-md-4" sx={{width: 350}}>
            <a href="https://ww4.ibomma.one/a/ginna-telugu-2022-n1dff-watch-online.html" target="_blank">
            <Card sx={{ maxWidth: 345, margin:10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Ginna}
          alt="kantara"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>Ginna</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          His grandmother promises that either he will pay back the debt in a month or marry 
          the creditor's sister. The trailer also focuses on how people are more important than 
          money for Ginna. The movie has action, supernatural horror elements, romance, and comedy 
          all rolled in together.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </a>
            </div>

            <div className="col-md-4" sx={{width: 350}}>
            <a href="https://ww4.ibomma.one/a/urvasivo-rakshasivo-telugu-2022-n1dfs-watch-online.html" target="_blank">
            <Card sx={{ maxWidth: 345, margin:10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Urvasivo}
          alt="kantara"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>Urvasivo-Rakshasivo</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          His parents want to see him married and actively seek a bride. 
          Sree Kumar is in love with Sindhuja (Anu Emmanuel), his colleague 
          who is broad-minded. While Sree Kumar pursues her for marriage, she 
          has her eyes set on achieving her dream and prefers a Gandharva marriage.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </a>
            </div>
            <div className="col-md-4" sx={{width: 350}}>
            <a href="https://ww4.ibomma.one/a/repeat-telugu-2022-n1tdy-watch-online.html" target="_blank">
            <Card sx={{ maxWidth: 345, margin:10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Repeat}
          alt="kantara"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>Repeat</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </a>
            </div>
            </Stack>
    </div>
  )
}

export default Movies