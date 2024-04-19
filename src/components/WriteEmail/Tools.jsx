import "./Tools.scss"
import { useCurrentEditor } from "@tiptap/react"
import { Bold, Italic, Strikethrough, Code, SquareTerminal, Quote, 
  SeparatorHorizontal, Undo, Redo, Underline, ListOrdered, List, Squircle } from 'lucide-react'
import { useKnowOS } from "../../hooks/useKnowOS"


export const Tools = ( {isBtnFloat, setIsBtnFloat, setTemplateParams, undoRedo} ) => {
  
  const { os } = useKnowOS()

  const { editor } = useCurrentEditor()
  if (!editor) {
    return null
  }
  
  editor.on('blur', ({ editor }) => {
    setTemplateParams(prev => {
      return {
        ...prev,
        notes: editor.getText()
      }
    })
  })

  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}>
            <Bold /> {/* bold */}
            <div className="tools__tip">Bold {os === "Windows" || os === "Linux" ? "(Ctrl B)" : os === "Mac" ? "(Cmd B)" : ""}</div>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}>
            <Italic />{/* italic */}
            <div className="tools__tip">Italic {os === "Windows" || os === "Linux" ? "(Ctrl I)" : os === "Mac" ? "(Cmd I)" : ""}</div>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active' : ''}>
            <Underline /> {/* toggleUnderline */}
            <div className="tools__tip">Underline {os === "Windows" || os === "Linux" ? "(Ctrl U)" : os === "Mac" ? "(Cmd U)" : ""}</div>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'is-active' : ''}>
            <Strikethrough />{/* strike */}
            <div className="tools__tip">Strike {os === "Windows" || os === "Linux" ? "(Ctrl Shift S)" : os === "Mac" ? "(Cmd Shift S)" : ""}</div>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={editor.isActive('code') ? 'is-active' : ''}>
            <Code />{/* code */}
            <div className="tools__tip">Code {os === "Windows" || os === "Linux" ? "(Ctrl E)" : os === "Mac" ? "(Cmd E)" : ""}</div>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}>
            <List />
            <div className="tools__tip">Bullet List {os === "Windows" || os === "Linux" ? "(Ctrl Shift 8)" : os === "Mac" ? "(Cmd Shift 8)" : ""}</div>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}>
            <ListOrdered />
            <div className="tools__tip">Ordered List {os === "Windows" || os === "Linux" ? "(Ctrl Shift 7)" : os === "Mac" ? "(Cmd Shift 7)" : ""}</div>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}>
            <SquareTerminal />{/* code block */}
            <div className="tools__tip">Code Block {os === "Windows" || os === "Linux" ? "(Ctrl Alt C)" : os === "Mac" ? "(Cmd Alt C)" : ""}</div>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}>
            <Quote />{/* blockquote */}
            <div className="tools__tip">Blockquote {os === "Windows" || os === "Linux" ? "(Ctrl Shift B)" : os === "Mac" ? "(Cmd Shift B)" : ""}</div>
      </button>

      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
            <SeparatorHorizontal />{/* horizontal rule */}
            <div className="tools__tip">Horizontal line</div>
      </button>

      {undoRedo && 
      <>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }>
            <Undo color="#3c3cff"/>{/* undo */}
            <div className="tools__tip">Undo</div>
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }>
            <Redo color="#3c3cff"/>{/* redo */}
            <div className="tools__tip">Redo</div>
      </button>
      </>
      }

    

      <button
        onClick={() => {setIsBtnFloat(!isBtnFloat)}}>
            <Squircle color={isBtnFloat ? "#3c3cff":"#313131"}/>
            <div className="tools__tip">Float menu</div>
      </button>
    </>
  )
}