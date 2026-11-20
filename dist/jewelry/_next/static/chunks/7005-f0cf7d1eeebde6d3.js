"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7005],{63731:function(e,t,n){n.d(t,{default:function(){return g}});var a=n(57437),r=n(27648),o=n(99376),i=n(77732),c=n(41501),s=n(45047),l=n(94884),u=n(57166),d=n(21451),p=n(20620),m=n(78416),x=n(78975),h=n(79637);function g(){let e=(0,o.usePathname)(),t=(0,h.NT)(),n=[{href:"/admin/accounting",label:t("accounting.accountingNav.dashboard"),icon:i.Z,exact:!0},{href:"/admin/accounting/registers",label:t("accounting.accountingNav.bankCash"),icon:c.Z},{href:"/admin/accounting/journal/pathao",label:t("accounting.accountingNav.courierSettlement"),icon:s.Z},{href:"/admin/accounting/reports/income-statement",label:t("accounting.accountingNav.reports"),icon:l.Z,matchPrefix:"/admin/accounting/reports"},{href:"/admin/accounting/chart-of-accounts",label:t("accounting.accountingNav.chartAccounts"),icon:u.Z},{href:"/admin/accounting/journal",label:t("accounting.accountingNav.journal"),icon:d.Z,exact:!0},{href:"/admin/accounting/ledger",label:t("accounting.accountingNav.generalLedger"),icon:d.Z},{href:"/admin/accounting/sales",label:t("accounting.accountingNav.salesJournal"),icon:p.Z},{href:"/admin/accounting/purchases",label:t("accounting.accountingNav.purchaseLedger"),icon:m.Z},{href:"/admin/accounting/health",label:t("accounting.accountingNav.healthCheck"),icon:x.Z}];return(0,a.jsx)("nav",{className:"border-b border-neutral-200 flex overflow-x-auto no-scrollbar scroll-smooth gap-6 sm:gap-8 pb-px","aria-label":t("accounting.accountingNav.accountingNavigation"),children:n.map(t=>{let n=t.icon,o=t.exact?e===t.href:e?.startsWith(t.matchPrefix||t.href);return(0,a.jsxs)(r.default,{href:t.href,className:`text-sm font-medium transition-colors pb-3 pt-1 border-b-2 whitespace-nowrap flex items-center gap-2 shrink-0 ${o?"border-neutral-950 text-neutral-950 font-semibold":"border-transparent text-neutral-600 hover:text-neutral-950 hover:border-neutral-300"}`,children:[(0,a.jsx)(n,{className:"w-4 h-4 shrink-0"}),(0,a.jsx)("span",{children:t.label})]},t.href)})})}},44770:function(e,t,n){n.d(t,{default:function(){return b}});var a=n(57437),r=n(2265),o=n(24754),i=n(74283),c=n(95118),s=n(72643),l=n(45584),u=n(74958),d=n(73455),p=n(52619),m=n(72040),x=n(54775),h=n(79637),g=n(43322);function f({entry:e,isOpen:t,onClose:n}){let f=(0,h.bU)(),b=(0,h.NT)(),{locale:v,digits:N}=(0,h.bU)(),y=(0,c.jR)(),[j,E]=(0,r.useState)(!1),w=(0,r.useRef)(()=>{});if((0,r.useEffect)(()=>{if(!t||!e)return;let n=e=>{(e.ctrlKey||e.metaKey)&&"p"===e.key.toLowerCase()&&(e.preventDefault(),w.current())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[t,e]),!e)return null;let D=(e.lines||[]).filter(e=>"DEBIT"===e.type).reduce((e,t)=>e+(Number(t.amount)||0),0),C=(e.lines||[]).filter(e=>"CREDIT"===e.type).reduce((e,t)=>e+(Number(t.amount)||0),0),I=async()=>{if(e.voucherNo)try{await navigator.clipboard.writeText(e.voucherNo),E(!0),setTimeout(()=>E(!1),2e3)}catch{}},R=()=>{if(!e)return;let t=document.createElement("iframe");t.setAttribute("style","position:fixed;visibility:hidden;height:0;width:0;left:-9999px;bottom:0;border:0;"),document.body.appendChild(t);let n=t.contentWindow?.document;if(!n)return;let a=(0,d.TT)(e.date,{locale:v,digits:N}),r=b(`accounting.voucher.state.${"REVERSED"===e.status?"REVERSED":"ACTIVE"}`),o=e.lines.map(e=>`
        <tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; vertical-align: top;">
            <div style="display: flex; align-items: center; gap: 6px; ${"CREDIT"===e.type?"padding-left: 20px; color: #475569;":"color: #0f172a; font-weight: 600;"}">
              ${"CREDIT"===e.type?'<span style="color: #94a3b8; font-family: monospace;">↳</span>':""}
              <span>${e.account?.code?e.account.code+" - ":""}${e.account?.name||b("common.account")}</span>
              ${e.account?.type?`<span style="font-size: 9px; font-weight: 700; text-transform: uppercase; padding: 1px 5px; background: #f1f5f9; color: #64748b; border: 1px solid #cbd5e1; border-radius: 3px; margin-left: 4px;">${e.account.type}</span>`:""}
            </div>
          </td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; text-align: right; font-family: monospace; font-size: 12px; vertical-align: top;">
            ${"DEBIT"===e.type?(0,u.Hz)(e.amount,void 0,N):"—"}
          </td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; text-align: right; font-family: monospace; font-size: 12px; vertical-align: top;">
            ${"CREDIT"===e.type?(0,u.Hz)(e.amount,void 0,N):"—"}
          </td>
        </tr>`).join(""),i=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${b("accounting.voucher.docTitle",{no:e.voucherNo||"JV"})}</title>
          <style>
            @page {
              size: A4 portrait;
              margin: 15mm 18mm;
            }
            * {
              box-sizing: border-box;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              color: #0f172a;
              margin: 0;
              padding: 0;
              background: #ffffff;
              font-size: 12px;
              line-height: 1.5;
            }
            .voucher-container {
              width: 100%;
              max-width: 100%;
              margin: 0 auto;
            }
            .header-bar {
              border-bottom: 2px solid #0f172a;
              padding-bottom: 14px;
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
            }
            .company-name {
              font-size: 22px;
              font-weight: 800;
              letter-spacing: -0.5px;
              text-transform: uppercase; /* design-check-ignore: print template */
              color: #0f172a;
              margin: 0;
            }
            .company-sub {
              font-size: 11px;
              color: #64748b;
              margin-top: 3px;
            }
            .badge-wrap {
              text-align: right;
            }
            .voucher-badge {
              display: inline-block;
              background: #0f172a;
              color: #ffffff;
              font-size: 11px;
              font-weight: 800;
              text-transform: uppercase; /* design-check-ignore: print template */
              letter-spacing: 1px;
              padding: 4px 10px;
              border-radius: 4px;
            }
            .voucher-no {
              font-family: monospace;
              font-size: 13px;
              font-weight: 700;
              color: #4F46E5;
              margin-top: 6px;
            }
            .meta-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 12px;
              background: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 12px 16px;
              margin-top: 18px;
            }
            .meta-label {
              font-size: 9px;
              font-weight: 700;
              text-transform: uppercase; /* design-check-ignore: print template */
              letter-spacing: 0.5px;
              color: #64748b;
              display: block;
              margin-bottom: 3px;
            }
            .meta-val {
              font-size: 12px;
              font-weight: 700;
              color: #0f172a;
            }
            .meta-val-mono {
              font-family: monospace;
              font-size: 12px;
              font-weight: 600;
              color: #1e293b;
            }
            .status-tag {
              display: inline-block;
              font-weight: 700;
              font-size: 11px;
              color: ${"REVERSED"===e.status?"#d97706":"#047857"}; /* design-check-ignore: print template */
            }
            .narration-box {
              border-left: 3px solid #0f172a;
              padding: 4px 0 4px 12px;
              margin-top: 16px;
            }
            .narration-text {
              font-size: 12px;
              font-weight: 500;
              color: #1e293b;
              margin-top: 4px;
              line-height: 1.4;
            }
            .table-wrap {
              border: 1px solid #cbd5e1;
              border-radius: 8px;
              overflow: hidden;
              margin-top: 20px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              font-size: 11.5px;
            }
            th {
              background: #f1f5f9;
              border-bottom: 1px solid #cbd5e1;
              font-weight: 700;
              text-transform: uppercase; /* design-check-ignore: print template */
              font-size: 10px;
              letter-spacing: 0.5px;
              color: #475569;
              padding: 8px 12px;
            }
            tfoot td {
              background: #f8fafc;
              border-top: 2px solid #cbd5e1;
              font-weight: 800;
              color: #0f172a;
              padding: 9px 12px;
            }
            .signatures {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 32px;
              margin-top: 60px;
              text-align: center;
            }
            .sign-line {
              border-top: 1px solid #94a3b8;
              padding-top: 8px;
              font-size: 11px;
              font-weight: 600;
              color: #475569;
            }
            .footer-note {
              margin-top: 36px;
              text-align: center;
              font-size: 9px;
              color: #94a3b8;
            }
          </style>
        </head>
        <body>
          <div class="voucher-container">
            <div class="header-bar">
              <div>
                <h1 class="company-name">${y.name}</h1>
                <div class="company-sub">${b("accounting.voucher.subtitle")}</div>
              </div>
              <div class="badge-wrap">
                <div class="voucher-badge">${b("accounting.voucher.title")}</div>
                <div class="voucher-no">${e.voucherNo||"—"}</div>
              </div>
            </div>

            <div class="meta-grid">
              <div>
                <span class="meta-label">${b("accounting.voucher.voucherNo")}</span>
                <span class="meta-val-mono">${e.voucherNo||"—"}</span>
              </div>
              <div>
                <span class="meta-label">${b("accounting.voucher.postingDate")}</span>
                <span class="meta-val">${a}</span>
              </div>
              <div>
                <span class="meta-label">${b("accounting.voucher.reference")}</span>
                <span class="meta-val-mono">${e.referenceId||"—"}</span>
              </div>
              <div>
                <span class="meta-label">${b("accounting.voucher.status")}</span>
                <span class="status-tag">${r}</span>
              </div>
            </div>

            <div class="narration-box">
              <span class="meta-label">${b("accounting.voucher.narration")}</span>
              <div class="narration-text">${e.description}</div>
            </div>

            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th style="text-align: left; width: 55%;">${b("accounting.voucher.accountHead")}</th>
                    <th style="text-align: right; width: 22.5%;">${b("accounting.voucher.debit")}</th>
                    <th style="text-align: right; width: 22.5%;">${b("accounting.voucher.credit")}</th>
                  </tr>
                </thead>
                <tbody>
                  ${o}
                </tbody>
                <tfoot>
                  <tr>
                    <td>${b("accounting.voucher.total")}</td>
                    <td style="text-align: right; font-family: monospace;">${(0,u.Hz)(D,void 0,N)}</td>
                    <td style="text-align: right; font-family: monospace;">${(0,u.Hz)(C,void 0,N)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div class="signatures">
              <div class="sign-line">${b("accounting.voucher.preparedBy")}</div>
              <div class="sign-line">${b("accounting.voucher.checkedBy")}</div>
              <div class="sign-line">${b("accounting.voucher.authorized")}</div>
            </div>

            <div class="footer-note">
              ${b("accounting.voucher.generatedOn",{date:(0,d.o0)(new Date,{locale:v,digits:N}),store:y.name})}
            </div>
          </div>
        </body>
      </html>
    `;n.open(),n.write(i),n.close(),t.contentWindow?.focus(),setTimeout(()=>{t.contentWindow?.print(),setTimeout(()=>{try{document.body.removeChild(t)}catch{}},2e3)},250)},T=(0,g._4)(new Date(e.date),{day:"2-digit",month:"short",year:"numeric"},f);return w.current=R,(0,a.jsx)(p.Z,{isOpen:t,onClose:n,title:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(s.Z,{className:"w-5 h-5 text-neutral-600"}),(0,a.jsx)("span",{children:b("accounting.journalVoucherModal.journalVoucher")})]}),description:e.voucherNo?b("accounting.journalVoucherModal.officialVoucher",{voucherNo:e.voucherNo}):b("accounting.journalVoucherModal.officialVoucherDetails"),size:"lg",footer:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.default,{type:"button",variant:"secondary",onClick:n,children:b("common.close")}),(0,a.jsx)(m.default,{type:"button",variant:"primary",leftIcon:(0,a.jsx)(l.Z,{className:"w-4 h-4"}),onClick:R,children:b("accounting.journalVoucherModal.printVoucher")})]}),children:(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsx)("div",{className:"p-4 bg-neutral-50 rounded-xl border border-neutral-200",children:(0,a.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-xs font-medium text-neutral-500 block",children:b("accounting.journalVoucherModal.voucherNumber")}),(0,a.jsxs)("div",{className:"flex items-center gap-1.5 mt-1 font-mono font-medium text-neutral-900",children:[" ",(0,a.jsx)("span",{className:"truncate",children:e.voucherNo||"—"}),e.voucherNo&&(0,a.jsx)("button",{type:"button",onClick:I,title:j?b("common.copied"):b("accounting.journalVoucherModal.copyVoucherNumber"),className:"text-neutral-400 hover:text-neutral-700 p-1 rounded-lg hover:bg-neutral-200 transition-colors",children:j?(0,a.jsx)(o.Z,{className:"w-3.5 h-3.5 text-success-600"}):(0,a.jsx)(i.Z,{className:"w-3.5 h-3.5"})})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-xs font-medium text-neutral-500 block",children:b("accounting.journalVoucherModal.postingDate")}),(0,a.jsx)("span",{className:"text-xs font-medium text-neutral-900 mt-1 block",children:T})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-xs font-medium text-neutral-500 block",children:b("common.reference")}),(0,a.jsxs)("span",{className:"font-mono text-xs text-neutral-700 mt-1 block truncate",title:e.referenceId||"—",children:[" ",e.referenceId||"—"]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-xs font-medium text-neutral-500 block",children:b("accounting.dues.col.status")}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsx)(x.default,{status:e.status||"ACTIVE",label:b(`accounting.voucher.state.${"REVERSED"===e.status?"REVERSED":"ACTIVE"}`),tone:"REVERSED"===e.status?"warning":"success"})})]})]})}),(0,a.jsxs)("div",{className:"border-l-2 border-neutral-950 pl-3 py-1",children:[(0,a.jsx)("span",{className:"text-xs font-medium text-neutral-500 block",children:b("accounting.journalVoucherModal.descriptionNarration")}),(0,a.jsx)("p",{className:"text-sm text-neutral-900 font-medium mt-1 leading-relaxed",children:e.description})]}),(0,a.jsx)("div",{className:"border border-neutral-200 rounded-xl overflow-hidden",children:(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full min-w-[340px] text-left border-collapse text-xs",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"bg-neutral-50 border-b border-neutral-200 text-neutral-600 font-medium",children:[(0,a.jsx)("th",{className:"px-4 py-3 w-[55%]",children:b("accounting.journalVoucherModal.accountHeadDetails")}),(0,a.jsx)("th",{className:"px-4 py-3 text-right w-[22.5%]",children:b("accounting.journalVoucherModal.debitBdt")}),(0,a.jsx)("th",{className:"px-4 py-3 text-right w-[22.5%]",children:b("accounting.journalVoucherModal.creditBdt")})]})}),(0,a.jsx)("tbody",{className:"divide-y divide-neutral-200",children:e.lines.map(e=>(0,a.jsxs)("tr",{className:"hover:bg-neutral-50/60 transition-colors",children:[(0,a.jsx)("td",{className:"px-4 py-3",children:(0,a.jsxs)("div",{className:`flex items-center gap-2 ${"CREDIT"===e.type?"pl-5 text-neutral-600":"text-neutral-900 font-medium"}`,children:["CREDIT"===e.type&&(0,a.jsx)("span",{className:"text-neutral-400 text-xs",children:"↳"}),(0,a.jsxs)("span",{children:[e.account?.code?`${e.account.code} - `:"",e.account?.name||b("common.account")]}),e.account?.type&&(0,a.jsx)("span",{className:"text-xs font-medium px-2 py-1 bg-neutral-100 text-neutral-600 rounded-lg border border-neutral-200",children:e.account.type})]})}),(0,a.jsx)("td",{className:"px-4 py-3 text-right tabular-nums text-neutral-900 font-medium",children:"DEBIT"===e.type?(0,u.Hz)(e.amount,void 0,N):"—"}),(0,a.jsx)("td",{className:"px-4 py-3 text-right tabular-nums text-neutral-900 font-medium",children:"CREDIT"===e.type?(0,u.Hz)(e.amount,void 0,N):"—"})]},e.id))}),(0,a.jsx)("tfoot",{children:(0,a.jsxs)("tr",{className:"bg-neutral-50 border-t-2 border-neutral-200 font-semibold text-neutral-950",children:[(0,a.jsx)("td",{className:"px-4 py-3 text-xs",children:b("common.total")}),(0,a.jsx)("td",{className:"px-4 py-3 text-right tabular-nums text-xs",children:(0,u.Hz)(D,void 0,N)}),(0,a.jsx)("td",{className:"px-4 py-3 text-right tabular-nums text-xs",children:(0,u.Hz)(C,void 0,N)})]})})]})})}),(0,a.jsxs)("div",{className:"pt-6 grid grid-cols-3 gap-4 text-center text-xs",children:[(0,a.jsx)("div",{className:"border-t border-neutral-300 pt-2",children:(0,a.jsx)("span",{className:"text-neutral-600 font-medium truncate block",children:b("accounting.journalVoucherModal.prepared")})}),(0,a.jsx)("div",{className:"border-t border-neutral-300 pt-2",children:(0,a.jsx)("span",{className:"text-neutral-600 font-medium truncate block",children:b("accounting.journalVoucherModal.checkedVerified")})}),(0,a.jsx)("div",{className:"border-t border-neutral-300 pt-2",children:(0,a.jsx)("span",{className:"text-neutral-600 font-medium truncate block",children:b("accounting.journalVoucherModal.authorizedSign")})})]})]})})}function b({entry:e}){let t=(0,h.NT)(),[n,c]=(0,r.useState)(!1),[s,l]=(0,r.useState)(!1);if(!e?.voucherNo)return(0,a.jsx)("span",{className:"text-neutral-400 text-xs",children:"—"});let u=async t=>{t.stopPropagation();try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(e.voucherNo);else{let t=document.createElement("textarea");t.value=e.voucherNo,t.style.position="fixed",t.style.left="-999999px",t.style.top="-999999px",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}l(!0),setTimeout(()=>l(!1),2e3)}catch{}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"inline-flex items-center gap-2 group",children:[(0,a.jsx)("button",{type:"button",onClick:()=>c(!0),title:t("accounting.voucherButton.viewPrintJournalVoucher"),className:"font-mono text-sm font-medium text-neutral-900 hover:underline transition-colors select-all cursor-pointer text-left",children:e.voucherNo}),(0,a.jsx)("button",{type:"button",onClick:u,title:t(s?"common.copied":"accounting.voucherButton.copyVoucherNumber"),"aria-label":t("accounting.voucherButton.copyVoucherNumber"),className:"text-neutral-400 hover:text-neutral-700 transition-colors p-1 rounded-lg hover:bg-neutral-100 focus:outline-none focus:ring-1 focus:ring-primary-600 cursor-pointer",children:s?(0,a.jsx)(o.Z,{className:"w-3.5 h-3.5 text-success-600 animate-in zoom-in duration-200"}):(0,a.jsx)(i.Z,{className:"w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-600 transition-colors"})})]}),(0,a.jsx)(f,{entry:e,isOpen:n,onClose:()=>c(!1)})]})}},95118:function(e,t,n){n.d(t,{StoreBrandingProvider:function(){return c},c0:function(){return u},ZX:function(){return l},jR:function(){return s}});var a=n(57437),r=n(2265);let o="Thank you for shopping with us. We hope you love your purchase!",i=(0,r.createContext)({name:"My Store",logoUrl:null,phone:"",email:"",address:"",invoiceFooter:o,posFooter:o,siteUrl:""});function c({value:e,children:t}){return(0,a.jsx)(i.Provider,{value:e,children:t})}function s(){return(0,r.useContext)(i)}function l(){return(0,a.jsx)(a.Fragment,{children:s().name})}function u(){return(0,a.jsx)(a.Fragment,{children:s().name.trim().charAt(0).toUpperCase()||"S"})}},75084:function(e,t,n){n.r(t),n.d(t,{EmptyState:function(){return l}});var a=n(57437);n(2265);var r=n(19150),o=n(75208),i=n(16325),c=n(72040),s=n(79637);function l({variant:e="no-data",icon:t,title:n,description:l,actionLabel:u,onAction:d,action:p,className:m=""}){let x=(0,s.NT)(),h="no-results"===e,g=h?(0,a.jsx)(r.Z,{className:"w-6 h-6 text-neutral-500"}):(0,a.jsx)(o.Z,{className:"w-6 h-6 text-neutral-500"}),f=x(h?"common.empty.noResults":"common.empty.noItems"),b=x(h?"common.empty.noResultsHint":"common.empty.noItemsHint"),v=void 0!==t?t:g;return(0,a.jsxs)("div",{className:`flex flex-col items-center justify-center p-8 sm:p-12 text-center select-none ${m}`.trim(),children:[v&&(0,a.jsx)("div",{className:"w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-4 shrink-0",children:v}),(0,a.jsx)("h4",{className:"text-base font-semibold text-neutral-950",children:n||f}),(0,a.jsx)("p",{className:"text-sm text-neutral-600 max-w-sm mt-1",children:l||b}),(p||u&&d)&&(0,a.jsx)("div",{className:"mt-5 flex items-center gap-3",children:p||(0,a.jsx)(c.default,{type:"button",variant:h?"secondary":"primary",size:"md",onClick:d,leftIcon:h?void 0:(0,a.jsx)(i.Z,{className:"w-4 h-4"}),children:u})})]})}t.default=l},54775:function(e,t,n){n.r(t),n.d(t,{StatusBadge:function(){return o}});var a=n(57437);n(2265);var r=n(37802);function o({status:e,label:t,tone:n,showDot:o=!0,className:i=""}){let c=n||(0,r._U)(e),s=r.L5[c]||r.L5.neutral,l=t||function(e){if(!e)return"";let t=e.replace(/[_-]+/g," ").trim().toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e);return(0,a.jsxs)("span",{className:`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${s.badge} ${i}`.trim(),children:[o&&(0,a.jsx)("span",{className:`w-1.5 h-1.5 rounded-full shrink-0 ${s.dot}`,"aria-hidden":"true"}),(0,a.jsx)("span",{className:"truncate",children:l})]})}t.default=o},37802:function(e,t,n){n.d(t,{L5:function(){return a},_U:function(){return o}});let a={neutral:{badge:"bg-neutral-100 text-neutral-700 border-neutral-200",dot:"bg-neutral-500",text:"text-neutral-700"},info:{badge:"bg-info-50 text-info-700 border-info-200",dot:"bg-info-700",text:"text-info-700"},warning:{badge:"bg-warning-50 text-warning-800 border-warning-200",dot:"bg-warning-800",text:"text-warning-800"},success:{badge:"bg-success-50 text-success-700 border-success-200",dot:"bg-success-700",text:"text-success-700"},danger:{badge:"bg-danger-50 text-danger-700 border-danger-200",dot:"bg-danger-700",text:"text-danger-700"}},r={NEW:"warning",CONFIRMED:"info",PACKED:"info",SHIPPED:"info",DELIVERED:"success",PARTIAL:"info",RETURNING:"warning",RETURNED:"neutral",CANCELLED:"danger",HOLD:"warning",ON_HOLD:"warning",IN_TRANSIT:"info",PENDING:"warning",PROCESSING:"info",INITIATED:"info",FAILED:"danger",PAID:"success",PARTIALLY_PAID:"warning",UNPAID:"warning",DUE:"warning",REFUNDED:"neutral",PARTIALLY_REFUNDED:"neutral",ORDERED:"info",RECEIVED:"success",ACTIVE:"success",INACTIVE:"neutral",DRAFT:"neutral",PUBLISHED:"success",HIDDEN:"neutral",ARCHIVED:"neutral",OUT_OF_STOCK:"danger",LOW_STOCK:"warning",EXPIRED:"danger",SUSPENDED:"danger",PENDING_REVIEW:"warning",APPROVED:"info",REJECTED:"danger",REVERSED:"neutral",POSTED:"success",MATCHED:"success",ALREADY_SETTLED:"neutral",AMOUNT_DISCREPANCY:"warning",CONFLICT_UNMATCHED:"danger",MANUALLY_RESOLVED:"info",SKIPPED:"neutral",RUNNING:"info",SUCCESS:"success",SCHEDULED:"neutral",COMPLETED:"success",SENT:"success"};function o(e){return e?r[e.trim().toUpperCase().replace(/[\s-]+/g,"_")]??"neutral":"neutral"}},74958:function(e,t,n){n.d(t,{Hz:function(){return i},_k:function(){return r},z:function(){return o}});var a=n(43331);function r(e){return Math.round(e)}function o(e){if(null==e)return 0;if("number"==typeof e)return e;if("string"==typeof e)return parseFloat(e)||0;if("object"==typeof e){if("function"==typeof e.toNumber)return e.toNumber();if(e.d&&Array.isArray(e.d)){let t=-1===e.s?"-":"",n=e.d.join(""),a="number"==typeof e.e?e.e:0,r=parseFloat(t+n)*Math.pow(10,a-(n.length-1));return isNaN(r)?0:r}}return Number(e)||0}function i(e,t,n="en"){let o=r(e);return void 0!==t&&0===o?t:(0,a.VN)(`৳${o.toLocaleString("en-IN")}`,n)}}}]);