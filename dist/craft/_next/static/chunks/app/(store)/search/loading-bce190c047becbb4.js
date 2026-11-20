(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9965,8966],{8562:function(e,r,n){Promise.resolve().then(n.bind(n,12228)),Promise.resolve().then(n.t.bind(n,72972,23)),Promise.resolve().then(n.bind(n,23836)),Promise.resolve().then(n.bind(n,39295)),Promise.resolve().then(n.bind(n,36638)),Promise.resolve().then(n.bind(n,51706)),Promise.resolve().then(n.bind(n,89366))},36638:function(e,r,n){"use strict";n.d(r,{ProductGridSkeleton:function(){return t}});var i=n(57437);function s({className:e=""}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer-box {
          position: relative;
          overflow: hidden;
        }
        .shimmer-box::after {
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          transform: translateX(-100%);
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.45) 20%,
            rgba(255, 255, 255, 0.75) 60%,
            rgba(255, 255, 255, 0)
          );
          animation: shimmer 1.5s infinite;
          content: '';
        }
        .dark .shimmer-box::after {
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.05) 20%,
            rgba(255, 255, 255, 0.12) 60%,
            rgba(255, 255, 255, 0)
          );
        }
      `}),(0,i.jsxs)("div",{className:`flex flex-col bg-white dark:bg-ink-900 border border-ink-200/80 dark:border-ink-800 rounded-none overflow-hidden shadow-2xs select-none ${e}`,children:[(0,i.jsx)("div",{className:"w-full aspect-[3/4] bg-ink-100 dark:bg-ink-800/60 shimmer-box relative overflow-hidden"}),(0,i.jsxs)("div",{className:"px-2.5 sm:px-3 pb-3 pt-2.5 flex flex-col gap-2 flex-1",children:[(0,i.jsxs)("div",{className:"space-y-1.5 mt-0.5",children:[(0,i.jsx)("div",{className:"h-3.5 bg-ink-100 dark:bg-ink-800/60 rounded shimmer-box w-4/5"}),(0,i.jsx)("div",{className:"h-3.5 bg-ink-100 dark:bg-ink-800/60 rounded shimmer-box w-3/5"})]}),(0,i.jsxs)("div",{className:"flex items-center justify-between gap-2 mt-auto pt-2",children:[(0,i.jsxs)("div",{className:"space-y-1 min-w-0 flex-1",children:[(0,i.jsx)("div",{className:"h-4 bg-ink-100 dark:bg-ink-800/60 rounded shimmer-box w-16"}),(0,i.jsx)("div",{className:"h-2.5 bg-ink-100 dark:bg-ink-800/60 rounded shimmer-box w-10"})]}),(0,i.jsx)("div",{className:"w-12 sm:w-16 h-7 sm:h-8 bg-ink-100 dark:bg-ink-800/60 rounded-lg sm:rounded-xl shrink-0 shimmer-box"})]})]})]})]})}function t({count:e=4,className:r="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"}){return(0,i.jsx)("div",{className:r,children:Array.from({length:e}).map((e,r)=>(0,i.jsx)(s,{},r))})}n(2265)},21396:function(e,r,n){"use strict";n.d(r,{Ho:function(){return t},Jl:function(){return a}});var i=n(57437),s=n(2265);function t({text:e,tags:r}){return(0,i.jsx)(i.Fragment,{children:d(e,r)})}let a=d;function d(e,r){let n;let t=[],a=/<(\d+)>([\s\S]*?)<\/\1>/g,o=0,l=0;for(;n=a.exec(e);){n.index>o&&t.push(e.slice(o,n.index));let c=n[2]?d(n[2],r):[],m=r[n[1]];t.push((0,i.jsx)(s.Fragment,{children:m?m(c):c},l++)),o=a.lastIndex}return o<e.length&&t.push(e.slice(o)),t}},87367:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});let i=(0,n(95480).Z)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},34630:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});let i=(0,n(95480).Z)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]])},78975:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});let i=(0,n(95480).Z)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])}},function(e){e.O(0,[2972,5224,3386,4082,5878,4032,890,1976,2345,1706,2971,2117,1744],function(){return e(e.s=8562)}),_N_E=e.O()}]);