import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { possibleProvinces } from "../model/info";
import { get_brs, get_counties } from "../api/api";
import Route from "./Route";
export default function BRDialog({routes, setRoutes}) {
  const [open, setOpen] = React.useState(false);
  const [province, setProvince] = useState("");
  const [lane, setLane] = useState("");
  const [countie, setCountie] = useState("");
  const [lanes, setLanes] = useState([]);
  const [counties, setCounties] = useState([]);

  React.useEffect(() => {
    setLane("")
    setCountie("")
    get_counties(province, (json) => {
      setCounties(json);
    });

    get_brs(province, (json) => {
      setLanes(json);
    });
  }, [province]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addAndClose = () => {
    const newRoutes = [...routes, {br: lane, estado: province, cidade: countie}]
    setRoutes(newRoutes)
    setOpen(false);
    setLane("");
    setProvince("");
    setCountie("");
  };

  return (
    <div>
      <Button fullWidth variant="outlined" onClick={handleClickOpen}>
        Adicionar rodovia a esta rota
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Adicionar rodovia</DialogTitle>
        <DialogContent>
          <div className="flex">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
            <InputLabel id="estado-label">Estado</InputLabel>
            <Select
              labelId="estado-label"
              id="estado-select"
              value={province}
              onChange={(event) => setProvince(event.target.value)}
              label="Estado"
            >
              {possibleProvinces.map((province) => {
                return (
                  <MenuItem value={province.value}>{province.label}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="cidade-label">Cidade</InputLabel>
            <Select
              labelId="cidade-label"
              id="cidade-select"
              value={countie}
              onChange={(event) => setCountie(event.target.value)}
              label="Cidade"
              disabled={province === ""}
            >
              {counties.map((countie) => {
                return (
                  <MenuItem value={countie.value}>{countie.label}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="br-label">BR</InputLabel>
            <Select
              labelId="br-label"
              id="br-select"
              value={countie}
              onChange={(event) => setLane(event.target.value)}
              label="BR"
              disabled={province === ""}
            >
              {lanes.map((lane) => {
                return <MenuItem value={lane.value}>{lane.label}</MenuItem>;
              })}
            </Select>
          </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={addAndClose}>Adicionar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
