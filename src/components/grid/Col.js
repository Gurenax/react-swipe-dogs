import React from 'react'

/*
*   Col component
*   children - components inside the Row component
*   span - column span
*   sm - enable small screen breakpoint (e.g. sm, sm='4')
*   md - enable medium screen breakpoint (e.g. md, md='4')
*   lg - enable large screen breakpoint (e.g. lg, lg='4')
*   xl - enable extra large screen breakpoint (e.g. xl, xl='4')
*   className - optional classes
*/
const Col = ({ children, span, sm, md, lg, xl, className }) => {
  let classes = ''
  if (!!className) classes += ` ${className}`
  return (
    <div className={ [ classNameForSpan(span), classNameForScreen(sm, md, lg, xl, span), classes].join(' ') }>
      {children}
    </div>
  )
}

function classNameForSpan(span) {
  if (!span) return ' col'
  else return `col-${span}`
}

function classNameForScreen(sm, md, lg, xl, span) {
  let classes = ''
  if(sm) classes+= ' col-sm'
  if(sm!==undefined && sm.length>0) classes+= `-${sm}`
  if(md) classes+= ' col-md'
  if(md!==undefined && md.length>0) classes+= `-${md}`
  if(lg) classes+= ' col-lg'
  if(lg!==undefined && lg.length>0) classes+= `-${lg}`
  if(xl) classes+= ' col-xl'
  if(xl!==undefined && xl.length>0) classes+= `-${xl}`
  return classes;
}

export default Col