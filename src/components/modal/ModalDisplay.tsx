import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Radio, FormControlLabel, Typography, Grid, Box } from '@mui/material';
import { XIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CancelBtn } from '../button';
import { SubmitBtn } from '../button';

type RequestType = 'Config Payment Method' | 'Approve' | 'Cancel';

interface RequestOption {
  id: string;
  label: string;
}

interface ModalDisplayProps {
  open: boolean;
  onClose: () => void;
}

const requestOptions: Record<RequestType, RequestOption[]> = {
  'Config Payment Method': [
    { id: '901', label: 'Alipay' },
    { id: '902', label: 'True Money Wallet' },
    { id: '903', label: 'WeChat' },
    { id: '903', label: 'Social Welfare Card Holders (...)' },
    { id: '910', label: 'Prompt Pay (พร้อมเพย์)' },
    { id: '912', label: 'POINTPARTNER (พอยท์พาร์...)' },
  ],
  Approve: [
    { id: '1001', label: 'Disable Cash Management' },
    { id: '1002', label: 'Alcoholic beverages are not...' },
    { id: '1003', label: 'Alcoholic beverages are not...' },
    { id: '1004', label: 'Alcoholic beverages are allo...' },
    { id: '1005', label: 'No Alcoholic beverages are s...' },
    { id: '1006', label: 'Config Lock Scan Product Al...' },
  ],
  Cancel: [
    { id: '2001', label: 'Request for Cancel Document' },
  ],
};

const ModalDisplay: React.FC<ModalDisplayProps> = ({ open, onClose }) => {
  const [selectedType, setSelectedType] = useState<RequestType | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth={true} PaperProps={{ sx: { width: '1700px', maxWidth: 'none', height: '80vh', borderRadius: '16px' } }}> {/* ปรับขนาดกว้าง */}
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
            Request Form
          </Typography>
          <Button onClick={onClose}>
            <XIcon size={24} />
          </Button>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography variant="subtitle2" color="error" sx={{ mb: 2 }}>
          *Select 1 item
        </Typography>
        <Grid container spacing={4}>
          {(Object.keys(requestOptions) as RequestType[]).map((type) => (
            <Grid item xs={12} md={4} key={type}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
                Request for {type}
              </Typography>
              <Box sx={{ backgroundColor: '#28a745', color: 'white', p: 1, textAlign: 'center', borderRadius: '10px' }}>
                {type === 'Config Payment Method' ? 'Tender' : 'Service'}
              </Box>
              {requestOptions[type].map((option) => (
                <FormControlLabel
                  key={option.id}
                  control={
                    <Radio
                      checked={selectedType === type && selectedOption === option.id}
                      onChange={() => {
                        setSelectedType(type);
                        setSelectedOption(option.id);
                      }}
                      value={option.id}
                      sx={{
                        '&.Mui-checked': {
                          color: '#28a745',
                        },
                      }}
                    />
                  }
                  label={option.label}
                  sx={{ display: 'block', mt: 1 }}
                />
              ))}
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', mb: 2 }}>
        <CancelBtn
          onClick={onClose}
        >
          Cancel
        </CancelBtn>
        <SubmitBtn
          onClick={() => {
            navigate(`/store-operation/CPM001`);
          }}
          disabled={!selectedOption}
        >
          Submit
        </SubmitBtn>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDisplay;