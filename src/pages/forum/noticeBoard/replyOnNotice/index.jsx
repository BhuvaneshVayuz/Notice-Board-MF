import {
  Button,
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
} from "mui-tiptap";
import { CloudUploadOutlined } from "@mui/icons-material";
import { useRef } from "react";
import StarterKit from "@tiptap/starter-kit";
import { useNavigate } from "react-router";
const ReplyOnNotice = () => {
  const rteRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/forum/notice-board");
  };
  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <div className="flex items-center gap-1">
        <div className="text-xl">To:</div>

        <div className="font-semibold">Sanjay</div>
      </div>
      <h3 className="font-semibold text-xl">
        Upcoming Team Collaboration Event on Confluence
      </h3>
      <div className="md:flex justify-between gap-4">
        <div className="w-[50%]">
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Subject"
              variant="outlined"
              placeholder="Enter a subject name"
            />
          </FormControl>
        </div>

        <div className=" ">
          <FormControl fullWidth className="!space-y-2">
            <Typography>Upload Attachment (if any)</Typography>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadOutlined />}
            >
              Upload files
            </Button>
            <FormHelperText className="!mx-0">
              (max of 10 MB in size, only pdf, ppt, word, excel, zip, png, jpg
              and gif type of files allowed)
            </FormHelperText>
          </FormControl>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <FormLabel>Notice Description</FormLabel>
        <RichTextEditor
          ref={rteRef}
          extensions={[StarterKit]}
          // content="<p>Hello world</p>" // Initial content for the editor
          // Optionally include `renderControls` for a menu-bar atop the editor:
          renderControls={() => (
            <MenuControlsContainer>
              <MenuSelectHeading />
              <MenuDivider />
              <MenuButtonBold />
              <MenuButtonItalic />
              {/* Add more controls of your choosing here */}
            </MenuControlsContainer>
          )}
        />
      </div>
      <div className="flex justify-end">
        <Button variant="contained" className="w-fit" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ReplyOnNotice;
