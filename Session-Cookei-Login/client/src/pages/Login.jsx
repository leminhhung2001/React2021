import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Redirect } from "react-router-dom";

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

export default function SignIn() {
  const classes = useStyles();
  const [title, setTitle] = useState({
    username: "",
    password: "",
  });
  const [show, setShow] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setTitle({
      ...title,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", {
        username: title.username,
        password: title.password,
      })
      .then((response) => {
        // console.log(response.data[0].password);
        if (response.data.message) {
          setShow(response.data.message);
        } else {
          setShow("Login Successfully");
          setStatus("ok");
        }
      });

    setTitle({
      username: "",
      password: "",
    });
  };
  // Vẫn chưa hiểu tại sao phải gọi thừa ra cái này thì mới chạy mới lậy dữ liệu
  // Mặc dù container đã gọi rồi nhưng không được
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:8000/login").then((response) => {
      if (response.data.loggedIn === true) {
        console.log("[response]", response.data);
      } else {
        console.log(response.data.loggedIn);
      }
    });
  }, []);

  if (status === "ok") {
    return <Redirect to='/main' />;
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => handleSubmit(e)}
        >
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Username'
            name='username'
            autoComplete='email'
            autoFocus
            value={title.username}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={title.password}
            onChange={(e) => handleChange(e)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
        <h3>{show}</h3>
        <h3>{status}</h3>
      </div>
    </Container>
  );
}
