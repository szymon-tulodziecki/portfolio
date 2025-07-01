import{j as e,R as u}from"./index-FIsMNMmC.js";import{G as g,c as d,d as b,e as j,f,g as v,h as w,i as k,j as x,k as C,l as y,m as F,n as N,u as S}from"./Footer-BUHg0iFw.js";import{S as m,a as p,b as B,c as A,d as M,e as L,f as P,g as D,h as E,i as R}from"./index-D38j-xY3.js";const _=({title:t})=>e.jsx("h2",{className:`
        font-mono
        font-bold
        text-green-400
        text-center
        mb-4
        text-xl sm:text-2xl md:text-3xl
        break-words
        max-w-full
        px-2
        leading-tight
        truncate
      `,title:t,children:t});function I(t){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"},child:[]}]})(t)}const T={python:()=>e.jsx(d,{color:"#3776AB",title:"Python"}),docker:()=>e.jsx(N,{color:"#0db7ed",title:"Docker"}),react:()=>e.jsx(R,{color:"#61dafb",title:"React"}),redis:()=>e.jsx(E,{color:"#DC382D",title:"Redis"}),flask:()=>e.jsx(D,{color:"#888888",title:"Flask"}),tailwindcss:()=>e.jsx(P,{color:"#06B6D4",title:"Tailwind CSS"}),c:()=>e.jsx(m,{color:"#A8B9CC",title:"C"}),cpp:()=>e.jsx(p,{color:"#00599C",title:"C++"}),stm32:()=>e.jsx(L,{color:"#03234B",title:"STM32"}),yaml:()=>e.jsx(M,{color:"#CB171E",title:"YAML"}),html:()=>e.jsx(F,{color:"#E34F26",title:"HTML5"}),css:()=>e.jsx(y,{color:"#1572B6",title:"CSS3"}),network:()=>e.jsx(C,{color:"#4CAF50",title:"Network"}),npm:()=>e.jsx(A,{color:"#CB3837",title:"NPM"}),ai:()=>e.jsx(x,{color:"#FF6B35",title:"Artificial Intelligence"}),machine_learning:()=>e.jsx(x,{color:"#8E44AD",title:"Machine Learning"}),json:()=>e.jsx(B,{color:"#888888",title:"JSON"}),windows_task_scheduler:()=>e.jsx(k,{color:"#00ADEF",title:"Windows Task Scheduler"}),spy_camera:()=>e.jsx(w,{color:"#FF6B6B",title:"Camera"}),security:()=>e.jsx(v,{color:"#4ECDC4",title:"Security"}),robot:()=>e.jsx(f,{color:"#8BC34A",title:"Robot"}),bluetooth:()=>e.jsx(j,{color:"#0082FC",title:"Bluetooth"}),academic:()=>e.jsx(I,{color:"#9C27B0",title:"Academic"}),spoj:()=>e.jsx(b,{color:"#1E88E5",title:"SPOJ"}),python_icon:()=>e.jsx(d,{color:"#3776AB",title:"Python"}),cpp_icon:()=>e.jsx(p,{color:"#00599C",title:"C++"}),c_icon:()=>e.jsx(m,{color:"#A8B9CC",title:"C"})},$=({description:t,techIcons:o=[],placeholderIcons:l=[]})=>{const r=o.length>0?o:l;return e.jsxs(e.Fragment,{children:[r.length>0&&e.jsx("div",{className:"flex flex-wrap gap-4 mb-6 justify-center",children:r.map((n,a)=>{const s=T[n];return s?e.jsx("span",{className:"text-3xl md:text-4xl",children:s()},a):null})}),e.jsx("p",{className:"font-mono text-gray-300 text-sm md:text-base leading-relaxed text-center mb-4",children:t})]})},i=({href:t,gradient:o,border:l,text:r,label:n})=>e.jsxs("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:`
      group/btn relative inline-flex items-center justify-center
      w-full
      px-4 py-2 text-sm
      sm:px-6 sm:py-3 sm:text-base
      md:px-8 md:py-3 md:text-lg
      font-mono font-bold rounded-lg overflow-hidden
      transition-all duration-300
      max-w-full
    `,children:[e.jsx("span",{className:`absolute inset-0 ${o} rounded-lg transition-all duration-300`}),e.jsx("span",{className:"absolute inset-0 bg-black/80 rounded-lg"}),e.jsx("span",{className:`
      relative z-10 border ${l} rounded-lg
      px-4 py-2 text-sm
      sm:px-6 sm:py-3 sm:text-base
      md:px-8 md:py-3 md:text-lg
      bg-black/60 ${r}
      group-hover/btn:text-white group-hover/btn:${l.replace("/40","/60")}
      min-w-[90px] sm:min-w-[120px]
      text-center transition-all duration-300
    `,children:n})]}),z=({githubLink:t,liveLink:o,npmLink:l,additionalLinks:r=[],customLabels:n={}})=>{const{t:a}=S(),s={github:a("projects.links.github"),live:a("projects.links.live"),npm:"NPM",...n};return e.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-md mx-auto",children:[t&&e.jsx(i,{href:t,label:s.github,gradient:"bg-gradient-to-r from-green-500/20 to-emerald-500/20 group-hover:from-green-500/40 group-hover:to-emerald-500/40",border:"border-green-400/40",text:"text-green-400"}),o&&e.jsx(i,{href:o,label:s.live,gradient:"bg-gradient-to-r from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/40 group-hover:to-cyan-500/40",border:"border-blue-400/40",text:"text-blue-400"}),l&&e.jsx(i,{href:l,label:s.npm,gradient:"bg-gradient-to-r from-red-500/20 to-orange-500/20 group-hover:from-red-500/40 group-hover:to-orange-500/40",border:"border-red-400/40",text:"text-red-400"}),r.map(({url:h,label:c})=>e.jsx(i,{href:h,label:c,gradient:"bg-gradient-to-r from-purple-500/20 to-violet-500/20 group-hover:from-purple-500/40 group-hover:to-violet-500/40",border:"border-purple-400/40",text:"text-purple-400"},c))]})},G=u.memo(({project:t,index:o,isHovered:l,onHover:r,onLeave:n,hideNumber:a,customLabels:s})=>e.jsxs("div",{className:"group relative outline-none mb-8",tabIndex:0,onMouseEnter:r,onMouseLeave:n,children:[e.jsx("div",{className:`absolute -inset-4 bg-gradient-to-r from-green-400/10 via-emerald-400/10 to-green-400/10 rounded-xl blur transition-all duration-500 ${l?"opacity-100 scale-105":"opacity-0 scale-100"}`}),!a&&e.jsx("div",{className:`
      absolute
      -left-4 top-4
      w-8 h-8 sm:w-9 sm:h-9
      bg-green-400
      rounded-full
      flex items-center justify-center
      font-mono font-bold text-black
      text-sm sm:text-base
      shadow-lg border-2 border-black
      z-20
      pointer-events-none
    `,"aria-label":`Projekt numer ${o+1}`,children:o+1}),e.jsxs("div",{className:`
        relative bg-black/90 rounded-xl border border-green-400/30 
        overflow-hidden backdrop-blur-sm min-w-0
        w-full
        flex flex-col
      `,children:[e.jsx("div",{className:"p-4 sm:p-6 pb-0 flex-shrink-0",children:e.jsx(_,{title:t.title})}),e.jsx("div",{className:"flex flex-col flex-grow min-h-0",children:e.jsxs("div",{className:"p-4 sm:p-6 flex flex-col flex-grow min-h-0",children:[e.jsx("div",{className:"space-y-3 sm:space-y-4 flex-grow min-h-0",children:e.jsx($,{description:t.description,techIcons:t.techIcons,placeholderIcons:t.icons})}),e.jsx("div",{className:"flex-shrink-0 mt-8",children:e.jsx(z,{githubLink:t.githubLink,liveLink:t.liveLink,additionalLinks:t.additionalLinks,npmLink:t.npmLink,customLabels:s})})]})})]})]}));export{G as P};
