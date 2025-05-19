 
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
} from "mui-tiptap";
import { useRef,useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import { useNavigate } from "react-router";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  FormLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
export default function NoticeContent() {
  const rteRef = useRef();
  const [template, setTemplate] = useState("");
   const handleChange = (event) => {
    setTemplate(event.target.value);
  };
  const navigate=useNavigate()

  const handleAddTemplate=()=>{
    navigate('/forum/notice-board/template/create')
  }
  return (
    <>
      <div className="flex flex-col gap-2">

<div className="grid gap-4  ">


 <FormControl fullWidth>
          <InputLabel id="select-template-label">Select Template</InputLabel>
          <Select
            labelId="select-template-label"
            id="select-template"
            value={template}
            label="Select Template"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
          <div onClick={handleAddTemplate}>
    <Button variant="contained"   >Add Template</Button>
  </div>
</div>

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
      {/* <Button onClick={() => console.log(rteRef.current?.editor?.getHTML())}>
        Log HTML
      </Button> */}
    </>
  );
}
