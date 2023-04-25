(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const w="/203-js-vite-databases/assets/javascript-8dac5379.svg",N="/203-js-vite-databases/vite.svg";class y{constructor({id:t,isActive:s,balance:a,avatar:n,firstName:r,lastName:c,gender:m}){this.id=t,this.isActive=s,this.balance=a,this.avatar=n,this.firstName=r,this.lastName=c,this.gender=m}}const h=e=>{const{avatar:t,balance:s,first_name:a,gender:n,id:r,isActive:c,last_name:m}=e;return new y({avatar:t,balance:s,firstName:a,gender:n,id:r,isActive:c,lastName:m})},f=async(e=4)=>{const t=`http://localhost:3001/users?_page=${e}`;return(await(await fetch(t)).json()).map(h)},o={currentPage:0,users:[]},P=async()=>{const e=await f(o.currentPage+1);e.length!==0&&(o.currentPage+=1,o.users=e)},b=async()=>{if(o.currentPage===1)return;const e=await f(o.currentPage-1);o.users=e,o.currentPage-=1},T=e=>{let t=!1;o.users=o.users.map(s=>s.id===e.id?(t=!0,e):s),o.users.length<10&&!t&&o.users.push(e)},$=async()=>{const e=await f(o.currentPage);if(e.length===0){await b();return}o.users=e},l={loadNextPage:P,loadPreviousPage:b,onUserChanged:T,reloadPage:$,getUsers:()=>[...o.users],getCurrentPage:()=>o.currentPage},E=async e=>{const t=`http://localhost:3001/users/${e}`,a=await(await fetch(t,{method:"DELETE"})).json();return console.log({deleteResult:a}),!0},S=`<div class="modal-dialog">\r
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
</div>`;const A=async e=>{const t=`http://localhost:3001/users/${e}`,a=await(await fetch(t)).json(),n=h(a);return console.log({user:n}),n};let i,d,p={};const L=async e=>{if(i==null||i.classList.remove("hide-modal"),p={},!e)return;const t=await A(e);U(t)},v=()=>{i==null||i.classList.add("hide-modal"),d==null||d.reset()},U=e=>{d.querySelector('[name="firstName"]').value=e.firstName,d.querySelector('[name="lastName"]').value=e.lastName,d.querySelector('[name="balance"]').value=e.balance,d.querySelector('[name="isActive"]').checked=e.isActive,p=e},x=(e,t)=>{i||(i=document.createElement("div"),i.innerHTML=S,i.className="modal-container hide-modal",d=i.querySelector("form"),i.addEventListener("click",s=>{s.target.className==="modal-container"&&v()}),d.addEventListener("submit",async s=>{s.preventDefault();const a=new FormData(d);a.get("isActive")||a.append("isActive","off");const n={...p};for(const[r,c]of a){if(r==="balance"){n[r]=+c;continue}if(r==="isActive"){n[r]=c==="on";continue}n[r]=c}console.log(n),await t(n),v()}),e.append(i))};let u;const B=()=>{const e=document.createElement("table"),t=document.createElement("thead");t.innerHTML=`
    <tr>
        <th>#ID</th>
        <th>Balance</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
    </tr>
    `;const s=document.createElement("tbody");return e.append(t,s),e},M=e=>{const t=e.target.closest(".select-user");if(console.log(t),!t)return;const s=t.getAttribute("data-id");L(s)},j=async e=>{const t=e.target.closest(".delete-user");if(!t)return;const s=t.getAttribute("data-id");try{await E(s),await l.reloadPage(),document.querySelector("#current-page").innerText=l.getCurrentPage(),g()}catch{alert("No se pudo eliminar")}},g=e=>{const t=l.getUsers();u||(u=B(),e.append(u),u.addEventListener("click",a=>M(a)),u.addEventListener("click",a=>j(a)));let s="";t.forEach(a=>{s+=`
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
        `}),u.querySelector("tbody").innerHTML=s};const C=e=>{const t=document.createElement("button");t.innerText=" Next >";const s=document.createElement("button");s.innerText="<Prev ";const a=document.createElement("span");a.id="current-page",a.innerText=l.getCurrentPage(),e.append(s,a,t),t.addEventListener("click",async()=>{await l.loadNextPage(),a.innerText=l.getCurrentPage(),g(e)}),s.addEventListener("click",async()=>{await l.loadPreviousPage(),a.innerText=l.getCurrentPage(),g(e)})};const q=(e,t)=>{const s=document.createElement("button");s.innerText="+",s.classList.add("fab-button"),e.append(s),s.addEventListener("click",()=>{L()})},H=e=>{const{avatar:t,balance:s,firstName:a,gender:n,id:r,isActive:c,lastName:m}=e;return{avatar:t,balance:s,first_name:a,gender:n,id:r,isActive:c,last_name:m}},k=async e=>{const t=new y(e);if(!t.firstName||!t.lastName)throw"First & last name are required";const s=H(t);let a;return t.id?a=await D(s):a=await O(s),h(a)},O=async e=>{const a=await(await fetch("http://localhost:3001/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json();return console.log({newUser:a}),a},D=async e=>{const t=`http://localhost:3001/users/${e.id}`,a=await(await fetch(t,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json();return console.log({updatedUser:a}),a},F=async e=>{e.innerHTML="Loading...",await l.loadNextPage(),e.innerHTML="",g(e),C(e),q(e),x(e,async t=>{const s=await k(t);console.log(s),l.onUserChanged(s),g()})};document.querySelector("#app").innerHTML=`
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
