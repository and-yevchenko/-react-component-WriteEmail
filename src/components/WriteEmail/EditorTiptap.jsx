import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import { BubbleMenu, EditorProvider, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState } from 'react'
import { Tools } from './Tools'


const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    heading: false,
  }),
  Underline,
]

const content = `<p>Hey Andrii Yevchenko!</p>`


export const EditorTiptap = () => {
  const [isBtnFloat, setIsBtnFloat] = useState(true)

  
  return (
    <EditorProvider extensions={extensions} content={content}>
      <FloatingMenu>
        {isBtnFloat && 
          <div className="tools tools-float">
            <Tools isBtnFloat={isBtnFloat} setIsBtnFloat={setIsBtnFloat} />
          </div>}  
      </FloatingMenu>
      <BubbleMenu>
        {isBtnFloat && 
          <div className="tools tools-float">
            <Tools isBtnFloat={isBtnFloat} setIsBtnFloat={setIsBtnFloat} />
          </div>} 
      </BubbleMenu>
      <div className="tools tools-panel">
        <Tools isBtnFloat={isBtnFloat} setIsBtnFloat={setIsBtnFloat} />
      </div>
    </EditorProvider>
  )
}