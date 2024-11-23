import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import api from "../../utils/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function SignInSide() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    let tc = JSON.parse(localStorage.getItem("tcAgree"));
    if (!tc) {
      router.push("/sell");
      toast.error("Agree to Terms & Condition");
      return;
    }
    const data = new FormData(event.currentTarget);
    try {
      const res = await api.post("/auth/local", {
        identifier: data.get("email"),
        password: data.get("password"),
      });
      toast.success(`login successful`);
      Cookies.set("user_jwt", res.data.jwt, { expires: 7, path: "" });
      Cookies.set("user_id", res.data.user.id, { expires: 7, path: "" });
      router.back();
    } catch (err) {
      toast.error(`${err?.response?.data?.error?.message}`);
    } finally {
    }
  };
  return (
    <Grid container component="main" sx={{ height: "auto" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/auth/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
