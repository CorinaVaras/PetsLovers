import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  // Iniciarlizar la referencia que se usara en Article
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(function () {
    Promise.resolve(typeof window.IntersectionObserver !==
        'undefined'
      ? window.IntersectionObserver
      : import('intersection-observer')
    ).then(() => {
    // console.log(element.current)
      const observer = new window.IntersectionObserver(function (entries) {
        // console.log(entries)
        // Obtener el elemento isIntersection
        const { isIntersecting } = entries[0]
        // console.log({ isIntersecting })
        // Sí hace intersección entonces cambiar el el valor de show
        if (isIntersecting) {
          setShow(true)
          // Una vez hecho el render ya no es necesario observar ese elemento, ayudará al performance.
          observer.disconnect()
        }
      })
      // Iniciar el observador
      observer.observe(element.current)
    })
  }, [element])

  return [show, element]
}
