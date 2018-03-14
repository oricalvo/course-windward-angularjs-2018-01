import {createStore} from "redux";
import {appModule} from "./app.module";

const initialState = {
  contacts: [
      {id: 1, name: "Ori"},
      {id: 2, name: "Roni"},
      {id: 3, name: "Udi"},
  ]
};

function reducer(state, action){
    if(action.type == "DELETE_CONTACT") {
        const index = state.contacts.findIndex(c => c == action.contact);
        if(index != -1){
            const newContacts = state.contacts.concat([]);
            newContacts.splice(index, 1);

            return Object.assign({}, state, {
                contacts: newContacts,
            });
        }
    }

    return state;
}

export const store = createStore(reducer, initialState);

appModule.value("store", store);
