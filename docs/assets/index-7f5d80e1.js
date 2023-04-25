(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const w="/203-js-vite-databases/assets/javascript-8dac5379.svg",N="/203-js-vite-databases/vite.svg";class y{constructor({id:t,isActive:s,balance:a,avatar:r,firstName:n,lastName:c,gender:m}){this.id=t,this.isActive=s,this.balance=a,this.avatar=r,this.firstName=n,this.lastName=c,this.gender=m}}const g=e=>{const{avatar:t,balance:s,first_name:a,gender:r,id:n,isActive:c,last_name:m}=e;return new y({avatar:t,balance:s,firstName:a,gender:r,id:n,isActive:c,lastName:m})},f=async(e=4)=>{const t=`https://my-json-server.typicode.com/josemek098dev/204-data/users?_page=${e}`;return(await(await fetch(t)).json()).map(g)},o={currentPage:0,users:[]},P=async()=>{const e=await f(o.currentPage+1);e.length!==0&&(o.currentPage+=1,o.users=e)},b=async()=>{if(o.currentPage===1)return;const e=await f(o.currentPage-1);o.users=e,o.currentPage-=1},T=e=>{let t=!1;o.users=o.users.map(s=>s.id===e.id?(t=!0,e):s),o.users.length<10&&!t&&o.users.push(e)},j=async()=>{const e=await f(o.currentPage);if(e.length===0){await b();return}o.users=e},d={loadNextPage:P,loadPreviousPage:b,onUserChanged:T,reloadPage:j,getUsers:()=>[...o.users],getCurrentPage:()=>o.currentPage},$=async e=>{const t=`https://my-json-server.typicode.com/josemek098dev/204-data/users/${e}`,a=await(await fetch(t,{method:"DELETE"})).json();return console.log({deleteResult:a}),!0},E=`<div class="modal-dialog">\r
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
</div>`;const S=async e=>{const t=`https://my-json-server.typicode.com/josemek098dev/204-data/users/${e}`,a=await(await fetch(t)).json(),r=g(a);return console.log({user:r}),r};let i,l,v={};const L=async e=>{if(i==null||i.classList.remove("hide-modal"),v={},!e)return;const t=await S(e);A(t)},h=()=>{i==null||i.classList.add("hide-modal"),l==null||l.reset()},A=e=>{l.querySelector('[name="firstName"]').value=e.firstName,l.querySelector('[name="lastName"]').value=e.lastName,l.querySelector('[name="balance"]').value=e.balance,l.querySelector('[name="isActive"]').checked=e.isActive,v=e},U=(e,t)=>{i||(i=document.createElement("div"),i.innerHTML=E,i.className="modal-container hide-modal",l=i.querySelector("form"),i.addEventListener("click",s=>{s.target.className==="modal-container"&&h()}),l.addEventListener("submit",async s=>{s.preventDefault();const a=new FormData(l);a.get("isActive")||a.append("isActive","off");const r={...v};for(const[n,c]of a){if(n==="balance"){r[n]=+c;continue}if(n==="isActive"){r[n]=c==="on";continue}r[n]=c}console.log(r),await t(r),h()}),e.append(i))};let u;const x=()=>{const e=document.createElement("table"),t=document.createElement("thead");t.innerHTML=`
    <tr>
        <th>#ID</th>
        <th>Balance</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
    </tr>
    `;const s=document.createElement("tbody");return e.append(t,s),e},k=e=>{const t=e.target.closest(".select-user");if(console.log(t),!t)return;const s=t.getAttribute("data-id");L(s)},B=async e=>{const t=e.target.closest(".delete-user");if(!t)return;const s=t.getAttribute("data-id");try{await $(s),await d.reloadPage(),document.querySelector("#current-page").innerText=d.getCurrentPage(),p()}catch{alert("No se pudo eliminar")}},p=e=>{const t=d.getUsers();u||(u=x(),e.append(u),u.addEventListener("click",a=>k(a)),u.addEventListener("click",a=>B(a)));let s="";t.forEach(a=>{s+=`
        <tr>
        <td>${a.id}      </td>
        <td>${a.balance}  </td>
        <td>${a.firstName}</td>
        <td>${a.lastName} </td>
        <td>${a.isActive}  </td>
        <td>
            <a href="#/" class="select-user"  data-id="${a.id}" > Select </a>
            |
            <a href="#/"  class="delete-user" data-id= "${a.id}"> Delete </a>
        </td>
        </tr>
        `}),u.querySelector("tbody").innerHTML=s};const M=e=>{const t=document.createElement("button");t.innerText=" Next >";const s=document.createElement("button");s.innerText="<Prev ";const a=document.createElement("span");a.id="current-page",a.innerText=d.getCurrentPage(),e.append(s,a,t),t.addEventListener("click",async()=>{await d.loadNextPage(),a.innerText=d.getCurrentPage(),p(e)}),s.addEventListener("click",async()=>{await d.loadPreviousPage(),a.innerText=d.getCurrentPage(),p(e)})};const H=(e,t)=>{const s=document.createElement("button");s.innerText="+",s.classList.add("fab-button"),e.append(s),s.addEventListener("click",()=>{L()})},q=e=>{const{avatar:t,balance:s,firstName:a,gender:r,id:n,isActive:c,lastName:m}=e;return{avatar:t,balance:s,first_name:a,gender:r,id:n,isActive:c,last_name:m}},C=async e=>{const t=new y(e);if(!t.firstName||!t.lastName)throw"First & last name are required";const s=q(t);let a;return t.id?a=await D(s):a=await O(s),g(a)},O=async e=>{const a=await(await fetch("https://my-json-server.typicode.com/josemek098dev/204-data/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json();return console.log({newUser:a}),a},D=async e=>{const t=`https://my-json-server.typicode.com/josemek098dev/204-data/users/${e.id}`,a=await(await fetch(t,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json();return console.log({updatedUser:a}),a},F=async e=>{e.innerHTML="Loading...",await d.loadNextPage(),e.innerHTML="",p(e),M(e),H(e),U(e,async t=>{const s=await C(t);console.log(s),d.onUserChanged(s),p()})};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${N}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${w}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hola Vite!</h1>
    <div id="card">
      
    </div>
    
  </div>
`;const _=document.getElementById("card");F(_);
