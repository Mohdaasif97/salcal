'use client'
import { useEffect, useRef } from 'react'

// Iframe-isolated ad banner — each instance gets its own window/document,
// so multiple ad slots on the same page never clobber a shared `atOptions` global.
export default function AdBanner({ adKey, width, height }: { adKey: string; width: number; height: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || ref.current.childElementCount > 0) return

    const iframe = document.createElement('iframe')
    iframe.style.width = `${width}px`
    iframe.style.height = `${height}px`
    iframe.style.border = 'none'
    iframe.style.overflow = 'hidden'
    iframe.title = 'advertisement'
    ref.current.appendChild(iframe)

    const doc = iframe.contentWindow?.document
    if (!doc) return

    doc.open()
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <style>html,body{margin:0;padding:0;overflow:hidden;background:transparent;}</style>
        </head>
        <body>
          <script>
            atOptions = {'key':'${adKey}','format':'iframe','height':${height},'width':${width},'params':{}};
          </script>
          <script src="https://www.highrevenueformat.com/${adKey}/invoke.js"></script>
        </body>
      </html>
    `)
    doc.close()
  }, [adKey, width, height])

  return (
    <div className="flex justify-center" style={{ width, height, overflow: 'hidden', margin: '0 auto' }}>
      <div ref={ref} style={{ width, height, overflow: 'hidden' }} />
    </div>
  )
}