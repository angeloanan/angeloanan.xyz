import * as React from 'react'

function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Handle SSR
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = React.useState<boolean>(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  // run once on mount and cleanup
  React.useEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener('change', handleChange)
    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}

export default useMediaQuery
