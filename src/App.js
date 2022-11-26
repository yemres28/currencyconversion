import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useState} from "react"
import XmlParse from "./components/XmlParse"
function App() {
  const [tl,setTl] = useState("")
  
  const usd =18.90;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#2d3436" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#dfe6e9" }}
          >
            Currency Conversion || Döviz Hesaplama
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          direction: "row",
          justifyContent: "center",
          padding: "15vh",
          color: "blue",
          "& > :not(style)": {
            m: 1,
            width: 300,
            height: "maxheight",
          },
        }}
      >
        <Paper sx={{ backgroundColor: "#dcdde1" }} elevation={1}>
          <Paper sx={{ padding: "5vh" }}>
              <TextField id="standard-basic" variant="standard" placeholder="TL" onChange={e=>setTl(e.target.value)}/>
          </Paper>
          <Paper sx={{ padding: "4vh", backgroundColor: "transparent" }}>
            <Button fullWidth sx={{color:"black" , fontSize:"15px", backgroundColor:"#dcdde1"}} onClick={()=>tl*usd}><b>HESAPLA</b></Button>
          </Paper>
          <Paper sx={{ padding: "5vh" }}> 
          <XmlParse/>
          
          <Box>USD :  </Box>
          </Paper>
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
