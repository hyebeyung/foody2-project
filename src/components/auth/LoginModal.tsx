"use client"
import { useState } from 'react';
import {
  Modal,
  Box,
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal = ({ open, onClose }: LoginModalProps) => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="login-modal"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              backgroundColor: 'transparent',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Box sx={{
              position: 'absolute',
             
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
            }}>
              <h2 className="text-3xl font-bold text-center mb-8">LOGIN</h2>
        
        <form className="!space-y-4">
          <TextField
            fullWidth
            placeholder="Enter email"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '50px',
                bgcolor: '#f5f5f5',
              }
            }}
          />

          <TextField
            fullWidth
            type="password"
            placeholder="Password"
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '50px',
                bgcolor: '#f5f5f5',
              }
            }}
          />

            <div className="flex items-center justify-between">
                <FormControlLabel
                  control={
                    <Switch 
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#3cb815',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#3cb815',
                        },
                      }}
                    />
                  }
                  label="REMEMBER ME"
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      fontSize: '12px',  
                      color: '#666',    
                    }
                  }}
                />
                <Button 
                  sx={{ 
                    textAlign: 'right',
                    color: '#3cb815',
                    fontSize: '12px',    
                    padding: '0',     
                    minWidth: 'unset',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      textDecoration: 'underline',
                    }
                  }}
                >
                  FORGOT PASSWORD?
                </Button>
              </div>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: '#3cb815',
                  borderRadius: '50px',
                  py: 1.5,
                  '&:hover': {
                    bgcolor: '#2da012',
                  }
                }}
              >
                SIGN IN
              </Button>
            </form>
          </Box>
          </motion.div>
        )}
      </AnimatePresence>
      
    </Modal>
  );
};

export default LoginModal;