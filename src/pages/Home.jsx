import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton } from "@mui/material";
import { Context } from "../context/Context";
import { useContext } from "react";

export default function Home() {
  const { fotos, setFotos } = useContext(Context);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "15px"
      }}
    >
      {fotos.map((photo, i) => {
        return (
          <Box
            key={i}
            onClick={() => {
              const foto = fotos[i];
              const estadoActualDelLike = foto.liked;
              if (estadoActualDelLike) foto.liked = false;
              else foto.liked = true;
              setFotos([...fotos]);
            }}
            sx={{
              backgroundImage: `url("${photo.src}")`,
              height: "200px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "120px 5px 5px 5px",
              border: 2,
              cursor:"pointer"
            }}
          >
            <IconButton sx={{ color: "red", height: "50px", scale: "1.5" }}>
              {photo.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>
        );
      })}
    </Box>
  );
}
