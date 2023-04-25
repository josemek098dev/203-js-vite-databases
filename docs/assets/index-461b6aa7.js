(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const w="/assets/javascript-8dac5379.svg",N="/vite.svg";class y{constructor({id:t,isActive:n,balance:a,avatar:s,firstName:r,lastName:c,gender:m}){this.id=t,this.isActive=n,this.balance=a,this.avatar=s,this.firstName=r,this.lastName=c,this.gender=m}}const h=e=>{const{avatar:t,balance:n,first_name:a,gender:s,id:r,isActive:c,last_name:m}=e;return new y({avatar:t,balance:n,firstName:a,gender:s,id:r,isActive:c,lastName:m})},f=async(e=4)=>{const t=`http://localhost:3001/users?_page=${e}`;return(await(await fetch(t)).json()).map(h)},o={currentPage:0,users:[]},P=async()=>{const e=await f(o.currentPage+1);e.length!==0&&(o.currentPage+=1,o.users=e)},b=async()=>{if(o.currentPage===1)return;const e=await f(o.currentPage-1);o.users=e,o.currentPage-=1},T=e=>{let t=!1;o.users=o.users.map(n=>n.id===e.id?(t=!0,e):n),o.users.length<10&&!t&&o.users.push(e)},$=async()=>{const e=await f(o.currentPage);if(e.length===0){await b();return}o.users=e},l={loadNextPage:P,loadPreviousPage:b,onUserChanged:T,reloadPage:$,getUsers:()=>[...o.users],getCurrentPage:()=>o.currentPage},E=async e=>{const t=`http://localhost:3001/users/${e}`,a=await(await fetch(t,{method:"DELETE"})).json();return console.log({deleteResult:a}),!0},S=`<div class="modal-dialog">\r
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
</div>`;const A=async e=>{const t=`http://localhost:3001/users/${e}`,a=await(await fetch(t)).json(),s=h(a);return console.log({user:s}),s};let i,d,p={};const L=async e=>{if(i==null||i.classList.remove("hide-modal"),p={},!e)return;const t=await A(e);U(t)},v=()=>{i==null||i.classList.add("hide-modal"),d==null||d.reset()},U=e=>{d.querySelector('[name="firstName"]').value=e.firstName,d.querySelector('[name="lastName"]').value=e.lastName,d.querySelector('[name="balance"]').value=e.balance,d.querySelector('[name="isActive"]').checked=e.isActive,p=e},x=(e,t)=>{i||(i=document.createElement("div"),i.innerHTML=S,i.className="modal-container hide-modal",d=i.querySelector("form"),i.addEventListener("click",n=>{n.target.className==="modal-container"&&v()}),d.addEventListener("submit",async n=>{n.preventDefault();const a=new FormData(d);a.get("isActive")||a.append("isActive","off");const s={...p};for(const[r,c]of a){if(r==="balance"){s[r]=+c;continue}if(r==="isActive"){s[r]=c==="on";continue}s[r]=c}console.log(s),await t(s),v()}),e.append(i))};let u;const B=()=>{const e=document.createElement("table"),t=document.createElement("thead");t.innerHTML=`
    <tr>
        <th>#ID</th>
        <th>Balance</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
    </tr>
    `;const n=document.createElement("tbody");return e.append(t,n),e},M=e=>{const t=e.target.closest(".select-user");if(console.log(t),!t)return;const n=t.getAttribute("data-id");L(n)},H=async e=>{const t=e.target.closest(".delete-user");if(!t)return;const n=t.getAttribute("data-id");try{await E(n),await l.reloadPage(),document.querySelector("#current-page").innerText=l.getCurrentPage(),g()}catch{alert("No se pudo eliminar")}},g=e=>{const t=l.getUsers();u||(u=B(),e.append(u),u.addEventListener("click",a=>M(a)),u.addEventListener("click",a=>H(a)));let n="";t.forEach(a=>{n+=`
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
        `}),u.querySelector("tbody").innerHTML=n};const j=e=>{const t=document.createElement("button");t.innerText=" Next >";const n=document.createElement("button");n.innerText="<Prev ";const a=document.createElement("span");a.id="current-page",a.innerText=l.getCurrentPage(),e.append(n,a,t),t.addEventListener("click",async()=>{await l.loadNextPage(),a.innerText=l.getCurrentPage(),g(e)}),n.addEventListener("click",async()=>{await l.loadPreviousPage(),a.innerText=l.getCurrentPage(),g(e)})};const q=(e,t)=>{const n=document.createElement("button");n.innerText="+",n.classList.add("fab-button"),e.append(n),n.addEventListener("click",()=>{L()})},C=e=>{const{avatar:t,balance:n,firstName:a,gender:s,id:r,isActive:c,lastName:m}=e;return{avatar:t,balance:n,first_name:a,gender:s,id:r,isActive:c,last_name:m}},k=async e=>{const t=new y(e);if(!t.firstName||!t.lastName)throw"First & last name are required";const n=C(t);let a;return t.id?a=await D(n):a=await O(n),h(a)},O=async e=>{const a=await(await fetch("http://localhost:3001/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json();return console.log({newUser:a}),a},D=async e=>{const t=`http://localhost:3001/users/${e.id}`,a=await(await fetch(t,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).json();return console.log({updatedUser:a}),a},F=async e=>{e.innerHTML="Loading...",await l.loadNextPage(),e.innerHTML="",g(e),j(e),q(e),x(e,async t=>{const n=await k(t);console.log(n),l.onUserChanged(n),g()})};document.querySelector("#app").innerHTML=`
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
