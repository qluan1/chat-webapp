import { CONVERSATIONS_LOCAL_STORAGE_KEY } from "../../constants";

function validConverstations(conversations) {
  return true;
}

function loadConversationsFromLocalStorage() {
  let data = [];
  try {
    const stored = JSON.parse(window.localStorage.getItem(CONVERSATIONS_LOCAL_STORAGE_KEY));
    data = validConverstations(stored)? stored: []
  } catch (err) {
    console.log(err);
  }
  return data;
}

function saveConversationsToLocalStorage(data) {
  window.localStorage.setItem(CONVERSATIONS_LOCAL_STORAGE_KEY, JSON.stringify(data));
}

export {
  validConverstations,
  loadConversationsFromLocalStorage,
  saveConversationsToLocalStorage,
};
