import React,{useRef} from 'react'
import { FormControl,TextField,FormLabel,Button } from '@mui/material'
import StarterKit from "@tiptap/starter-kit";
import {
  MenuButtonBold,
  MenuButtonItalic,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectHeading,
  RichTextEditor,
} from "mui-tiptap";
const AddTemplate = () => {
      const rteRef = useRef();
  return (
    <div>
        <div className='border p-4 text-xl border-x-0 border-gray-200 my-4'>
            Add Noticeboard Template
        </div>
        <div className='grid gap-8'>
             <FormControl fullWidth>
                      <TextField
                        id="outlined-basic"
                        label="Subject"
                        variant="outlined"
                        placeholder="Enter a subject name"
                      />
                    </FormControl>
             <FormControl fullWidth>
                      <TextField
                        id="outlined-basic"
                        label="Template Name"
                        variant="outlined"
                        placeholder="Enter a Template Name"
                      />
                    </FormControl>

                        <FormLabel>Body
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
        </FormLabel>
         <div className="flex justify-end gap-2">
                  <Button variant="contained">Create</Button>
                  <Button variant="outlined">Cancel</Button>
                </div>
        </div>
    </div>
  )
}

export default AddTemplate