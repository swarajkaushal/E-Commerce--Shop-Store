import React from 'react'
import { Grid, TextField ,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../State/Action/Action';

const LoginForm = () => {
    const dispatch=useDispatch();
    const navigate =useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
         const data = new FormData(event.currentTarget)
         const userdata = {
             
             email: data.get("email"),
             password: data.get("password"),
         }
         dispatch(login(userdata))
         console.log("userData",userdata)
     }
  return (
    <div>
      <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            autoComplete="given-name"
                            type="password"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            className="bg-[#9155FD] w-full"
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ padding: ".8rem 0" }}
                        >
                            LogIn
                        </Button>
                        <div className="flex justify-center flex-col items-center">
     <div className="py-3 flex items-center ">
        <p className="m-0 p-0">if you have dont have account ?</p>
        <Button onClick={()=> navigate("/register")} className="ml-5" size="small">
          Register
        </Button>
      </div>
</div>
                    </Grid>
                </Grid>
            </form>
    </div>
  )
}

export default LoginForm
