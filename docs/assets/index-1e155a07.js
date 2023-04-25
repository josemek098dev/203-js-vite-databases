(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const w="/203-js-vite-databases/assets/javascript-8dac5379.svg",N="/203-js-vite-databases/vite.svg";class y{constructor({id:t,isActive:a,balance:s,avatar:r,firstName:n,lastName:c,gender:m}){this.id=t,this.isActive=a,this.balance=s,this.avatar=r,this.firstName=n,this.lastName=c,this.gender=m}}const g=e=>{const{avatar:t,balance:a,first_name:s,gender:r,id:n,isActive:c,last_name:m}=e;return new y({avatar:t,balance:a,firstName:s,gender:r,id:n,isActive:c,lastName:m})},f=async(e=4)=>{const t=`https://my-json-server.typicode.com/josemek098dev/204-data/users?_page=${e}`;return(await(await fetch(t)).json()).map(g)},o={currentPage:0,users:[]},P=async()=>{const e=await f(o.currentPage+1);e.length!==0&&(o.currentPage+=1,o.users=e)},b=async()=>{if(o.currentPage===1)return;const e=await f(o.currentPage-1);o.users=e,o.currentPage-=1},T=e=>{let t=!1;o.users=o.users.map(a=>a.id===e.id?(t=!0,e):a),o.users.length<10&&!t&&o.users.push(e)},j=async()=>{const e=await f(o.currentPage);if(e.length===0){await b();return}o.users=e},d={loadNextPage:P,loadPreviousPage:b,onUserChanged:T,reloadPage:j,getUsers:()=>[...o.users],getCurrentPage:()=>o.currentPage},$=async e=>{const t=`https://my-json-server.typicode.com/josemek098dev/204-data/users/${e}`,s=await(await fetch(t,{method:"DELETE"})).json();return console.log({deleteResult:s}),!0},E=`<div class="modal-dialog">\r
    <form novalidate>\r
        <span>User</span>\r
        <input type="text" name="firstName" placeholder="First Name" />\r
        <input type="text" name="lastName" placeholder="Last Name" />\r
        <input type="number" name="balance" placeholder="Balance" />\r
\r
        <div>\r
            <input type="checkbox" id="is-active" name="isActive" checked/>\r
            <label for="is-active">is active?</label>\r
        </div>\r
\r
        <button type="submit">\r
            Save\r
        </button>\r
\r
    </form>\r
\r
</div>`;const S=async e=>{const t=`https://my-json-server.typicode.com/josemek098dev/204-data/users/${e}`,s=await(await fetch(t)).json(),r=g(s);return console.log({user:r}),r};let i,l,v={};const L=async e=>{if(i==null||i.classList.remove("hide-modal"),v={},!e)return;const t=await S(e);A(t)},h=()=>{i==null||i.classList.add("hide-modal"),l==null||l.reset()},A=e=>{l.querySelector('[name="firstName"]').value=e.firstName,l.querySelector('[name="lastName"]').value=e.lastName,l.querySelector('[name="balance"]').value=e.balance,l.querySelector('[name="isActive"]').checked=e.isActive,v=e},U=(e,t)=>{i||(i=document.createElement("div"),i.innerHTML=E,i.className="modal-container hide-modal",l=i.querySelector("form"),i.addEventListener("click",a=>{a.target.className==="modal-container"&&h()}),l.addEventListener("submit",async a=>{a.preventDefault();const s=new FormData(l);s.get("isActive")||s.append("isActive","off");const r={...v};for(const[n,c]of s){if(n==="balance"){r[n]=+c;continue}if(n==="isActive"){r[n]=c==="on";continue}r[n]=c}console.log(r),await t(r),h()}),e.append(i))};let u;const x=()=>{const e=document.createElement("table"),t=document.createElement("thead");t.innerHTML=`
    <tr>
        <th>#ID</th>
        <th>Balance</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
    </tr>
    `;const a=document.createElement("tbody");return e.append(t,a),e},k=e=>{const t=e.target.closest(".select-user");if(console.log(t),!t)return;const a=t.getAttribute("data-id");L(a)},B=async e=>{const t=e.target.closest(".delete-user");if(!t)return;const a=t.getAttribute("data-id");try{await $(a),await d.reloadPage(),document.querySelector("#current-page").innerText=d.getCurrentPage(),p()}catch{alert("No se pudo eliminar")}},p=e=>{const t=d.getUsers();u||(u=x(),e.append(u),u.addEventListener("click",s=>k(s)),u.addEventListener("click",s=>B(s)));let a="";t.forEach(s=>{a+=`
        <tr>
        <td>${s.id}      </td>
        <td>${s.balance}  </td>
        <td>${s.firstName}</td>
        <td>${s.lastName} </td>
        <td>${s.isActive}  </td>
        <td>
            <a href="#/" class="select-user"  data-id="${s.id}" > Select </a>
            |
            <a href="#/"  class="delete-user" data-id= "${s.id}"> Delete </a>
        </td>
        </tr>
        `}),u.querySelector("tbody").innerHTML=a};const M=e=>{const t=document.createElement("button");t.innerText=" Next >";const a=document.createElement("button");a.innerText="<Prev ";const s=document.createElement("span");s.id="current-page",s.innerText=d.getCurrentPage(),e.append(a,s,t),t.addEventListener("click",async()=>{await d.loadNextPage(),s.innerText=d.getCurrentPage(),p(e)}),a.addEventListener("click",async()=>{await d.loadPreviousPage(),s.innerText=d.getCurrentPage(),p(e)})};const C=(e,t)=>{const a=document.createElement("button");a.innerText="+",a.classList.add("fab-button"),e.append(a),a.addEventListener("click",()=>{L()})},q=e=>{const{avatar:t,balance:a,firstName:s,gender:r,id:n,isActive:c,lastName:m}=e;return{avatar:t,balance:a,first_name:s,gender:r,id:n,isActive:c,last_name:m}},H=async e=>{const t=new y(e);if(!t.firstName||!t.lastName)throw"First & last name are required";const a=q(t);let s;return t.id?s=await D(a):s=await O(a),g(s)},O=async e=>{const s=await(await fetch("https://my-json-server.typicode.com/josemek098dev/204-data/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json();return console.log({newUser:s}),s},D=async e=>{const t=`https://my-json-server.typicode.com/josemek098dev/204-data/users/${e.id}`,s=await(await fetch(t,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json();return console.log({updatedUser:s}),s},F=async e=>{e.innerHTML="Loading...",await d.loadNextPage(),e.innerHTML="",p(e),M(e),C(e),U(e,async t=>{const a=await H(t);console.log(a),d.onUserChanged(a),p()})};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${N}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${w}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Customers Table</h1>
    <div id="card">
      
    </div>
    
  </div>
`;const _=document.getElementById("card");F(_);
