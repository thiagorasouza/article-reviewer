export function getFromLocal(itemName) {
  try {
    return JSON.parse(localStorage.getItem(itemName));
  } catch (error) {
    return null;
  }
}

export function saveToLocal(itemName, itemData) {
  try {
    localStorage.setItem(itemName, JSON.stringify(itemData));
    return true;
  } catch (error) {
    return false;
  }
}
