import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {
  FormHelperText,
  FormGroup,
  FormLabel,
  Switch,
} from "@material-ui/core";

export default function StudyDetailsPage() {
  const classes = useStyles();

  // const [studyTitle, setStudyTitle] = useState("");
  // const [studyDescription, setStudyDescription] = useState("");
  // const [studySummary, setStudySummary] = useState("");
  // const [studyType, setStudyType] = useState("");
  // const [participantScreening, setParticipantScreening] = useState("");
  // const [participantGroup, setParticipantGroup] = useState("");
  // const [participantNumber, setParticipantNumber] = useState("");
  // const [dataCollected, setDataCollected] = useState("");
  // const [studySurvey, setStudySurvey] = useState({});
  // const [shipProduct, setShipProduct] = useState("");
  // const [studyPayment, setStudyPayment] = useState("");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MenuBookRoundedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Study
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="title"
            label="Study Title"
            autoFocus
            helperText="Title of your study"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            name="summary"
            label="Study Summary"
            helperText="A sentence or two to inform participants about your study"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            name="description"
            label="Study Description"
            helperText="A paragraph or two that describes what participation entails"
          />

          <FormControl fullWidth required variant="outlined" margin="normal">
            <InputLabel id="study-type-label">Study Type</InputLabel>
            <Select labelId="study-type-label" label="Study Type">
              <MenuItem value={"longitudinal"}>Long Term</MenuItem>
              <MenuItem value={"single"}>Single Instance</MenuItem>
              <MenuItem value={"experimental"}>Experimental</MenuItem>
            </Select>
            <FormHelperText>How your study will be conducted</FormHelperText>
          </FormControl>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="number"
            name="numParticipants"
            label="Number of Participants"
            helperText="Planned/max number of partipants in your study"
          />

          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="participant-screening-label">
              Participant Screening
            </InputLabel>
            <Select
              labelId="participant-screening-label"
              label="Participant Screening"
            >
              <MenuItem value={"none"}>None</MenuItem>
              <MenuItem value={"verified"}>Site Verified</MenuItem>
              <MenuItem value={"interview"}>Interview</MenuItem>
            </Select>
            <FormHelperText>
              (Optional) Add a screening method for your participants
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="participant-group-label">
              Participant Group
            </InputLabel>
            <Select labelId="participant-group-label" label="Participant Group">
              <MenuItem value={"everyone"}>Everyone</MenuItem>
              <MenuItem value={"custon"}>Custom</MenuItem>
            </Select>
            <FormHelperText>
              (Optional) Define participation group
            </FormHelperText>
          </FormControl>

          {/* Add demographic info that the researchers want */}

          <FormControl fullWidth variant="outlined" margin="normal">
            <FormLabel>Data Collected</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="survey" />}
                label="Survey"
              />
              <FormControlLabel
                control={<Checkbox name="interview" />}
                label="Interview"
              />
              <FormControlLabel
                control={<Checkbox name="mobileSensing" />}
                label="Mobile Sensing"
              />
              <FormControlLabel
                control={<Checkbox name="meeting" />}
                label="Physical Meeting"
              />
            </FormGroup>
            <FormHelperText>Select how you want to collect data</FormHelperText>
          </FormControl>

          <FormGroup fullWidth margin="normal">
            <FormLabel>Ship Product</FormLabel>
            <FormControlLabel control={<Switch />} />
          </FormGroup>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="number"
            name="payment"
            label="Study Payment"
            helperText="How much you will pay participants for each survey"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit Study
          </Button>
        </form>
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
