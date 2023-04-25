import usersStore from "./store/users-store";
import { renderTable } from "./presentation/render-table/render-table.js";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderModal } from "./presentation/render-modal/render-modal";
import { saveUser } from "./use-cases/save-user";

export const UsersApp = async(element) =>{

    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();

    element.innerHTML = ''
    renderTable(element);

    renderButtons(element);
    renderAddButton(element, ()=> {console.log('desde el padre')});
    renderModal(element, async(userLike) => {
        const user = await saveUser (userLike);
        console.log(user)
        usersStore.onUserChanged(user);
        renderTable();
    } )
}