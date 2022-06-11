import { useEffect } from 'react'

export default (url: string, onload: () => void) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = url
    script.onload = onload
    document.head.append(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [url, onload])
}
