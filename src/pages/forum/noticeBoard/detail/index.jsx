import { Typography, Divider, Avatar, Card, CardContent, Box, Button } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";
import { PageHeaderWrapper } from "../../../../components/ui/wrapper/pageHeader";
import { BreadCrumbCustom } from "../../../../components/ui/breadCrumb";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import PushPinIcon from '@mui/icons-material/PushPin';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import DraftsIcon from '@mui/icons-material/Drafts';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const noticeDetail = {
  expiryDate: "18 - Nov - 2025",
  visibleTo: "Unit | B101",
  approvedBy: "--",
  approvedOn: "12 - May - 2025",
  postedOn: "01 - May - 2025",
  title: "Maintenance Due Notice – Fortune Heights",
  recipient: "Mr. Sharma (Flat 3B)",
  body: `This is a reminder that your maintenance dues for April and May 2025 (₹5,000 total) remain unpaid. Despite our previous reminder, we have not received your payment yet.`,
  followUp: `Please settle the dues by 10th May 2025 to avoid a late fee of ₹200 and possible restriction of common area access.`,
  images: [
    "https://via.placeholder.com/400x300.png?text=Notice+1",
    "https://via.placeholder.com/400x300.png?text=Notice+2",
  ],
  senderName: "Anil Mehta",
  senderTitle: "Secretary, Fortune Heights",
  phone: "9876543210",
  email: "greenwood.society@gmail.com",
};

export default function NoticeBoardDetail({ data = noticeDetail }) {
  const [value, setValue] = useState(null);

  const { pathname } = useLocation()
console.log(pathname)
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {pathname == "/detail" &&
          <PageHeaderWrapper>
            <BreadCrumbCustom
              links={[
                { label: "Home", to: "/" },
                { label: "Forum", to: "/forum" },
              ]}
              pageTitle="Noticeboard"
            />
            <Box className="flex gap-2">
              <Button LinkComponent={RouterLink} to="edit" variant="contained">
                Edit
              </Button>
            </Box>
          </PageHeaderWrapper>
        }
        <Card elevation={0} >
          <CardContent className="grid gap-2">

            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Notice OverView</Typography>
               
              </AccordionSummary>
              <hr className="text-gray-300"/>
              <AccordionDetails>
                <div className="flex  justify-between gap-4 text-sm text-gray-700 mb-4">
                  <div>
                   <PushPinIcon/> Expires on: <strong>{data.expiryDate}</strong>
                  </div>
                  <div>
                  <EditSquareIcon/>  Visible to: <strong>{data.visibleTo}</strong>
                  </div>
                  <div>
                   <FolderCopyIcon/> Approved by: <strong>{data.approvedBy}</strong>
                  </div>
                  <div>
                  <DraftsIcon/>  Approved on: <strong>{data.approvedOn}</strong>
                  </div>
                  <div>
                  <CalendarMonthIcon/>  Posted on: <strong>{data.postedOn}</strong>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">{data.title}</Typography>
              </AccordionSummary>
              <hr className="text-gray-300"/>
              <AccordionDetails>


                <Typography variant="subtitle1" className="mb-4">
                  Dear {data.recipient},
                </Typography>

                <Typography variant="body1" className="mb-2 text-gray-800">
                  {data.body}
                </Typography>

                <Typography variant="body1" className="mb-2 text-gray-800">
                  {data.followUp}
                </Typography>

                <Typography variant="body2" className="text-gray-600 mb-6">
                  If you’ve already made the payment, kindly ignore this message or
                  share the transaction details.
                </Typography>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  {data.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`attachment-${idx}`}
                      className="rounded shadow-md"
                    />
                  ))}
                </div>

                <Divider className="my-6" />

                <div className="mt-6 text-sm text-gray-700">
                  <p>Regards,</p>
                  <p>
                    <strong>{data.senderName}</strong>
                  </p>
                  <p>{data.senderTitle}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Phone fontSize="small" /> {data.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <Email fontSize="small" /> {data.email}
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

        { pathname == "/forum/notice-board/edit-expiry-date" &&   <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Edit Expiry Date</Typography>
              </AccordionSummary>
              <hr className="text-gray-300"/>
              <AccordionDetails>
                <div>
                  <div className="grid gap-2">
                    <div>Expiry On</div>
                    <div>  <DatePicker
                      label="Select Date"
                      value={value}
                      className="w-[50%]"
                      onChange={(newValue) => setValue(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    /></div>
                  </div>
                </div>
              </AccordionDetails>

              <div className="flex justify-end gap-2 p-2">
                <Button variant="outlined">Reset Notice</Button>
                <Button variant="contained" >
                  Update Notice
                </Button>
              </div>
            </Accordion>}

          </CardContent>
        </Card>
      </LocalizationProvider>

    </>
  );
}
